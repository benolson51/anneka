/**
 * Contact-form backend for agsweeneylaw.com.
 * Runs in Google Apps Script, bound to the "Website Inquiries" Google Sheet —
 * it is not part of the static site. Each submission is saved as a row and
 * emailed to Anneka. Deployed as a Web app (Execute as: Me, Access: Anyone);
 * the /exec URL goes in contact.html as the form's data-endpoint and action.
 */
const NOTIFY_EMAIL = 'anneka@agsweeneylaw.com';
const FIELDS = ['name', 'email', 'phone', 'topic', 'message'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p._honey) return json_({ success: true });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Received', 'Name', 'Email', 'Phone', 'Topic', 'Message']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date()].concat(FIELDS.map((f) => clean_(p[f]))));
  } finally {
    lock.releaseLock();
  }

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: p.email || NOTIFY_EMAIL,
    subject: 'New consultation request — ' + (p.name || 'agsweeneylaw.com'),
    body:
      FIELDS.map((f) => f.charAt(0).toUpperCase() + f.slice(1) + ': ' + (p[f] || '—')).join('\n') +
      '\n\nEvery request is also saved in the "Website Inquiries" Google Sheet.',
  });

  return json_({ success: true });
}

// Visitor text starting with = + - @ would otherwise run as a spreadsheet formula.
function clean_(value) {
  const s = String(value || '').trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
