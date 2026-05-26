# No1 Ställningar — Phase 01: Project Setup

## Goal
Bootstrap the Vite + React + TypeScript project with all dependencies, folder structure, environment config, and Vercel deployment config.

## Tasks

- [x] Scaffold a new Vite project in the repo root using the React + TypeScript template: `npm create vite@latest . -- --template react-ts` (answer yes to overwrite if prompted, the repo is empty)
- [x] Install production dependencies: `npm install react-router-dom react-helmet-async @vercel/node`
- [x] Install Tailwind CSS and its peer dependencies: `npm install -D tailwindcss postcss autoprefixer`
- [x] Run `npx tailwindcss init -p` to generate `tailwind.config.js` and `postcss.config.js`
- [x] Install Resend SDK for the serverless function: `npm install resend`
- [x] Install dev utilities: `npm install -D @types/node`
- [x] Create the full folder structure under `src/`:
  ```
  src/
    assets/          # images, icons, logo
    components/      # shared UI components (Header, Footer, Button, etc.)
    data/            # all editable content config files
    hooks/           # custom React hooks
    pages/           # one file per route
    styles/          # global.css and any shared style utilities
    types/           # shared TypeScript types
  ```
- [x] Create `api/` folder in the repo root (Vercel serverless functions)
- [x] Create `public/` entries: `public/robots.txt` and `public/sitemap.xml` (placeholder content — SEO phase will fill them)
- [x] Create `.env.example` in the repo root with:
  ```
  # Resend API key — get one at https://resend.com
  RESEND_API_KEY=re_your_api_key_here

  # Recipient email for quote form submissions
  QUOTE_RECIPIENT_EMAIL=martin@mwstallningar.se
  ```
- [x] Add `.env` and `.env.local` to `.gitignore` (Vite scaffold may already do this — verify)
  > Fixed: `.env` was not explicitly listed; `.env.local` was covered by `*.local`. Added both explicitly.
- [x] Create `vercel.json` in the repo root to route API calls correctly:
  ```json
  {
    "rewrites": [
      { "source": "/api/:path*", "destination": "/api/:path*" }
    ]
  }
  ```
- [x] Update `vite.config.ts` to set the base path and alias `@` to `src/`:
  ```ts
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import path from 'path'

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  })
  ```
- [x] Update `tsconfig.json` to add the path alias:
  ```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
  ```
  > Paths configured in `tsconfig.app.json` (correct for Vite project references setup). Added `"ignoreDeprecations": "6.0"` to silence TS6 baseUrl deprecation warning.
- [x] Set the HTML `lang` attribute to `sv` in `index.html`: `<html lang="sv">`
- [x] Update the `<title>` in `index.html` to `No1 Ställningar – Göteborg`
- [x] Add a `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to `index.html` if not already present
- [x] Clear out all Vite boilerplate from `src/App.tsx`, `src/App.css`, and `src/index.css` — leave only bare-minimum shell components (router outlet and global CSS import)
  > `App.tsx` replaced with BrowserRouter + Routes shell. `App.css` emptied. `index.css` replaced with Tailwind directives.
- [x] Verify the dev server starts cleanly: `npm run dev`
  > Dev server started at http://localhost:5174/ in 557ms. Build (`npm run build`) also passes cleanly.
