# Yubo (Veronica) Chen – Portfolio

## Live Site URLs (Option B Transition)

Current (project Pages URL):  
`https://veronica-yubo-chen.github.io/YuboVeronicaChen.github.io/`

After repository rename to `Veronica-Yubo-Chen.github.io` (short root):  
`https://veronica-yubo-chen.github.io/`

Both are functionally identical; only the base path changes. Keep both listed until the rename is complete and the first post‑rename build has finished (usually < 5 minutes).

> If either URL returns 404 right after a change, wait 2–3 minutes then hard refresh (`Cmd+Shift+R`) or use an incognito window.

### Why It Looked “Not Updated”
GitHub Pages only rewrites to the short root domain if the repository name exactly matches `<username>.github.io`. Until rename, the longer project path remains correct behavior (not a deployment error).

---

### Dark Mode
Dark mode is applied if:
1. User explicitly toggles the Theme button (persists in `localStorage` under `pref-theme`).
2. No stored preference exists and system `prefers-color-scheme: dark` is true.

Override CSS uses a `[data-theme="dark"]` attribute plus fallback media query for initial load. Component surfaces and tag pills are re-mapped to dark tokens to maintain readability.
---

### Troubleshooting Quick Table
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| 404 after rename | Build pending | Wait 1–5 min then refresh |
| Old styling | Browser cache | Hard refresh / incognito |
| Broken assets | Wrong path after root move | Ensure relative paths (`./style.css`) |
| Dark mode flash | No initial attribute until script runs | (Optional) Inline prefers-color-scheme guard |

---

## Project Requirements (Tracking)

### Content

Add a short paragraph describing the features below. What aesthetic and technical choices did you make?

- [x] At least one profile picture
- [x] Biography (at least 100 words)
- [x] Functional Contact Form (pending)
- [x] "Projects" section
- [x] Links to external sites (GitHub, LinkedIn)

### Technical

Add a short paragraph describing the features below. What strategies or design decisions did you work from?

- [x] At least 2 web pages (currently 1 page)
- [x] Version controlled with Git
- [x] Deployed on GitHub Pages
- [x] Implements responsive design principles
- [x] Uses semantic HTML

### Bonus (optional)

Add a short paragraph describing the features below, if you included any.

- [x] Different styles for active, hover and focus states
- [x] Include JavaScript to add some dynamic elements (accordion, floating nav highlight potential)

### Screenshots

> Please include the following (add images when ready):
> - Pages/features on mobile, tablet, desktop.
> - Any interactive/hover states.
> - Optional: Performance or accessibility audits.

#### Xmas 2024

![My profile image was taken for Xmas in 2024 in Chengdu in China, when I met my friend.](./profile-photo.png)