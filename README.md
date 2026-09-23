# crewteams.ai

Marketing site for **CrewTeams**: *Engage. Predict. Orchestrate.*

Built with [Astro](https://astro.build) as a fully static site (no client-side JavaScript) and deployed on Netlify.

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
  layouts/Base.astro      # <head>, SEO/OG tags, header + footer
  components/             # Header, Footer, Logo
  pages/index.astro       # home page (content arrays at the top of the file)
  pages/thanks.astro      # demo-form success page
  pages/404.astro
  styles/global.css       # design tokens and shared styles
public/                   # favicon, robots.txt (copied as-is)
netlify.toml              # build settings, www→apex redirect, headers
```

## Demo form

The "Request a demo" form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify
detects it at build time. Submissions appear under **Site → Forms** in the Netlify dashboard,
where you can also set up email notifications.
