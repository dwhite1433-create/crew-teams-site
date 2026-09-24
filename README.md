# crewteams.ai

Marketing site for **CrewTeams**: *Engage. Predict. Orchestrate.*

Built with [Astro](https://astro.build) as a fully static site (one tiny script for the mobile menu) and deployed on Netlify.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

Requires Node 22.12+ (see `.nvmrc`).

## Structure

```
src/
  data/site.js            # nav, contact details, the eight capabilities (edit once, used everywhere)
  layouts/Base.astro      # <head>, SEO/OG tags, header + footer
  components/             # Header, Footer
  pages/index.astro       # home page
  pages/get-started/      # demo request form (Netlify Forms)
  pages/thanks.astro      # demo-form success page
  pages/404.astro         # "coming soon" page for routes not built yet
  styles/global.css       # brand tokens (from the logo), self-hosted Roboto, shared styles
public/                   # logos, photos, fonts, favicon, robots.txt
netlify.toml              # build settings, www→apex redirect, headers
```

## Demo form

The "Request a demo" form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify
detects it at build time. Submissions appear under **Site → Forms** in the Netlify dashboard,
where you can also set up email notifications.
