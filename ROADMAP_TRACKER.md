# DevSecOps V-Shape Technical Roadmap Tracker

> Versi ringkas dan operasional dari `AI_ASSISTED_DEVSECOPS_VSHAPE_ROADMAP.md`.
>
> Fungsi dokumen ini: membantu tracking progress harian/mingguan tanpa membaca dokumen panjang. Gunakan dokumen utama untuk filosofi, prinsip belajar, dan konteks AI. Gunakan tracker ini untuk eksekusi.

---

## 0. Core Direction

**Learning Model:** V-Shape Developer for the AI Era  
**Default Orientation:** Backend-heavy  
**Delivery Environment:** Cloud  
**Quality Discipline:** Security  
**AI Role:** Tutor, implementer, reviewer, adversary, debugger  
**Human Role:** Design owner, debugger, security reasoner, system explainer

Main rule:

> AI boleh mempercepat produksi, tetapi tidak boleh menggantikan model mental, debugging autonomy, design ownership, dan secure reasoning.

---

## 1. Friction Tag Legend

| Tag | Meaning | Action |
|---|---|---|
| `[AI-OK]` | AI boleh digunakan penuh | Cocok untuk boilerplate, scaffold, draft, dan eksplorasi awal. |
| `[REVIEW-DEEP]` | Output AI wajib dibaca dan dikritik | Jelaskan trade-off, risiko, failure mode, dan simplifikasi. |
| `[NO-AI-FIRST]` | Coba sendiri sebelum minta solusi final | Tulis hipotesis, coba 15-30 menit, baru minta koreksi arah. |
| `[FRICTION-ZONE]` | Area perkembangan utama | Jangan mengejar selesai cepat. Bangun debugging autonomy. |
| `[BREAK-AND-FIX]` | Sengaja rusak lalu perbaiki | Dokumentasikan gejala, penyebab, fix, dan pencegahan. |
| `[PORTFOLIO-GRADE]` | Harus layak dilihat publik | README, diagram, tests, CI/CD, security checklist, decision log. |
| `[EXPLAIN-WITHOUT-AI]` | Harus bisa dijelaskan tanpa AI | Jelaskan alur, trade-off, trust boundary, dan failure mode. |

---

## 2. Progress Status Convention

Gunakan status berikut untuk tracker visual atau manual:

| Status | Meaning |
|---|---|
| `not-started` | Belum dimulai |
| `learning` | Sedang memahami konsep |
| `building` | Sedang membuat lab/repo |
| `reviewing` | Sedang deep review dan hardening |
| `friction` | Sedang menghadapi bug/failure yang perlu dipahami |
| `portfolio-grade` | Sudah layak ditampilkan sebagai portofolio |
| `maintained` | Sudah matang dan hanya perlu update berkala |

---

## 3. Roadmap Overview

| Phase | Focus | Repo Output | Priority | Default Tags | Status |
|---|---|---|---|---|---|
| 0 | Learning Operating System | `ai-assisted-devsecops-learning-system` | Critical | `[PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI] [REVIEW-DEEP]` | `not-started` |
| 1 | Systems Foundation | `systems-foundation-labs` | Critical | `[NO-AI-FIRST] [FRICTION-ZONE] [EXPLAIN-WITHOUT-AI]` | `not-started` |
| 2 | Secure Backend Foundation | `secure-api-template` | Critical | `[REVIEW-DEEP] [NO-AI-FIRST] [FRICTION-ZONE] [PORTFOLIO-GRADE]` | `not-started` |
| 3 | DevOps Core | `cicd-delivery-lab` | High | `[AI-OK] [REVIEW-DEEP] [FRICTION-ZONE] [PORTFOLIO-GRADE]` | `not-started` |
| 4 | Shift-Left Security Pipeline | `shift-left-security-pipeline` | High | `[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [PORTFOLIO-GRADE]` | `not-started` |
| 5 | CI/CD Security and Supply Chain | `software-supply-chain-lab` | High | `[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [EXPLAIN-WITHOUT-AI]` | `not-started` |
| 6 | Cloud and Infrastructure as Code | `cloud-secure-baseline` | High | `[REVIEW-DEEP] [FRICTION-ZONE] [NO-AI-FIRST] [PORTFOLIO-GRADE]` | `not-started` |
| 7 | Container and Kubernetes Security | `kubernetes-security-lab` | Medium | `[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [PORTFOLIO-GRADE]` | `not-started` |
| 8 | Observability and Incident Response | `observability-incident-lab` | High | `[FRICTION-ZONE] [BREAK-AND-FIX] [NO-AI-FIRST] [EXPLAIN-WITHOUT-AI]` | `not-started` |
| 9 | AI-Native DevSecOps Workflow | `ai-native-devsecops-workflow` | High | `[REVIEW-DEEP] [FRICTION-ZONE] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]` | `not-started` |

---

## 4. Phase 0 — Learning Operating System

**Mission:** Membuat sistem belajar utama agar semua AI partner, semua repo, dan semua project mengikuti prinsip yang sama.

**Repo:** `ai-assisted-devsecops-learning-system`  
**Competency Question:** Apakah saya punya sistem belajar yang membuat AI partner langsung memahami tujuan, aturan, dan standar saya?

**Skills**

- [ ] AI-assisted learning design
- [ ] Prompt-as-specification
- [ ] Learning protocol
- [ ] Friction management
- [ ] Project standardization
- [ ] Documentation discipline
- [ ] Self-review habit

**Required Files**

- [ ] `README.md`
- [ ] `AI_CONTEXT.md`
- [ ] `MANIFESTO.md`
- [ ] `ROADMAP.md`
- [ ] `ROADMAP_TRACKER.md`
- [ ] `FRICTION_PROTOCOL.md`
- [ ] `PROJECT_STANDARD.md`
- [ ] `PROMPT_LIBRARY.md`
- [ ] `templates/DECISION_LOG_TEMPLATE.md`
- [ ] `templates/POSTMORTEM_TEMPLATE.md`
- [ ] `templates/SECURITY_REVIEW_TEMPLATE.md`
- [ ] `templates/PROJECT_README_TEMPLATE.md`

**Manual Drill** `[EXPLAIN-WITHOUT-AI]`

- [ ] Tulis tujuan belajar dalam 5 kalimat tanpa AI.
- [ ] Tulis definisi V-shape developer versi sendiri.
- [ ] Jelaskan kenapa AI tidak boleh menggantikan debugging autonomy.
- [ ] Tulis standar minimal repo portfolio-grade.

**Exit Criteria**

- [ ] Repo fase 0 sudah dibuat.
- [ ] `AI_CONTEXT.md` bisa diberikan ke AI lain dan menghasilkan respons yang selaras.
- [ ] Friction tags sudah didefinisikan.
- [ ] Project standard sudah jelas.
- [ ] Roadmap bisa dijelaskan tanpa membaca seluruh dokumen.

---

## 5. Phase 1 — Systems Foundation

**Mission:** Membangun fondasi Linux, Git, networking, HTTP, DNS, TLS, terminal, dan debugging dasar.

**Repo:** `systems-foundation-labs`  
**Competency Question:** Apakah saya memahami lingkungan tempat software berjalan dan bisa investigasi dasar saat sistem bermasalah?

**Skills**

- [ ] Linux filesystem and permissions
- [ ] Process, signals, ports
- [ ] Shell scripting basics
- [ ] Git workflow
- [ ] GitHub collaboration workflow
- [ ] HTTP request/response
- [ ] DNS lookup
- [ ] TLS basics
- [ ] TCP/IP mental model
- [ ] `curl`, `dig`, `ss`, `journalctl`, `grep`, `awk`
- [ ] Environment variables
- [ ] Log reading

**Labs** `[FRICTION-ZONE]`

- [ ] Trace HTTP request dengan `curl -v`.
- [ ] Cek DNS resolution dengan `dig` atau `nslookup`.
- [ ] Jalankan service lokal dan cek port terbuka.
- [ ] Buat script log parser sederhana.
- [ ] Simulasikan permission error.
- [ ] Simulasikan port conflict.
- [ ] Buat Git branching workflow dan resolve conflict sederhana.

**Manual Drill** `[NO-AI-FIRST]`

- [ ] Baca error permission tanpa AI.
- [ ] Cari process yang memakai port tertentu.
- [ ] Jelaskan request HTTP sederhana.
- [ ] Lakukan Git revert/reset dasar dengan hati-hati.
- [ ] Baca log service sederhana.

**Exit Criteria**

- [ ] Bisa menjelaskan alur request HTTP dari client ke server.
- [ ] Bisa memakai terminal untuk investigasi dasar.
- [ ] Bisa membaca log error sederhana.
- [ ] Bisa resolve Git conflict kecil.
- [ ] Bisa menjelaskan DNS dan TLS secara high-level tanpa AI.

---

## 6. Phase 2 — Secure Backend Foundation

**Mission:** Membangun backend API yang aman, testable, dan bisa dijelaskan.

**Repo:** `secure-api-template`  
**Competency Question:** Apakah saya bisa membangun backend API production-minded dengan auth, validation, testing, logging, dan security baseline?

**Skills**

- [ ] API design
- [ ] Routing
- [ ] Request validation
- [ ] Error handling
- [ ] Structured logging
- [ ] Database migration
- [ ] Database transaction
- [ ] Authentication
- [ ] Authorization
- [ ] Password hashing
- [ ] Session/token strategy
- [ ] Rate limiting
- [ ] Input validation
- [ ] Testing
- [ ] Config management
- [ ] Docker Compose for local dev

**AI Usage**

- `[AI-OK]` Scaffold, contoh handler, test template, Docker Compose, README awal.
- `[REVIEW-DEEP]` Auth flow, password handling, token lifecycle, authorization, transaction, security error handling.

**Labs**

- [ ] Implementasi API CRUD minimal dengan validation.
- [ ] Implementasi authentication sederhana.
- [ ] Implementasi authorization berdasarkan role atau ownership.
- [ ] Tambahkan rate limiting.
- [ ] Tambahkan test untuk happy path dan failure path.
- [ ] Tambahkan structured logging.
- [ ] Tambahkan security checklist.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Buat endpoint yang lupa authorization, lalu temukan dan perbaiki.
- [ ] Buat validation lemah, lalu tulis test yang membuktikan bug.
- [ ] Buat token expired tidak ditangani, lalu debug.
- [ ] Buat database transaction gagal di tengah proses, lalu rollback.

**Exit Criteria**

- [ ] Bisa menjelaskan request flow dari router sampai database.
- [ ] Bisa menjelaskan authentication vs authorization.
- [ ] Bisa menulis test dasar tanpa AI.
- [ ] Bisa debug auth bug sederhana.
- [ ] Bisa menjelaskan threat model API secara ringkas.
- [ ] Repo sudah portfolio-grade.

---

## 7. Phase 3 — DevOps Core: Build, Test, Package, Release

**Mission:** Mengubah kode menjadi artifact yang bisa diuji, dibangun, dan dirilis secara otomatis.

**Repo:** `cicd-delivery-lab`  
**Competency Question:** Apakah saya bisa membuat pipeline yang mengubah commit menjadi artifact secara otomatis dan terkontrol?

**Skills**

- [ ] CI/CD concept
- [ ] GitHub Actions atau alternatif
- [ ] Linting
- [ ] Automated test
- [ ] Build artifact
- [ ] Docker image build
- [ ] Container registry
- [ ] Semantic versioning
- [ ] Release notes
- [ ] Branch protection
- [ ] Environment separation
- [ ] Rollback basics

**Labs**

- [ ] Pipeline untuk lint, test, build.
- [ ] Pipeline untuk build Docker image.
- [ ] Push image ke registry.
- [ ] Release tag otomatis.
- [ ] Fail pipeline jika test gagal.
- [ ] Tambahkan badge pipeline ke README.

**Break-and-Fix** `[FRICTION-ZONE]`

- [ ] Sengaja buat test gagal.
- [ ] Sengaja buat Docker build gagal.
- [ ] Sengaja ubah environment variable menjadi salah.
- [ ] Sengaja buat pipeline memakai path yang salah.

**Exit Criteria**

- [ ] Bisa menjelaskan alur commit sampai artifact.
- [ ] Bisa membaca log pipeline.
- [ ] Bisa memperbaiki pipeline gagal sederhana.
- [ ] Bisa menjelaskan kenapa CI harus gagal saat test gagal.
- [ ] Bisa menjelaskan risiko secret di pipeline.

---

## 8. Phase 4 — Shift-Left Security Pipeline

**Mission:** Memasukkan security check sejak awal development, bukan setelah project selesai.

**Repo:** `shift-left-security-pipeline`  
**Competency Question:** Apakah saya bisa membuat pipeline yang otomatis mendeteksi risiko security dasar sebelum kode masuk lebih jauh?

**Skills**

- [ ] SAST
- [ ] SCA/dependency scanning
- [ ] Secret scanning
- [ ] Container scanning
- [ ] Security linting rules
- [ ] Pre-commit hooks
- [ ] Security gates
- [ ] Vulnerability triage
- [ ] False positive handling
- [ ] Severity prioritization

**Labs**

- [ ] Tambahkan secret scanner.
- [ ] Tambahkan dependency scanner.
- [ ] Tambahkan SAST sederhana.
- [ ] Tambahkan container image scanner.
- [ ] Buat pipeline gagal jika severity melewati threshold.
- [ ] Dokumentasikan cara membaca hasil scan.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Commit dummy secret lalu pastikan scanner mendeteksi.
- [ ] Gunakan dependency vulnerable lalu lakukan update.
- [ ] Buat Docker image dengan base image rentan lalu ganti.
- [ ] Tambahkan false positive dan dokumentasikan triage.

**Exit Criteria**

- [ ] Bisa menjelaskan perbedaan SAST, SCA, secret scanning, dan container scanning.
- [ ] Bisa membaca report scanner.
- [ ] Bisa membedakan vulnerability kritis dan noise.
- [ ] Bisa memperbaiki dependency vulnerable.
- [ ] Bisa menjelaskan kenapa shift-left bukan berarti semua security selesai di awal.

---

## 9. Phase 5 — CI/CD Security and Software Supply Chain

**Mission:** Memahami bahwa pipeline dan dependency adalah bagian dari attack surface.

**Repo:** `software-supply-chain-lab`  
**Competency Question:** Apakah saya memahami risiko dependency, artifact, registry, pipeline token, provenance, dan integrity?

**Skills**

- [ ] CI/CD threat model
- [ ] Least privilege pipeline token
- [ ] Branch protection
- [ ] Protected environment
- [ ] Dependency pinning
- [ ] Artifact integrity
- [ ] SBOM
- [ ] Signing basics
- [ ] Provenance
- [ ] SLSA concepts
- [ ] Registry permissions
- [ ] Third-party action risk
- [ ] Build reproducibility basics

**Labs**

- [ ] Buat CI/CD threat model.
- [ ] Audit permission pipeline.
- [ ] Generate SBOM.
- [ ] Pin dependency atau action version.
- [ ] Simulasikan risiko third-party action.
- [ ] Tambahkan artifact checksum.
- [ ] Dokumentasikan provenance secara konseptual.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Pakai action tanpa pinning, lalu harden.
- [ ] Berikan token terlalu luas, lalu kurangi.
- [ ] Buat artifact tanpa checksum, lalu tambahkan integrity check.
- [ ] Simulasikan dependency update yang menyebabkan test gagal.

**Exit Criteria**

- [ ] Bisa menjelaskan kenapa CI/CD adalah attack surface.
- [ ] Bisa menjelaskan SBOM secara praktis.
- [ ] Bisa menjelaskan kenapa dependency pinning penting.
- [ ] Bisa menjelaskan least privilege untuk pipeline.
- [ ] Bisa menjelaskan provenance dan artifact integrity.

---

## 10. Phase 6 — Cloud and Infrastructure as Code

**Mission:** Menjalankan sistem di cloud dengan konfigurasi yang aman, dapat direproduksi, dan dapat diamati.

**Repo:** `cloud-secure-baseline`  
**Competency Question:** Apakah saya bisa membuat baseline deployment cloud dengan least privilege, networking masuk akal, secret management, logging, dan IaC?

**Skills**

- [ ] Cloud IAM
- [ ] VPC/networking basics
- [ ] Compute service
- [ ] Managed database
- [ ] Object storage
- [ ] Security group/firewall
- [ ] Secret manager
- [ ] Environment separation
- [ ] Terraform/OpenTofu basics
- [ ] Remote state concept
- [ ] Least privilege
- [ ] Cloud logging
- [ ] Backup basics
- [ ] Cost awareness

**Labs**

- [ ] Deploy backend sederhana ke cloud.
- [ ] Buat IaC baseline.
- [ ] Pisahkan dev/staging secara sederhana.
- [ ] Simpan secret dengan benar.
- [ ] Aktifkan logging.
- [ ] Batasi inbound access.
- [ ] Dokumentasikan diagram arsitektur.

**Break-and-Fix** `[FRICTION-ZONE]`

- [ ] Salah konfigurasi security group, lalu debug.
- [ ] IAM permission kurang, lalu investigasi.
- [ ] Environment variable hilang, lalu perbaiki.
- [ ] Database tidak bisa diakses karena network rule, lalu trace.
- [ ] Deployment gagal karena secret belum tersedia.

**Exit Criteria**

- [ ] Bisa menjelaskan arsitektur cloud baseline.
- [ ] Bisa menjelaskan IAM least privilege.
- [ ] Bisa membaca log deployment.
- [ ] Bisa memperbaiki permission/network issue dasar.
- [ ] Bisa menjelaskan perbedaan config lokal dan cloud.
- [ ] Bisa menghitung risiko biaya dasar.

---

## 11. Phase 7 — Container and Kubernetes Security

**Mission:** Memahami cloud-native deployment tanpa menjadikan Kubernetes sebagai distraksi terlalu awal.

**Repo:** `kubernetes-security-lab`  
**Competency Question:** Apakah saya bisa menjalankan workload container secara aman dengan RBAC, secret handling, network policy, dan observability dasar?

**Skills**

- [ ] Container image hardening
- [ ] Non-root container
- [ ] Image scanning
- [ ] Kubernetes deployment
- [ ] Service
- [ ] Ingress
- [ ] ConfigMap
- [ ] Secret
- [ ] Namespace
- [ ] RBAC
- [ ] Network policy
- [ ] Resource limit
- [ ] Health check
- [ ] Pod security basics
- [ ] Runtime visibility

**Labs**

- [ ] Deploy app ke local Kubernetes.
- [ ] Tambahkan resource limits.
- [ ] Tambahkan readiness/liveness probe.
- [ ] Terapkan RBAC minimal.
- [ ] Terapkan network policy sederhana.
- [ ] Scan container image.
- [ ] Dokumentasikan threat model cluster sederhana.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Pod crash karena config salah.
- [ ] Service tidak bisa diakses karena selector salah.
- [ ] Ingress salah route.
- [ ] Permission RBAC terlalu sempit atau terlalu luas.
- [ ] Secret tidak tersedia.
- [ ] Image tidak bisa pull.

**Exit Criteria**

- [ ] Bisa menjelaskan kapan Kubernetes diperlukan dan kapan tidak.
- [ ] Bisa debug pod crash sederhana.
- [ ] Bisa menjelaskan RBAC dan network policy dasar.
- [ ] Bisa menjelaskan risiko secret di cluster.
- [ ] Bisa menjalankan deployment minimal yang observable.

---

## 12. Phase 8 — Observability, Incident Response, and Reliability

**Mission:** Membangun kemampuan mendeteksi, menganalisis, dan memperbaiki kegagalan sistem.

**Repo:** `observability-incident-lab`  
**Competency Question:** Apakah saya bisa memahami apa yang terjadi di sistem ketika sesuatu gagal?

**Skills**

- [ ] Structured logging
- [ ] Metrics
- [ ] Tracing basics
- [ ] Alerting
- [ ] Dashboard
- [ ] SLI/SLO basics
- [ ] Error budget concept
- [ ] Incident response
- [ ] Rollback
- [ ] Backup and restore
- [ ] Postmortem
- [ ] Root cause analysis
- [ ] Runbook
- [ ] Failure drills

**Labs**

- [ ] Tambahkan logging yang bisa dicari.
- [ ] Tambahkan metrics endpoint.
- [ ] Buat dashboard sederhana.
- [ ] Buat alert sederhana.
- [ ] Simulasikan incident.
- [ ] Tulis postmortem.
- [ ] Buat runbook.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Database down.
- [ ] Latency naik.
- [ ] Error rate naik.
- [ ] Disk/log penuh.
- [ ] Deployment buruk butuh rollback.
- [ ] Config salah di production-like environment.

**Exit Criteria**

- [ ] Bisa menemukan penyebab error dari log dan metrics.
- [ ] Bisa menulis postmortem yang jelas.
- [ ] Bisa menjelaskan perbedaan symptom dan root cause.
- [ ] Bisa melakukan rollback sederhana.
- [ ] Bisa membuat runbook yang bisa diikuti orang lain.

---

## 13. Phase 9 — AI-Native DevSecOps Workflow

**Mission:** Membangun workflow DevSecOps modern yang memakai AI secara accountable, bukan secara buta.

**Repo:** `ai-native-devsecops-workflow`  
**Competency Question:** Apakah saya bisa menggunakan AI untuk mempercepat engineering workflow sambil tetap menjaga verifikasi, security, dan ownership manusia?

**Skills**

- [ ] Prompt-as-spec
- [ ] AI-assisted code review
- [ ] AI-assisted threat modeling
- [ ] AI-assisted test generation
- [ ] AI-assisted incident analysis
- [ ] AI-assisted documentation
- [ ] AI hallucination detection
- [ ] Human-in-the-loop review
- [ ] AI output evaluation
- [ ] Secure prompt/context sharing
- [ ] Privacy and secret awareness

**Labs**

- [ ] Buat prompt library untuk backend review.
- [ ] Buat prompt library untuk CI/CD review.
- [ ] Buat prompt library untuk threat modeling.
- [ ] Buat prompt library untuk incident analysis.
- [ ] Bandingkan output beberapa AI untuk kasus yang sama.
- [ ] Dokumentasikan kesalahan AI dan cara mendeteksinya.

**Break-and-Fix** `[BREAK-AND-FIX]`

- [ ] Minta AI membuat insecure auth flow, lalu review.
- [ ] Minta AI membuat pipeline terlalu permisif, lalu harden.
- [ ] Minta AI debugging tanpa log cukup, lalu koreksi prosesnya.
- [ ] Minta AI membuat desain overengineered, lalu sederhanakan.

**Exit Criteria**

- [ ] Bisa memakai AI sebagai tutor, implementer, reviewer, adversary, dan debugger secara sadar.
- [ ] Bisa mendeteksi output AI yang tampak benar tetapi salah.
- [ ] Bisa membuat prompt yang membawa AI ke arah reasoning, bukan sekadar jawaban.
- [ ] Bisa menjelaskan kapan AI boleh mempercepat dan kapan harus melambat.
- [ ] Punya prompt library yang dapat dipakai ulang di project lain.

---

## 14. Weekly Execution Loop

Gunakan loop ini untuk menjaga konsistensi tanpa kehilangan arah.

| Day | Focus | Output |
|---|---|---|
| Day 1 | Concept and Scope | Problem statement, selected tag, first-principles notes |
| Day 2 | Build with AI | Scaffold, implementation draft, commit |
| Day 3 | Deep Review | Architecture notes, risk notes, adversarial review |
| Day 4 | Manual Drill | Small component rebuilt without AI |
| Day 5 | Break and Fix | Failure simulation, debugging notes |
| Day 6 | Documentation | README, decision log, security checklist |
| Day 7 | Reflection | What improved, what remains unclear, next `[NO-AI-FIRST]` target |

---

## 15. Portfolio Repo Standard Checklist

Setiap repo yang masuk `[PORTFOLIO-GRADE]` harus memiliki:

- [ ] Clear problem statement
- [ ] README setup instruction
- [ ] Architecture diagram or explanation
- [ ] Security checklist
- [ ] Decision log
- [ ] Testing evidence
- [ ] CI/CD pipeline
- [ ] Known limitations
- [ ] AI usage disclosure
- [ ] At least one failure case or debugging note

---

## 16. Master Progress Board

Update manual saat mulai mengerjakan.

| Repo | Phase | Status | Last Updated | Current Blocker | Next Action |
|---|---:|---|---|---|---|
| `ai-assisted-devsecops-learning-system` | 0 | `not-started` | - | - | Create repo and add core docs |
| `systems-foundation-labs` | 1 | `not-started` | - | - | Start HTTP/DNS/Linux labs |
| `secure-api-template` | 2 | `not-started` | - | - | Define API baseline scope |
| `cicd-delivery-lab` | 3 | `not-started` | - | - | Create basic CI pipeline |
| `shift-left-security-pipeline` | 4 | `not-started` | - | - | Add secret/dependency scanner |
| `software-supply-chain-lab` | 5 | `not-started` | - | - | Create CI/CD threat model |
| `cloud-secure-baseline` | 6 | `not-started` | - | - | Define minimal cloud architecture |
| `kubernetes-security-lab` | 7 | `not-started` | - | - | Start after container/cloud foundation |
| `observability-incident-lab` | 8 | `not-started` | - | - | Define first failure drill |
| `ai-native-devsecops-workflow` | 9 | `not-started` | - | - | Extract reusable AI prompts |

---

## 17. Visual Roadmap Data Notes

Dokumen ini bisa dikonversi menjadi `roadmap-data.json` untuk static web tracker.

Recommended node fields:

```json
{
  "id": "phase-2-secure-backend-foundation",
  "phase": 2,
  "title": "Secure Backend Foundation",
  "status": "not-started",
  "priority": "critical",
  "repo": "secure-api-template",
  "tags": ["REVIEW-DEEP", "NO-AI-FIRST", "FRICTION-ZONE", "PORTFOLIO-GRADE"],
  "skills": [],
  "labs": [],
  "breakAndFix": [],
  "exitCriteria": []
}
```

Keep the visual tracker short. The visual roadmap should answer only:

1. Saya sedang di fase mana?
2. Apa target berikutnya?
3. Apa repo output-nya?
4. Tag friksi apa yang berlaku?
5. Apa exit criteria-nya?

