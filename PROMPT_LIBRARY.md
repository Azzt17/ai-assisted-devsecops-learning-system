# Prompt Library

Use these prompts to keep AI aligned with the learning model.

## Tutor Prompt

```txt
Teach me this concept from first principles.
Explain:
1. why it exists,
2. what problem it solves,
3. how it works internally,
4. trade-offs,
5. failure modes,
6. security implications,
7. one practical drill.

Do not only give definitions.
```

## Implementation Prompt

```txt
Help me implement this feature.
Context:
- project:
- current architecture:
- constraints:
- security concerns:
- testing requirements:

Generate a minimal solution first.
Avoid overengineering.
Explain trade-offs and what I must review manually.
```

## Adversarial Review Prompt

```txt
Review this design/code adversarially.
Find:
1. hidden assumptions,
2. security risks,
3. reliability risks,
4. maintainability problems,
5. overengineering,
6. underengineering,
7. missing tests,
8. unclear ownership boundaries.

Be direct and specific.
```

## Debugging Prompt

```txt
I am debugging in [FRICTION-ZONE].
Do not give me the final answer immediately.

Context:
Expected behavior:
Actual behavior:
Logs/errors:
What I tried:

Help me form hypotheses, rank them, and decide what evidence to inspect next.
```

## Security Review Prompt

```txt
Perform a security review.
Context:
- system:
- data handled:
- trust boundaries:
- auth model:
- deployment environment:

Analyze:
1. authentication risks,
2. authorization risks,
3. input validation risks,
4. secrets risks,
5. dependency risks,
6. logging/monitoring gaps,
7. CI/CD risks,
8. cloud/IAM risks.

Return actionable findings.
```

## Portfolio Review Prompt

```txt
Review this repository as a portfolio artifact.
Assess:
1. clarity of README,
2. scope,
3. architecture explanation,
4. test evidence,
5. CI/CD,
6. security checklist,
7. decision log,
8. known limitations,
9. AI usage note,
10. whether it proves a specific competence.

Tell me what to improve before publishing.
```

## Explain Without AI Prompt

```txt
Ask me questions to verify whether I can explain this system without AI.
Do not answer first.
Test me on:
1. request flow,
2. data flow,
3. security boundary,
4. failure mode,
5. debugging approach,
6. trade-offs.
```
