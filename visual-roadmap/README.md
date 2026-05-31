# Visual Roadmap UI

Static web UI for the AI-Assisted DevSecOps V-Shape Roadmap.

## Files

- `index.html` — main dashboard page
- `styles.css` — dark, card-based UI styling
- `app.js` — JSON loader, filters, progress calculation, expandable phase cards
- `roadmap-data.json` — roadmap source data

## Run locally

Some browsers block `fetch("roadmap-data.json")` when opening `index.html` directly through `file://`.
Run a local static server instead:

```bash
cd visual-roadmap
python3 -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

## Deploy

For the first version, GitHub Pages is enough.

Recommended structure inside the main repo:

```txt
ai-assisted-devsecops-learning-system/
├── AI_ASSISTED_DEVSECOPS_VSHAPE_ROADMAP.md
├── ROADMAP_TRACKER.md
├── roadmap-data.json
└── visual-roadmap/
    ├── index.html
    ├── styles.css
    ├── app.js
    └── roadmap-data.json
```

Deploy the `visual-roadmap/` folder as a static site.

## Editing progress

Update `status` and `progress` fields in `roadmap-data.json`.

Recommended status values:

- `not-started`
- `in-progress`
- `completed`

The UI calculates dashboard progress from phase progress values.
