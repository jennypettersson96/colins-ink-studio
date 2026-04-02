

## Plan: Set up GitHub Pages structure for deployment via GitHub Actions

The workflow and Vite config are already correct. The missing piece is a **404.html** file for SPA routing on GitHub Pages, and ensuring the build output works correctly.

### Changes

**1. Add `public/404.html`** — SPA redirect fallback
GitHub Pages serves this for any route that doesn't match a static file. It redirects all paths back to `index.html` so client-side routing works.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      // Redirect all 404s to index.html for SPA routing
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
</html>
```

**2. Add SPA redirect handler to `index.html`** — inside `<head>`, add a script that picks up the redirect from 404.html and restores the correct URL via `replaceState`:

```html
<script>
  (function(l) {
    if (l.search[1] === '/') {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
    }
  }(window.location))
</script>
```

**3. Add `.nojekyll` file to `public/`** — empty file that tells GitHub Pages not to process the site through Jekyll (which ignores files starting with `_`, like `_assets`).

These three additions complete the GitHub Pages SPA structure. The existing workflow and Vite config need no changes.

