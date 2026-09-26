# Hamze Haashi — portfolio

A responsive personal portfolio with project case studies, experience, technical skills, and a Netlify Forms contact backend. HTML, CSS and JavaScript keep the front end fast and accessible; Netlify handles submission storage and spam filtering.

## Run

Node.js 20 or newer. `npm run build` creates `dist/`. No application dependencies or API keys are required. `npx netlify dev` starts a local preview. Local previews and GitHub Pages deliberately show an explanation instead of claiming to send contact messages.

## Publish on Netlify

Import `hamzehaashi/hamzehaashi.github.io` into Netlify and select the desired branch. Build command: `node build.mjs`. Publish directory: `dist`. Enable form detection in Netlify's Forms settings **before** deployment. The `netlify.toml` file supplies the build settings and security headers.

Netlify must register a form named `contact` with name, email, message and bot-field fields. Confirm its presence in the Forms dashboard after deployment, then make one test submission and verify it arrives. The static form includes a honeypot and browser validation. AJAX submissions use the Netlify form endpoint; non-JavaScript submissions go to `/thank-you`.

Submissions are stored in the site's Netlify Forms dashboard. To receive email alerts, add a form submission email notification under Project configuration → Notifications. No email notification recipient is configured in this repository.

The website is not deployed or the backend verified merely by building the files. GitHub Pages can host the front end but does not process Netlify forms.

## Edit content

- `index.html`: biography, experience, skills, contact email, and project summaries.
- `app.js`: project case study details, responsive navigation, accessible dialogs, and contact status handling.
- `styles.css`: palette, type, layout, and responsive styles.
- `assets/headshot.jpg`: original portrait from the portfolio repository.

The prior portfolio is preserved in Git history. This version updates the graduated-student biography and uses historical fund experience, with no unverified performance statistics. ValuMatrix is clearly identified as a prototype.
