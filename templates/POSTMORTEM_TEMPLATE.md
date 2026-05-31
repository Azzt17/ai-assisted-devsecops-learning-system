# Postmortem: <Incident / Failure Title>

## Metadata

- Date:
- Project:
- Environment: Local | CI/CD | Staging | Production | Lab
- Severity: Low | Medium | High | Critical
- Status: Draft | Reviewed | Resolved
- Related Phase:
- Related Tags: [FRICTION-ZONE] [BREAK-AND-FIX] [REVIEW-DEEP] [EXPLAIN-WITHOUT-AI]

---

## 1. Summary

Briefly describe what happened.

Example:

> The deployment failed because the application container could not connect to the database due to an incorrect environment variable and missing network configuration.

---

## 2. Impact

What was affected?

- 
- 

Who or what was impacted?

- 
- 

How long did it last?

- 

Was data affected?

- [ ] No
- [ ] Yes
- [ ] Unknown

---

## 3. Timeline

| Time | Event |
|---|---|
|  |  |
|  |  |
|  |  |

---

## 4. Expected Behavior

What should have happened?

- 
- 

---

## 5. Actual Behavior

What actually happened?

- 
- 

---

## 6. Detection

How was the issue discovered?

- [ ] Manual testing
- [ ] Automated test
- [ ] CI/CD failure
- [ ] Logs
- [ ] Metrics
- [ ] Alert
- [ ] User report
- [ ] Security scan
- [ ] Other:

Evidence:

```txt
<Paste logs, errors, screenshots, or command output here>
```

---

## 7. Root Cause Analysis

Primary root cause:

> 

Contributing factors:

- 
- 
- 

What made this harder to detect?

- 
- 

What made this harder to debug?

- 
- 

---

## 8. Debugging Process

Hypotheses considered:

1. 
2. 
3. 

Evidence checked:

- [ ] Logs
- [ ] Environment variables
- [ ] Network connectivity
- [ ] Permissions
- [ ] Secrets
- [ ] Container status
- [ ] Database state
- [ ] CI/CD pipeline
- [ ] Dependency versions
- [ ] Code changes
- [ ] Configuration changes

Commands used:

```bash
# Paste relevant commands here
```

What worked:

- 

What did not work:

- 

---

## 9. Resolution

What fixed the issue?

- 
- 

Code/config changes:

- 
- 

Verification steps:

- [ ] Re-ran tests
- [ ] Re-ran pipeline
- [ ] Checked logs
- [ ] Checked metrics
- [ ] Performed manual test
- [ ] Reviewed security impact
- [ ] Confirmed rollback path

---

## 10. Security Review

Did this incident expose a security risk?

- [ ] No
- [ ] Yes
- [ ] Unknown

If yes, describe:

- 

Security implications:

- Authentication:
- Authorization:
- Secrets:
- Permissions:
- Data exposure:
- Dependency risk:
- Infrastructure risk:

---

## 11. Prevention

What should be changed to prevent recurrence?

- [ ] Add test
- [ ] Improve logging
- [ ] Improve alerting
- [ ] Improve documentation
- [ ] Improve CI/CD validation
- [ ] Improve configuration management
- [ ] Improve secret management
- [ ] Improve permission model
- [ ] Improve rollback process
- [ ] Add runbook

Action items:

| Action | Owner | Status |
|---|---|---|
|  |  |
|  |  |

---

## 12. AI Involvement

Was AI used?

- [ ] No
- [ ] Yes, for hypothesis generation
- [ ] Yes, for log analysis
- [ ] Yes, for debugging steps
- [ ] Yes, for code/config fix
- [ ] Yes, for review

Important prompts:

```txt
<Paste important prompts here>
```

Did AI provide a correct diagnosis?

- [ ] Yes
- [ ] Partially
- [ ] No

How I validated the AI output:

- 
- 

What I learned instead of blindly copying:

- 
- 

---

## 13. Lessons Learned

Technical lessons:

- 
- 

Process lessons:

- 
- 

Security lessons:

- 
- 

What I should remember next time:

- 
- 

---

## 14. Final Reflection

Can I explain this incident without AI?

- [ ] Yes
- [ ] Not yet

If not yet, what do I still need to understand?

- 
- 
