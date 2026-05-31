# AI-Assisted DevSecOps Learning System

> A personal learning operating system for becoming a V-shape developer in the AI era: backend-heavy, cloud-delivered, security-disciplined, and AI-accelerated without becoming AI-dependent.

## Overview

This repository is the foundation of my long-term DevSecOps learning system.

It is not a normal application repository. It is a control center for how I learn, build, review, debug, secure, and document software systems with the help of AI while still maintaining technical ownership.

The main goal is to build competence in **Secure Software Delivery Engineering**: the ability to make software that can be built, tested, secured, delivered, observed, debugged, and improved systematically.

AI is allowed to accelerate the process, but it must not replace mental models, debugging autonomy, design ownership, security reasoning, or the ability to explain systems clearly.

## Core Direction

The learning direction of this repository is:

- **Backend-heavy by default** — backend systems are the primary technical spine.
- **Cloud as the delivery environment** — cloud is where systems are deployed, operated, secured, and observed.
- **Security as the quality discipline** — security is integrated from the beginning, not added at the end.
- **AI as an accelerator** — AI helps with learning, implementation, review, debugging, and documentation, but the final ownership stays human.

The central principle:

> Do not compete with AI in typing code. Compete in understanding systems.

## Why This Repository Exists

Generative AI changes the value structure of software engineering.

Writing syntax line by line is no longer the only meaningful proof of technical ability. However, blindly depending on AI-generated output creates a dangerous illusion of competence.

This repository exists to avoid both extremes:

1. Wasting time manually doing every repetitive task that AI can accelerate.
2. Becoming dependent on AI without understanding the systems being built.

The intended balance is:

- Use AI aggressively for acceleration.
- Review AI output critically.
- Reconstruct important parts manually.
- Debug real failures.
- Document decisions and trade-offs.
- Build portfolio-grade repositories that prove specific competencies.

## V-Shape Developer Model

This learning system follows a V-shape developer model.

### Horizontal Breadth

Horizontal breadth provides wide perspective across:

- Backend engineering.
- Cloud infrastructure.
- DevSecOps workflows.
- Linux and networking.
- Security fundamentals.
- CI/CD and automation.
- Observability.
- AI-assisted engineering.
- System design and trade-offs.

This breadth helps me see systems from multiple angles, communicate across disciplines, and guide AI agents with better context.

### Vertical Depth

Vertical depth provides real operational competence.

My chosen depth is:

> Backend-heavy secure software delivery on cloud infrastructure.

This means I must be able to:

- Understand request flow from client to database.
- Read logs and trace failures.
- Debug broken systems.
- Review authentication and authorization logic.
- Understand CI/CD pipeline behavior.
- Check dependency and supply-chain risks.
- Reason about secrets, permissions, and infrastructure boundaries.
- Explain why a system is secure, fragile, overengineered, or incomplete.

Breadth creates creativity. Depth creates credibility.

## Repository Structure

```txt
.
├── README.md
├── AI_CONTEXT.md
├── MANIFESTO.md
├── ROADMAP.md
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

## File Guide

| File                   | Purpose                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `README.md`            | Main entry point for the repository.                                                        |
| `AI_CONTEXT.md`        | Reusable context file for ChatGPT, Claude, Gemini, Cursor, Copilot, or other AI tools.      |
| `MANIFESTO.md`         | Learning philosophy, identity, and non-negotiable principles.                               |
| `ROADMAP.md`           | Long-form roadmap and operating manual.                                                     |
| `ROADMAP_TRACKER.md`   | Concise technical tracker for phases, progress, outputs, and exit criteria.                 |
| `FRICTION_PROTOCOL.md` | Rules for when to slow down, avoid shortcuts, and intentionally face technical friction.    |
| `PROJECT_STANDARD.md`  | Standard for every portfolio-grade repository.                                              |
| `PROMPT_LIBRARY.md`    | Prompt patterns for learning, coding, review, debugging, threat modeling, and architecture. |
| `roadmap-data.json`    | Machine-readable roadmap data used by the visual roadmap.                                   |
| `drills/`              | Manual drills and learning evidence.                                                        |
| `templates/`           | Reusable templates for future projects.                                                     |
| `visual-roadmap/`      | Static web roadmap dashboard.                                                               |

## Friction Tags

This roadmap uses friction tags to control how AI should be used and when I must slow down.

| Tag                    | Meaning                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `[AI-OK]`              | AI can be used aggressively for scaffolding, boilerplate, exploration, or documentation.      |
| `[REVIEW-DEEP]`        | AI can help, but I must deeply review and understand the result.                              |
| `[NO-AI-FIRST]`        | I must attempt the task manually before asking AI for help.                                   |
| `[FRICTION-ZONE]`      | The goal is not speed. The goal is technical growth through tolerable difficulty.             |
| `[BREAK-AND-FIX]`      | I intentionally break something and repair it to build debugging and incident response skill. |
| `[PORTFOLIO-GRADE]`    | The output must be clear, documented, tested, reviewed, and suitable as public evidence.      |
| `[EXPLAIN-WITHOUT-AI]` | I must be able to explain the concept, design, or failure mode without AI.                    |

These tags prevent the roadmap from becoming a shallow checklist.

## How to Use This Repository

### 1. Start with the Manifesto

Read `MANIFESTO.md` when I need to reconnect with the core philosophy.

It explains the identity behind this roadmap: not just learning tools, but becoming a developer who can own systems in the AI era.

### 2. Use AI_CONTEXT.md with Any AI Partner

When using a new AI assistant, provide `AI_CONTEXT.md` first.

This helps the AI understand that I do not want shallow answers or instant solutions only. I want help that preserves:

- Mental models.
- Debugging autonomy.
- Design ownership.
- Security reasoning.
- Portfolio-grade output.

### 3. Use ROADMAP.md for Deep Direction

`ROADMAP.md` is the long-form source of truth. It explains the full learning path, the reasoning behind it, and the expected outcomes.

Use it when:

- Starting a new phase.
- Reviewing the full direction.
- Explaining the learning system to another AI.
- Re-aligning after losing focus.

### 4. Use ROADMAP_TRACKER.md for Execution

`ROADMAP_TRACKER.md` is the concise progress tracker.

Use it to answer:

- What phase am I in?
- What skill should I focus on now?
- What repo output should I build?
- What exit criteria must be completed?
- Which tasks require friction instead of shortcuts?

### 5. Use the Visual Roadmap for Daily Focus

The `visual-roadmap/` directory contains a static web dashboard.

Use it as a daily cockpit:

- Check current phase.
- Check progress.
- Filter by status, priority, or tag.
- Review active friction zones.
- Track portfolio outputs.

Run locally:

```bash
cd visual-roadmap
python3 -m http.server 8080
```

Open:

```txt
http://localhost:8080
```

## Updating Roadmap Progress

The visual roadmap reads progress from `roadmap-data.json`.

For the MVP version, progress is updated manually by editing the JSON file.

After updating the root `roadmap-data.json`, sync it to the visual roadmap:

```bash
./scripts/sync-roadmap-data.sh
```

Then commit the update:

```bash
git add .
git commit -m "Update roadmap progress"
git push
```

Manual updates are intentional at this stage. They keep the system simple, transparent, and version-controlled.

Do not overengineer the tracker before the learning system itself produces real output.

## Learning Workflow

### Daily Workflow

1. Open the visual roadmap.
2. Check the current focus.
3. Select one concrete task.
4. Check the friction tag.
5. Use AI according to the tag rules.
6. Work on the task.
7. Record important decisions, failures, or lessons.
8. Commit meaningful progress.

The goal is to avoid starting each day with the question: “What should I learn today?”

The roadmap should answer that before the session begins.

### Weekly Workflow

At the beginning of each week:

- Choose one primary phase focus.
- Choose one repository or lab target.
- Choose one manual drill.
- Choose one friction task.

At the end of each week, review:

- What was completed?
- What only looked complete but was not understood deeply?
- What still depends too much on AI?
- What bug, failure, or security issue was understood better?
- What should be documented in a decision log or postmortem?

### AI-Assisted Workflow

AI may be used as:

- Tutor.
- Implementer.
- Reviewer.
- Adversary.
- Debugging partner.
- Documentation assistant.

But every AI-assisted output must be reviewed through the lens of ownership.

Before accepting AI output, ask:

- Can I explain this?
- Can I test this?
- Can I debug this?
- Can I secure this?
- Can I modify this later?
- What assumptions did the AI make?
- What failure modes were ignored?

## Roadmap Phases

| Phase   | Focus                                | Main Output                             |
| ------- | ------------------------------------ | --------------------------------------- |
| Phase 0 | Learning Operating System            | `ai-assisted-devsecops-learning-system` |
| Phase 1 | Systems Foundation                   | `systems-foundation-labs`               |
| Phase 2 | Secure Backend Foundation            | `secure-api-template`                   |
| Phase 3 | DevOps Core                          | `cicd-delivery-lab`                     |
| Phase 4 | Shift-Left Security                  | `shift-left-security-pipeline`          |
| Phase 5 | CI/CD and Supply Chain Security      | `software-supply-chain-lab`             |
| Phase 6 | Cloud and Infrastructure as Code     | `cloud-secure-baseline`                 |
| Phase 7 | Kubernetes and Cloud-Native Security | `kubernetes-security-lab`               |
| Phase 8 | Observability and Incident Response  | `observability-incident-lab`            |
| Phase 9 | AI-Native DevSecOps Workflow         | `ai-native-devsecops-workflow`          |

The roadmap is mastery-based, not time-based.

A phase is not complete because time has passed. A phase is complete when its exit criteria are met.

## Portfolio Philosophy

This learning system favors multiple focused repositories instead of one large vague project.

Each repository should prove one specific competence.

Examples:

- `secure-api-template` proves secure backend API design.
- `cicd-delivery-lab` proves automated delivery workflow.
- `shift-left-security-pipeline` proves security integration in development.
- `software-supply-chain-lab` proves dependency, artifact, and pipeline integrity awareness.
- `cloud-secure-baseline` proves secure infrastructure deployment.
- `observability-incident-lab` proves debugging, monitoring, and recovery skill.

A portfolio-grade repository must include:

- Clear README.
- Problem statement.
- Architecture overview.
- Setup instructions.
- Tests or test evidence.
- CI/CD pipeline.
- Security considerations.
- Decision logs.
- Known limitations.
- AI usage disclosure.
- Evidence of debugging, review, or improvement.

## Manual Drills

Manual drills exist to protect real competence.

They are used when a topic requires `[NO-AI-FIRST]`, `[FRICTION-ZONE]`, or `[EXPLAIN-WITHOUT-AI]`.

Examples:

- Explain the learning goal without AI.
- Define V-shape developer in my own words.
- Debug a failing service manually before asking AI.
- Write a small test without AI.
- Read logs and form hypotheses before requesting a fix.
- Explain authentication and authorization flow without AI.

The goal is not to reject AI. The goal is to prevent AI from replacing the parts of learning that build durable skill.

## Templates

The `templates/` directory contains reusable project artifacts:

- `DECISION_LOG_TEMPLATE.md`
- `POSTMORTEM_TEMPLATE.md`
- `SECURITY_REVIEW_TEMPLATE.md`
- `PROJECT_README_TEMPLATE.md`

These templates should be copied into future portfolio repositories when needed.

They help enforce the habit of documenting:

- Technical decisions.
- Trade-offs.
- Security risks.
- Incidents and failures.
- AI involvement.
- Human validation.

## Current Phase Status

Current phase:

> Phase 0 — Learning Operating System

Minimum setup status:

- [x] Core repository created.
- [x] Manifesto created.
- [x] AI context created.
- [x] Roadmap created.
- [x] Tracker created.
- [x] Friction protocol created.
- [x] Project standard created.
- [x] Prompt library created.
- [x] Templates created.
- [x] Manual drill added.
- [x] Visual roadmap deployed.
- [x] Phase 0 reviewed and marked complete.

## Definition of Done for Phase 0

Phase 0 can be considered complete when:

- [x] This repository is pushed to GitHub.
- [x] All required files exist.
- [x] `AI_CONTEXT.md` can be reused with other AI assistants.
- [x] `ROADMAP_TRACKER.md` reflects the current progress.
- [x] `roadmap-data.json` is valid and synced with the visual roadmap.
- [x] The visual roadmap can run locally.
- [x] At least one manual drill is documented.
- [x] The friction protocol is understood and ready to be used.
- [x] The next technical repository is selected.

## Next Step

After Phase 0, move to Phase 1:

> Systems Foundation Labs.

The goal of Phase 1 is to strengthen the low-level foundations needed for DevSecOps:

- Linux.
- Git.
- Shell scripting.
- HTTP.
- DNS.
- TLS.
- Networking basics.
- Logs.
- Processes.
- Permissions.
- Debugging commands.

This is where the roadmap begins to move from planning into technical friction.

## Final Reminder

AI can help me move faster, but speed is not the final metric.

The real metric is whether I can own the system.

I should be able to:

- Explain it.
- Build it.
- Test it.
- Break it.
- Debug it.
- Secure it.
- Deploy it.
- Observe it.
- Improve it.

If I cannot explain it, I do not fully own it.  
If I cannot debug it, I do not fully understand it.  
If I cannot secure it, I should not trust it.  
If I cannot improve it, I have not mastered it.

**Backend-heavy. Cloud-delivered. Security-disciplined. AI-accelerated, not AI-dependent.**
