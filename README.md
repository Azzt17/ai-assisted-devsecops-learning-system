# AI-Assisted DevSecOps Learning System

This repository is the Phase 0 foundation for an AI-assisted DevSecOps learning system.

It is not just a roadmap repository. It is a learning operating system for becoming a V-shape developer in the AI era: broad enough to understand backend, cloud, security, networking, DevOps, and AI-assisted workflows, but deep enough to own secure software delivery systems operationally.

Core direction:

> Backend-heavy. Cloud-delivered. Security-disciplined. AI-accelerated, not AI-dependent.

## Purpose

This repository exists to keep learning aligned across humans and AI assistants. Any AI partner should use this repository as the main context before giving roadmap, coding, debugging, architecture, or project advice.

The goal is not to avoid AI. The goal is to use AI aggressively while preserving:

- debugging autonomy,
- design ownership,
- security reasoning,
- testing discipline,
- operational awareness,
- ability to explain, modify, secure, deploy, and fix systems.

## File Map

```txt
ai-assisted-devsecops-learning-system/
├── README.md
├── AI_CONTEXT.md
├── AI_ASSISTED_DEVSECOPS_VSHAPE_ROADMAP.md
├── ROADMAP_TRACKER.md
├── FRICTION_PROTOCOL.md
├── PROJECT_STANDARD.md
├── PROMPT_LIBRARY.md
├── roadmap-data.json
├── drills/
│   └── phase-0-manual-drill.md
├── templates/
│   ├── DECISION_LOG_TEMPLATE.md
│   ├── POSTMORTEM_TEMPLATE.md
│   ├── SECURITY_REVIEW_TEMPLATE.md
│   └── PROJECT_README_TEMPLATE.md
├── scripts/
│   └── sync-roadmap-data.sh
└── visual-roadmap/
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── roadmap-data.json
    └── README.md
```

## How to Use This Repository

### For deep orientation

Read:

1. `AI_ASSISTED_DEVSECOPS_VSHAPE_ROADMAP.md`
2. `AI_CONTEXT.md`
3. `FRICTION_PROTOCOL.md`

Use these files when starting a new phase, feeling unfocused, or giving context to another AI assistant.

### For weekly execution

Use:

1. `ROADMAP_TRACKER.md`
2. `roadmap-data.json`
3. `visual-roadmap/`

The tracker defines what to do. The JSON powers the visual roadmap. The visual roadmap is the daily cockpit.

### For project repositories

Use:

1. `PROJECT_STANDARD.md`
2. `templates/PROJECT_README_TEMPLATE.md`
3. `templates/DECISION_LOG_TEMPLATE.md`
4. `templates/SECURITY_REVIEW_TEMPLATE.md`
5. `templates/POSTMORTEM_TEMPLATE.md`

Every portfolio repo should prove one specific competence, not become a vague mega-project.

## Running the Visual Roadmap Locally

```bash
cd visual-roadmap
python3 -m http.server 8080
```

Open:

```txt
http://localhost:8080
```

Do not open `index.html` directly with `file://`, because browser security rules may block `fetch("roadmap-data.json")`.

## Updating Progress

Edit the root file:

```txt
roadmap-data.json
```

Then sync it into the static web folder:

```bash
./scripts/sync-roadmap-data.sh
```

Commit the change:

```bash
git add .
git commit -m "Update roadmap progress"
git push
```

## Daily Learning Loop

1. Open the visual roadmap.
2. Check current focus.
3. Pick one small task.
4. Observe its friction tag.
5. Use AI according to the tag.
6. Produce evidence: code, notes, tests, logs, decision, or postmortem.
7. Update tracker/progress.
8. Commit.

## Rule

Do not measure progress by how much content is consumed.

Measure progress by how many systems can be explained, broken, debugged, secured, deployed, observed, and repaired.
