# La Vera Clemson — website

A plain static site (HTML/CSS/JS, no build step) for La Vera Clemson Mexican
Kitchen: Home, Menu, Catering (with a request form), and Location & Contact.

## Before you launch — 3 things to finish

1. **Replace the placeholder domain.** `www.lavaraclemson.com` was used as a
   placeholder in the page titles' canonical links, Open Graph tags, and
   structured data (the `<script type="application/ld+json">` blocks) on every
   page, plus `robots.txt` and `sitemap.xml`. Once you have your real domain,
   find-and-replace `https://www.lavaraclemson.com` across all files.

2. **Connect the catering form to your email.** The form on `catering.html`
   currently points to a placeholder Formspree endpoint
   (`https://formspree.io/f/YOUR_FORM_ID`). To receive submissions:
   - Go to [formspree.io](https://formspree.io) and create a free account
     with your restaurant's email address
   - Create a new form, copy the endpoint URL it gives you
   - In `catering.html`, replace `YOUR_FORM_ID` in the `<form action="...">`
     line with your real form ID
   - Until this is done, the form's note banner tells visitors to call
     (864) 290-5154 instead — so nothing is broken in the meantime

3. **Add Instagram and any other social/ordering links.** The footer and
   Location page currently link only to your Google Business Profile. Add
   your Instagram (and any ordering platform like Toast or DoorDash) links
   in the footer of each HTML file and on `location.html` once you have them.

## Deploying to Vercel (you control this — nothing was deployed for you)

### Option 1: Vercel CLI (fastest, needs Node.js installed)

1. Install the CLI once: `npm i -g vercel`
2. From inside this project folder, run: `vercel login`
3. Run: `vercel` — accept defaults for a static site (no build command,
   output directory is the project root)
4. When you're happy with the preview, run: `vercel --prod`

### Option 2: Vercel dashboard, no CLI

1. Go to [vercel.com/new](https://vercel.com/new) and sign in
2. Drag and drop this project folder onto the import screen, or push it to a
   GitHub repo and choose "Import Project"
3. Leave the framework preset as "Other" / static — no build command needed
4. Click Deploy

### Custom domain

Once deployed, add your domain from the project's Settings → Domains tab in
the Vercel dashboard, and follow Vercel's DNS instructions for your registrar.

### Updating the site later

- **CLI users**: edit the files locally, then rerun `vercel --prod`
- **GitHub users**: push changes to the connected repo — Vercel redeploys
  automatically

## What's built in for SEO (Google 2026 guidelines)

- Unique, keyword-relevant `<title>` and meta description per page
- Canonical URLs and Open Graph tags for clean sharing previews
- `Restaurant` / `Menu` / `Service` structured data (JSON-LD) on every page,
  matching your Google Business Profile info (name, address, phone, hours)
- Semantic HTML with one `<h1>` per page and a logical heading hierarchy
- Descriptive `alt` text on every image
- `sitemap.xml` and `robots.txt`
- Mobile-first responsive layout, no render-blocking scripts, compressed
  images — built for strong Core Web Vitals
- Fast static hosting via Vercel (no server, no database)

**Keep your NAP (name, address, phone) identical** across this site, your
Google Business Profile, and Instagram bio — consistency across all three is
one of the strongest local-SEO signals.
