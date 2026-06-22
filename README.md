# The Law Office of Anneka G. Sweeney — website

A fast, static (HTML/CSS/JS) site for a boutique wills & trusts / estate-planning
practice in Kingsburg, CA. No build step, no framework — just open the files.

Design is intentionally **light, warm, and airy** to match Anneka's Instagram
(@annekagrace): ivory + warm camel + soft neutrals, an elegant serif (Cormorant
Garamond) over Jost/Inter, and a signature **arched photo frame**.

## Pages
- `index.html` — Home (hero, personal intro, services, why-us, quote, CTA)
- `about.html` — Anneka's story + credentials + approach
- `services.html` — Service list + pricing note + FAQ
- `contact.html` — Contact form + office info + live Google map
- `css/styles.css` — all styling (edit the `:root` variables to retheme)
- `js/main.js` — mobile menu, footer year, scroll-reveal animations
- `favicon.svg` — "AS" monogram favicon

## Preview locally
Double-click `index.html`, or run a tiny local server:

```bash
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

## Already filled in (from public info — please have Anneka confirm)
- Firm name: **The Law Office of Anneka G. Sweeney**
- Attorney: **Anneka Grace Sweeney, Esq.** — **CA State Bar No. 306025**
- Office: **3160 Fairway Ave, Kingsburg, CA 93631** · **(559) 618-1069**
- Background: Kingsburg High → Fresno State → J.D., San Joaquin College of Law
- Instagram: **@annekagrace** (linked in footer + about + contact)
- Live Google map embedded on the contact page (no API key needed)

## Still to add (search files for `[` brackets, `#` placeholder links, and TODOs)
- [ ] **Headshot photo** — replace the `.portrait-arch` placeholders (home hero +
      home intro + about). A bright, warm, IG-style portrait is perfect. ~4:5 vertical.
- [ ] **Email address** — replace `[email]` / `[email address]` everywhere
- [ ] **Contact form**: create a free form at https://formspree.io and replace
      `YOUR_FORM_ID` in `contact.html` (or use Netlify Forms).
- [ ] **LinkedIn + Facebook URLs** — replace the `href="#"` social links in the footers
- [ ] **Office hours** — currently shows "Mon–Fri 9–5, evenings/weekends by appt."
      on the contact page; confirm or change.
- [ ] Confirm the **service list** and **flat-fee** language match how Anneka works
- [ ] The personal **quote** on the home page is written in Anneka's voice — have her
      approve or reword it.
- [ ] Domain (e.g. a custom URL) + hosting choice

## Branding / retheme
Palette and fonts live at the top of `css/styles.css`:
- `--accent` (camel), `--ivory`, `--cream`, `--sand`, `--sage` — change to retheme
- Fonts: Cormorant Garamond (headings), Jost (labels/nav), Inter (body)

## Deploy + connect the Wix domain (annekasweeneylaw.com)
This is hand-coded HTML, so it does **not** go inside the Wix editor — Wix only hosts
sites built in Wix. Instead, host the real site on a free static host and point the
Wix-registered domain at it.

**1. Put it live (fastest — instant sample link):**
- Go to https://app.netlify.com/drop and drag this whole folder onto the page.
- Netlify gives you a live URL like `https://abc123.netlify.app` — share that with Anneka.
- Create a free Netlify account to keep the site and rename the subdomain.

**2. Point annekasweeneylaw.com at it — once Anneka approves:**
- In Netlify: Site → Domain management → Add `annekasweeneylaw.com`. Netlify shows you
  the exact DNS records to create.
- In Wix: Domains → annekasweeneylaw.com → Manage / Advanced DNS records:
  - **A record** for `@` → Netlify's IP (currently `75.2.60.5` — use whatever Netlify shows).
  - **CNAME** for `www` → `your-site.netlify.app`.
- Netlify auto-provisions HTTPS. DNS changes take a few minutes to a few hours.
- Alternative: point Wix's **nameservers** to Netlify's (shown in Netlify → Domains).

**Before launch:** delete `robots.txt` (it blocks search engines while the site is a
draft) so Google can index the real site.

Other hosts (Cloudflare Pages, GitHub Pages) work the same way if you prefer.

## Legal note
Every page footer carries a disclaimer (no legal advice / no attorney-client
relationship) and Anneka's **State Bar No. 306025**, as California advertising rules
require. Please have Anneka review all copy for accuracy and compliance with the CA
Rules of Professional Conduct on attorney advertising before launch.
