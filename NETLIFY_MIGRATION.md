# Netlify Migration Runbook

## 1) App Classification

- `SSR app`: yes (Nuxt 2 `mode: 'universal'` currently served by `nuxt start` on Heroku).
- `Static SPA/SSG`: supported and now configured (`npm run generate` + `dist` publish).
- `API server`: no custom API routes in repo.
- `Background worker`: none found.
- `WebSocket server`: none found.
- `Cron jobs`: none found.

## 2) Netlify Fit Decision

- Netlify is a good fit for this project as a static Nuxt deploy at lowest cost.
- Important non-1:1 difference from Heroku SSR:
  - New Storyblok content (new posts/tags) will not appear until the next Netlify deploy.
  - Existing content and routing behavior are preserved for generated routes.

## 3) Implemented Changes

- Added `netlify.toml`:
  - Build command: `npm run generate`
  - Publish dir: `dist`
  - Node version pin: `18`
  - Asset cache headers for `/_nuxt/*`
- Updated `nuxt.config.js` `generate.routes`:
  - Still generates blog post routes.
  - Now also generates `/category/:categoryId` routes from Storyblok tags.
- Removed `node-sass` from `package.json` to avoid build failures on modern Netlify Node runtimes.
- Added `.nvmrc` with Node `18`.

## 4) Environment Variables Mapping

Set in Netlify Site settings -> Environment variables:

- `PUBLICKEY`: Storyblok public/preview token used by production static build (required).
- `APITOKEN`: legacy fallback token for route generation/runtime (optional if `PUBLICKEY` is set).
- `PREVIEWKEY`: optional token for non-production preview builds.
- `STORYBLOK_ACCESS_TOKEN`: optional explicit override for production runtime token.
- `STORYBLOK_PREVIEW_TOKEN`: optional explicit override for non-production runtime token.
- `STORYBLOK_GENERATE_TOKEN`: optional explicit override for route generation token.

Not needed on Netlify:

- `HOST`
- `PORT`

## 5) Cutover Checklist (Low Downtime)

1. Create Netlify site from this repo.
2. Configure env vars (`PUBLICKEY` required; `APITOKEN`/`PREVIEWKEY` optional).
3. Deploy preview and validate:
   - `/`
   - `/blog`
   - `/about`
   - At least one `/blog/<post-slug>`
   - At least one `/category/<category-id>`
4. Deploy to production on Netlify (Netlify subdomain first).
5. Add custom domain in Netlify and verify SSL certificate issued.
6. Lower DNS TTL (for apex + `www`) to 60-300s before switch.
7. Switch DNS to Netlify records.
8. Re-test all critical paths and analytics.
9. Keep Heroku app running for 24-48 hours as hot rollback.
10. If stable, decommission Heroku dyno.

## 6) Rollback Plan

1. Re-point DNS back to Heroku DNS target.
2. Confirm SSL and page health on Heroku.
3. Keep Netlify deployed for investigation.
4. Fix and reattempt cutover in a new window.

## 7) Ongoing Operations

- Add a content publish webhook from Storyblok -> Netlify Build Hook to auto-redeploy on content updates.
