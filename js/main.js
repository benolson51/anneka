// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: send in the background so an outage at the delivery service
// never strands a visitor on an error page — offer a prefilled email instead.
const consultForm = document.getElementById("consult-form");
if (consultForm && "fetch" in window) {
  const button = consultForm.querySelector('button[type="submit"]');
  const buttonLabel = button.textContent;
  const statusEl = consultForm.querySelector(".form-status");

  consultForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(consultForm);
    button.disabled = true;
    button.textContent = "Sending…";
    statusEl.hidden = true;

    try {
      const res = await fetch(consultForm.dataset.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(data),
      });
      const json = await res.json().catch(() => ({}));
      // A 200 can still mean "not delivered" (success: false), so check both.
      if (!res.ok || String(json.success) !== "true") throw new Error("not delivered");
      window.location.href = "thanks.html";
    } catch {
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        `Topic: ${data.get("topic")}`,
        "",
        data.get("message") || "",
      ].join("\n");
      statusEl.querySelector(".form-status__email").href =
        "mailto:anneka@agsweeneylaw.com" +
        "?subject=" + encodeURIComponent(`Consultation request from ${data.get("name")}`) +
        "&body=" + encodeURIComponent(body);
      statusEl.hidden = false;
      button.disabled = false;
      button.textContent = buttonLabel;
    }
  });
}

// Scroll-reveal animations (respects prefers-reduced-motion via CSS)
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  // Fallback: show everything if IntersectionObserver isn't available
  revealEls.forEach((el) => el.classList.add("in"));
}
