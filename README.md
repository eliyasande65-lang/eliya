# Eliya Sande — Portfolio, Blog & PWA

Personal site for Eliya Sande — Telecommunication and Information Engineering
student at JKUAT, and developer of [QejaConnect](https://qejaconnect.co.ke)
and [Codeforge](https://eliyasande65-lang.github.io/codeforge).

Live at: https://eliyasande65-lang.github.io/eliya

## Pages
- `index.html` — Home
- `about.html` — About / education
- `projects.html` — Projects (QejaConnect, Codeforge)
- `blog.html` — Blog posts
- `contact.html` — Contact (call, email, WhatsApp)

## Replacing the photos
The `images/` folder currently has 10 placeholder images (`img1.jpg` …
`img10.jpg`) so the site looks right immediately. To use your real photos,
just upload your own files to `images/` **with the exact same names**
(`img1.jpg` through `img10.jpg`) — no HTML changes needed, they'll show up
automatically.

## PWA
This site is an installable Progressive Web App:
- `manifest.json` — app name, icons, theme color
- `service-worker.js` — offline caching (pages + images)
- `icons/` — app icons

Visitors on Chrome/Edge/Android will see an "Install" banner; on iOS,
Safari's "Add to Home Screen" works too.
