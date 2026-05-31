# Friction Protocol

The purpose of friction is not suffering. The purpose is competence formation.

In the AI era, speed is easy. Technical ownership is harder. This protocol defines when to accelerate and when to deliberately slow down.

## Tags

### `[AI-OK]`

Use AI aggressively.

Suitable for:

- boilerplate,
- examples,
- scaffolding,
- initial documentation,
- exploration,
- converting notes into structure.

Rule: accept acceleration, but still skim the result.

### `[REVIEW-DEEP]`

AI may generate, but I must review.

Suitable for:

- auth flow,
- RBAC,
- cloud IAM,
- CI/CD permissions,
- Dockerfile production decisions,
- database transactions,
- error handling,
- security-sensitive code.

Rule: before accepting the result, explain the logic and trade-offs.

### `[NO-AI-FIRST]`

Attempt manually before asking AI.

Suitable for:

- reading logs,
- simple debugging,
- writing small tests,
- tracing request flow,
- fixing basic pipeline errors,
- writing small scripts.

Rule: try first, document what was tried, then ask AI for hints.

### `[FRICTION-ZONE]`

Slow down. Do not optimize for completion.

Suitable for:

- unclear bugs,
- deployment failure,
- auth/authorization issues,
- network/DNS/TLS issues,
- CI/CD failure,
- insecure design,
- flaky tests.

Rule: ask for hypotheses and verification steps before solutions.

### `[BREAK-AND-FIX]`

Intentionally break a system and repair it.

Suitable for:

- missing env vars,
- vulnerable dependency,
- failed migration,
- broken CI,
- bad IAM policy,
- exposed dummy secret,
- container crash,
- missing authorization check.

Rule: write what broke, how it was detected, how it was fixed, and what prevention was added.

### `[PORTFOLIO-GRADE]`

The output must be publicly defensible.

Required evidence:

- README,
- setup instructions,
- architecture explanation,
- tests or test evidence,
- CI/CD,
- security consideration,
- known limitations,
- decision log,
- AI usage note.

### `[EXPLAIN-WITHOUT-AI]`

I must be able to explain without AI.

Suitable for:

- request lifecycle,
- auth flow,
- CI/CD pipeline flow,
- cloud IAM reasoning,
- container networking,
- security trade-offs,
- debugging process.

Rule: if I cannot explain it, I do not own it yet.

## Debugging Prompt Pattern

Use this when stuck:

```txt
I am working in [FRICTION-ZONE].
Do not give the final solution immediately.

Context:

Expected behavior:

Actual behavior:

Logs/errors:

What I already tried:

Help me:
1. list possible causes,
2. identify what evidence to inspect,
3. rank hypotheses,
4. design the next debugging step,
5. only then suggest a fix.
```

## Rule of Thumb

If the work is boilerplate, accelerate.

If the work affects correctness, security, deployment, or debugging autonomy, slow down.
