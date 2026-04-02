

## Plan: Align GitHub Actions workflow with JPFF Ice Cream Shop

The preview works fine locally. The issue is likely that the GitHub Pages deployment fails. The current workflow is missing a key step (`configure-pages`) that the working Ice Cream Shop project has.

### Changes to `.github/workflows/deploy.yml`

Update to match the working pattern from the Ice Cream Shop project:

1. Add `workflow_dispatch` trigger (allows manual re-deploys)
2. Add `actions/configure-pages@v4` step between build and upload (required for Pages to work correctly)
3. Use `npm install` instead of `npm ci` (more resilient when lockfile has issues)
4. Add `GITHUB_PAGES: true` env var to the build step
5. Change `cancel-in-progress: false` to avoid cancelling ongoing deploys

The final workflow will be:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
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
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
        env:
          GITHUB_PAGES: true
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### No other file changes needed
The `vite.config.ts` already has `base: "/"` which is correct.

