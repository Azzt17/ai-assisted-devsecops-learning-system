# Security Review: <Project / Feature / Pull Request>

## Metadata

- Date:
- Project:
- Feature / Scope:
- Reviewer:
- Status: Draft | Reviewed | Needs Fix | Approved
- Related Phase:
- Related Tags: [REVIEW-DEEP] [FRICTION-ZONE] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]

---

## 1. Scope

What is being reviewed?

- 
- 

What is not included in this review?

- 
- 

Related files/components:

- 
- 
- 

---

## 2. System Overview

Briefly describe the system or feature.

Questions:

- What does it do?
- Who uses it?
- What data does it handle?
- What external services does it depend on?
- What trust boundaries exist?

Notes:

- 
- 

---

## 3. Assets

What needs protection?

- [ ] User credentials
- [ ] Access tokens
- [ ] Refresh tokens
- [ ] API keys
- [ ] Personal data
- [ ] Financial data
- [ ] Internal logs
- [ ] Database
- [ ] CI/CD secrets
- [ ] Cloud resources
- [ ] Container images
- [ ] Build artifacts
- [ ] Other:

---

## 4. Threat Model

Possible attackers:

- [ ] Anonymous internet user
- [ ] Authenticated user
- [ ] Malicious user
- [ ] Compromised dependency
- [ ] Compromised CI/CD token
- [ ] Misconfigured cloud identity
- [ ] Internal mistake
- [ ] Other:

Possible abuse cases:

- 
- 
- 

---

## 5. Authentication Review

- [ ] Authentication flow is clear.
- [ ] Passwords are never stored in plain text.
- [ ] Token generation is secure.
- [ ] Token expiration is defined.
- [ ] Refresh token behavior is defined.
- [ ] Invalid credentials return safe error messages.
- [ ] Logout/revocation behavior is considered.
- [ ] Brute force protection or rate limiting is considered.

Notes:

- 
- 

Issues found:

- 
- 

---

## 6. Authorization Review

- [ ] Authorization checks exist for protected resources.
- [ ] Users cannot access other users' resources.
- [ ] Role or permission model is documented.
- [ ] Authorization is enforced server-side.
- [ ] Direct object reference risks are considered.
- [ ] Admin-only actions are protected.
- [ ] Default behavior is deny, not allow.

Notes:

- 
- 

Issues found:

- 
- 

---

## 7. Input Validation Review

- [ ] Request body validation exists.
- [ ] Query/path parameters are validated.
- [ ] Type, length, format, and range are checked.
- [ ] Invalid input produces safe error responses.
- [ ] SQL injection risks are considered.
- [ ] Command injection risks are considered.
- [ ] File upload risks are considered if applicable.

Notes:

- 
- 

Issues found:

- 
- 

---

## 8. Secrets and Configuration Review

- [ ] Secrets are not hardcoded.
- [ ] Secrets are not committed to Git.
- [ ] `.env` files are ignored.
- [ ] Environment variables are documented.
- [ ] Secret rotation is considered.
- [ ] CI/CD secrets use least privilege.
- [ ] Cloud secrets are handled securely.

Notes:

- 
- 

Issues found:

- 
- 

---

## 9. Dependency and Supply Chain Review

- [ ] Dependencies are necessary.
- [ ] Dependency versions are pinned or controlled.
- [ ] Vulnerability scanning is configured.
- [ ] Unused dependencies are removed.
- [ ] License risks are considered.
- [ ] Container base image is trusted.
- [ ] Build artifacts are controlled.
- [ ] SBOM/provenance is considered if relevant.

Notes:

- 
- 

Issues found:

- 
- 

---

## 10. CI/CD Security Review

- [ ] Pipeline permissions follow least privilege.
- [ ] Secrets are not printed in logs.
- [ ] Pull request workflows are safe.
- [ ] Deployment requires proper branch rules.
- [ ] Security scans run automatically.
- [ ] Failed security checks block unsafe changes.
- [ ] Artifact integrity is considered.
- [ ] CI/CD tokens are protected.

Notes:

- 
- 

Issues found:

- 
- 

---

## 11. Container and Infrastructure Review

- [ ] Dockerfile avoids unnecessary privileges.
- [ ] Container does not run as root if avoidable.
- [ ] Image size and attack surface are reasonable.
- [ ] Exposed ports are intentional.
- [ ] Network access is restricted where possible.
- [ ] Cloud IAM uses least privilege.
- [ ] Security groups/firewall rules are documented.
- [ ] Logging and monitoring are enabled.

Notes:

- 
- 

Issues found:

- 
- 

---

## 12. Logging and Error Handling Review

- [ ] Errors do not leak sensitive information.
- [ ] Logs contain useful debugging context.
- [ ] Logs do not contain secrets.
- [ ] Security-relevant events are logged.
- [ ] Failed auth attempts are observable.
- [ ] Unexpected errors are handled safely.

Notes:

- 
- 

Issues found:

- 
- 

---

## 13. Risk Summary

| Risk | Severity | Likelihood | Status | Notes |
|---|---|---|---|---|
|  | Low/Med/High | Low/Med/High | Open/Fixed/Accepted |  |
|  | Low/Med/High | Low/Med/High | Open/Fixed/Accepted |  |

---

## 14. Required Fixes

- [ ] 
- [ ] 
- [ ] 

---

## 15. Accepted Risks

List risks that are intentionally accepted for now.

| Risk | Reason | Revisit Condition |
|---|---|---|
|  |  |  |

---

## 16. AI Involvement

Was AI used?

- [ ] No
- [ ] Yes, for threat modeling
- [ ] Yes, for checklist generation
- [ ] Yes, for code review
- [ ] Yes, for dependency analysis
- [ ] Yes, for remediation suggestions

Prompts used:

```txt
<Paste important prompts here>
```

How I validated AI output:

- 
- 

---

## 17. Final Decision

Security review result:

- [ ] Approved
- [ ] Approved with accepted risks
- [ ] Needs fixes
- [ ] Blocked

Reviewer notes:

- 
- 
