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

## Hosting — GitHub Pages (already set up)
This repo (https://github.com/benolson51/anneka) **auto-deploys to GitHub Pages** on
every push to `main`, via `.github/workflows/pages.yml`. The custom domain is set in
the `CNAME` file (`annekasweeneylaw.com`). No build step — files are served as-is
(`.nojekyll`).

### Final step: point the Wix domain at GitHub Pages
The domain currently points to Wix (a parking page). To make it serve this site, edit
the DNS in your Wix account:

1. **Wix → Domains → annekasweeneylaw.com → Manage DNS records** (Advanced / Edit DNS).
2. Under **A records** for host `@` (the root): remove the existing Wix A records and add
   GitHub Pages' four IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. **CNAME** record for host `www` → `benolson51.github.io`
4. *(Optional, IPv6)* AAAA records for `@`:
   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```
5. Save. DNS propagates in ~10 minutes to a few hours. The site then serves at
   **https://annekasweeneylaw.com** with free, automatic HTTPS.

> If Wix won't let you edit the root `@` A records, it's because the domain is still
> "connected" to a Wix site — disconnect it from any Wix site first, then use the DNS
> records editor.

Until DNS is changed the site isn't publicly viewable (the `benolson51.github.io/anneka`
URL just 301-redirects to the custom domain). To get a temporary preview link before
touching DNS, remove the `CNAME` file and the custom domain from Pages settings.

**Before launch:** delete `robots.txt` (it blocks search engines while the site is a
draft) so Google can index the real site.

## Legal note
Every page footer carries a disclaimer (no legal advice / no attorney-client
relationship) and Anneka's **State Bar No. 306025**, as California advertising rules
require. Please have Anneka review all copy for accuracy and compliance with the CA
Rules of Professional Conduct on attorney advertising before launch.
