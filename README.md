# lucacs.com

Static HTML with build-time StyleX. No browser JavaScript or framework runtime.

Requires Node.js 22 or newer. Run `npm ci` then `npm run build` after changing
`src/index.html` or `src/styles.js`. Commit the generated root `index.html`:
GitHub Pages publishes it directly from `main`, so hosting needs no changes.
Run `npm run check` to verify the committed page matches its sources.

All page styles live in `src/styles.js`. The small generated stylesheet is inlined
to avoid an extra render-blocking request. Georgia uses the local system font,
with a generic serif fallback on devices without Georgia: no font downloads or
late font swaps. Explicit line heights stabilize the text block; `100svh` avoids
recentering when mobile browser chrome retracts.

Social links have accessible names, native keyboard focus, and 44px tap targets.
Light and dark colors follow the system preference without entrance animations.
