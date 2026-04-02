
Plan: stabilize the white preview and finish the GitHub Pages setup

What I found
- The app itself is rendering in the sandbox URL: navbar, hero, and styles load correctly in a direct browser check.
- I did not find a fatal runtime crash in the app code. The console only shows development warnings about refs plus preview-shell `postMessage` warnings.
- That means the blank white screen is most likely an embedded-preview/editor issue, not a broken page component.
- One deploy detail still needs alignment: `public/404.html` still uses `pathSegmentsToKeep = 0`, but this repo is deployed under `/colins-ink-studio/`, so it should preserve 1 path segment.

Implementation plan
1. Add a root error fallback
- Wrap the app mount with a simple error boundary so a real runtime failure shows a visible message instead of a blank white screen.
- This makes future debugging much easier in both Lovable preview and GitHub Pages.

2. Isolate the preview-only issue from the app
- Keep the page components (`Navbar`, `Hero`, `About`, `Portfolio`, `Contact`, `Footer`) unchanged unless a real crash is reproduced.
- If the embedded Lovable preview still goes white, adjust the development-only preview instrumentation in `vite.config.ts` rather than rewriting the site UI.

3. Fix the remaining GitHub Pages routing mismatch
- Update `public/404.html` so the SPA fallback keeps the repo subpath (`pathSegmentsToKeep = 1`).
- Keep the current `vite.config.ts` base and `BrowserRouter basename` approach so assets and routing stay aligned.

4. Verify in all three environments
- Embedded Lovable preview
- “Open preview in new tab”
- `https://jennypettersson96.github.io/colins-ink-studio/`

Acceptance criteria
- The app no longer appears as a blank white screen when a real error happens.
- The Lovable preview and preview-in-new-tab both show the homepage content.
- The GitHub Pages URL loads correctly and repo-subpath routing fallback works.

Technical details
- Files likely involved: `src/main.tsx`, possibly `src/App.tsx`, `vite.config.ts`, `public/404.html`
- No content rewrite is needed for the tattoo site sections.
- The current console warnings are non-fatal and appear tied to development tooling rather than the actual page render.
