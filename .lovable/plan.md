

## Plan: Update config to deploy from root

Currently `base: "./"` uses relative paths, which works for subdirectory deploys (like `username.github.io/repo-name`). To deploy from root (e.g., a custom domain or `username.github.io`), change it to `"/"`.

### Changes

**1. `vite.config.ts`**
- Change `base: "./"` → `base: "/"`

This ensures all asset paths are absolute (e.g., `/assets/index.js` instead of `./assets/index.js`), which is required for root-level deployment and proper client-side routing.

