# NextJS-Deploy Skill

**Version:** 1.0.0  
**Tags:** nextjs · github-pages · ci-cd · deployment

## What this skill does

Configures a Next.js project for static export and deploys it to GitHub Pages using GitHub Actions. When invoked, an AI agent following this skill should verify or apply the following steps:

## Step 1 — `next.config.ts` static export settings

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // emit static files into ./out
  basePath: "/github-claw",  // must match <org>/<repo> path on GitHub Pages
  images: {
    unoptimized: true,       // next/image works without a Node server
  },
};

export default nextConfig;
```

> ⚠ Change `basePath` to match the actual repository name.

## Step 2 — `.nojekyll` file

GitHub Pages runs Jekyll by default and ignores files/dirs starting with `_`.  
The Next.js output includes `_next/` which would be silently dropped.

Fix: place an empty `.nojekyll` file in `public/`:

```bash
touch public/.nojekyll
```

This file is copied verbatim into `./out/` during build and signals GitHub Pages to skip Jekyll processing.

## Step 3 — GitHub Actions workflow

The canonical workflow is at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Step 4 — Enable GitHub Pages in repository settings

1. Go to **Settings → Pages**.
2. Under *Build and deployment → Source*, select **GitHub Actions**.
3. Save — the next push to `main` will trigger a deploy.

## Resulting URL

```
https://<org>.github.io/<repo>/
```

For this project: `https://jasonkang2026.github.io/github-claw/`

## Verification checklist for agents

- [ ] `next.config.ts` has `output: "export"` and correct `basePath`
- [ ] `public/.nojekyll` exists
- [ ] `.github/workflows/deploy.yml` is present and targets the correct branch
- [ ] `npm run build` completes without errors locally
- [ ] GitHub Pages source is set to **GitHub Actions** in repo settings
- [ ] `./out/index.html` exists after build

## Installation

```bash
bash .agents/skills/nextjs-deploy/install.sh
```
