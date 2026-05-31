# AI-Assisted DevSecOps V-Shape Roadmap

> Dokumen utama untuk membangun pola pikir, roadmap teknis, sistem belajar, dan standar portofolio DevSecOps di era Generative AI.
>
> Orientasi utama: **Backend-heavy sebagai default, Cloud sebagai delivery environment, Security sebagai quality discipline, AI sebagai akselerator yang tidak menggantikan ownership teknis.**

---

## 0. Fungsi Dokumen Ini

Dokumen ini bukan sekadar daftar topik DevSecOps. Dokumen ini adalah **source of truth** untuk cara belajar, cara berpikir, cara memakai AI, cara membangun portofolio, dan cara menjaga agar akselerasi AI tidak berubah menjadi ketergantungan.

Dokumen ini harus bisa dipakai untuk tiga tujuan:

1. **Untuk diri sendiri**: menjaga arah belajar agar tetap konsisten, tidak terlalu pragmatis, dan tidak tersesat dalam terlalu banyak tool.
2. **Untuk AI partner apa pun**: ChatGPT, Claude, Gemini, Copilot, Cursor, atau agent coding lain dapat membaca konteks ini dan langsung memahami model belajar yang diinginkan.
3. **Untuk portofolio**: setiap fase menghasilkan repo spesifik yang membuktikan kompetensi tertentu, bukan satu project besar yang terlalu kabur.

Target akhirnya bukan “menyelesaikan roadmap”. Target akhirnya adalah menjadi engineer yang mampu:

- memahami sistem dari banyak sudut;
- membangun backend yang aman dan bisa dijelaskan;
- mengirim software melalui pipeline yang teruji;
- mengamankan delivery process;
- membaca failure mode;
- melakukan debugging secara mandiri;
- memakai AI secara agresif tanpa kehilangan design ownership.

---

## 1. AI Context Block

Bagian ini dapat diberikan langsung ke generative AI lain saat memulai sesi baru.

```text
Saya sedang membangun skill DevSecOps dengan model V-shape developer untuk era Generative AI.

Arah utama saya:
- Backend-heavy sebagai default.
- Cloud sebagai delivery environment.
- Security sebagai quality discipline.
- AI sebagai learning partner, reasoning accelerator, coding/workflow assistant, dan adversarial reviewer.

Saya ingin mempertahankan generalisasi horizontal di backend, cloud, security, DevSecOps, networking, Linux, automation, dan AI-assisted workflow. Namun saya juga ingin membangun vertical depth yang nyata di secure software delivery engineering.

Jangan hanya memberi jawaban cepat atau tutorial tool. Bantu saya membangun mental model, memahami failure mode, menguji asumsi, membuat keputusan teknis, dan menghasilkan repo portofolio yang membuktikan kompetensi spesifik.

AI boleh membantu saya melakukan vibe coding, scaffolding, refactoring, dokumentasi, test generation, threat modeling, dan debugging. Namun AI tidak boleh menggantikan:
- debugging autonomy;
- design ownership;
- secure reasoning;
- kemampuan membaca log;
- kemampuan menjelaskan sistem tanpa AI;
- kemampuan memperbaiki bagian penting secara manual.

Saat saya meminta bantuan teknis, bantu saya dengan pola:
1. Jelaskan prinsip dasarnya.
2. Identifikasi trade-off.
3. Beri implementasi seperlunya.
4. Beri failure mode.
5. Beri cara menguji.
6. Beri checkpoint agar saya tidak hanya menyalin output AI.

Gunakan friction tags berikut:
- [AI-OK]: AI boleh digunakan penuh.
- [REVIEW-DEEP]: output AI wajib dibaca, dikritik, dan dijelaskan.
- [NO-AI-FIRST]: saya harus mencoba sendiri dulu sebelum meminta solusi final.
- [FRICTION-ZONE]: jangan mengejar selesai cepat; gunakan kesulitan untuk membangun kompetensi.
- [BREAK-AND-FIX]: sengaja rusak lalu perbaiki.
- [PORTFOLIO-GRADE]: hasil harus layak dilihat publik.
- [EXPLAIN-WITHOUT-AI]: saya harus bisa menjelaskan konsep, alur, trade-off, dan failure mode tanpa bantuan AI.

Tujuan utama saya bukan menjadi operator AI, tetapi menjadi engineer yang dapat mengarahkan, menilai, memperbaiki, mengamankan, dan menjelaskan sistem yang dibangun bersama AI.
```

---

## 2. Manifesto: Cara Berpikir

### 2.1 AI Bukan Pengganti Engineer

AI dapat mempercepat penulisan kode, membuat boilerplate, menjelaskan konsep, menulis test awal, membaca dokumentasi, membuat konfigurasi, dan membantu debugging. Namun AI tidak otomatis memahami konteks sistem, prioritas bisnis, risiko keamanan, atau batasan production.

Karena itu, prinsip utama adalah:

> **AI boleh mempercepat produksi, tetapi tidak boleh menggantikan model mental.**

Jika AI menulis kode dan saya dapat menjelaskan, mengubah, menguji, mengamankan, dan memperbaikinya, itu akselerasi.

Jika AI menulis kode dan saya hanya merasa “masuk akal” tetapi tidak dapat membedah error, itu ketergantungan.

### 2.2 Jangan Bersaing dalam Mengetik Kode

Di era Generative AI, nilai engineer tidak lagi terutama berada pada kecepatan mengetik sintaks. Nilai engineer bergeser ke kemampuan memahami masalah, menyusun desain, menentukan batasan, menguji solusi, membaca failure mode, dan menjaga kualitas sistem.

Prinsipnya:

> **Jangan bersaing dalam mengetik kode. Bersainglah dalam memahami sistem.**

Saya tidak perlu menulis semua baris kode secara manual. Namun saya harus bisa:

- menjelaskan alur sistem;
- mengubah bagian penting;
- menulis test minimal;
- membaca log dan error;
- menemukan penyebab masalah;
- memahami risiko security;
- menghapus kompleksitas yang tidak perlu;
- mempertahankan scope agar tidak melebar.

### 2.3 Generalisasi Horizontal Adalah Aset, Tetapi Friksi Teknis Wajib Ada

Generalisasi horizontal membuat saya mampu melihat sistem dari banyak sudut: backend, cloud, security, networking, DevOps, AI, product, dan reliability. Ini meningkatkan kreativitas.

Namun generalisasi horizontal tidak boleh menjadi alasan untuk menghindari kedalaman.

> **Kreativitas muncul dari luasnya perspektif. Kredibilitas muncul dari kemampuan menyelesaikan kegagalan konkret.**

Karena itu roadmap ini sengaja memasukkan **tolerable technical friction**. Ada bagian yang tidak boleh dilewati hanya karena AI bisa memberikan jawaban cepat. Beberapa bagian harus dikerjakan lebih lambat agar membentuk otot teknis.

### 2.4 Backend-Heavy, Cloud-Delivered, Security-Disciplined

Arah utama roadmap ini:

- **Backend-heavy**: backend menjadi pusat latihan karena backend memaksa saya memahami API, data, auth, testing, concurrency, error handling, dan business logic.
- **Cloud as delivery environment**: cloud dipelajari sebagai tempat software hidup, dikirim, diamati, diamankan, dan diperbaiki.
- **Security as quality discipline**: security bukan topik tambahan di akhir, tetapi standar kualitas di setiap fase.

Dengan model ini, DevSecOps tidak menjadi kumpulan tool. DevSecOps menjadi cara berpikir tentang **secure software delivery**.

---

## 3. Model V-Shape Developer

### 3.1 Bagian Atas V: Horizontal Breadth

Bagian atas V adalah kemampuan melihat sistem secara luas.

Area horizontal:

- backend development;
- API design;
- database;
- Linux;
- Git dan GitHub;
- networking;
- HTTP, DNS, TLS;
- cloud computing;
- containerization;
- CI/CD;
- application security;
- supply chain security;
- observability;
- incident response;
- AI-assisted workflow.

Tujuan bagian atas V bukan menjadi ahli di semua hal. Tujuannya adalah memiliki peta mental yang cukup luas agar saya bisa membuat koneksi antar-domain dan tidak mudah tersesat oleh tool.

### 3.2 Bagian Bawah V: Vertical Depth

Bagian bawah V adalah area yang harus benar-benar dikuasai secara operasional.

Vertical depth utama:

> **Secure Software Delivery Engineering**

Definisi praktisnya:

Saya mampu membangun, menguji, mengamankan, mengirim, mengamati, dan memperbaiki backend system menggunakan praktik DevSecOps modern.

Kedalaman ini mencakup:

- secure backend implementation;
- CI/CD automation;
- secure pipeline;
- dependency and secret management;
- container security;
- cloud deployment;
- infrastructure as code;
- observability;
- failure analysis;
- incident response;
- AI-assisted engineering dengan human verification.

### 3.3 Standar Kepemilikan Teknis

Sebuah hasil kerja baru boleh dianggap “milik saya” jika saya bisa:

1. Menjelaskan tujuan sistem.
2. Menjelaskan arsitektur utama.
3. Menjelaskan alur request sampai database atau service tujuan.
4. Menjelaskan trust boundary.
5. Menjelaskan threat model dasar.
6. Menjelaskan test penting.
7. Menjalankan sistem lokal.
8. Membaca log saat terjadi error.
9. Memperbaiki minimal satu bug penting tanpa solusi final dari AI.
10. Menjelaskan trade-off desain.

Jika belum bisa melakukan hal di atas, hasil tersebut masih “output AI yang saya gunakan”, belum “kompetensi yang saya miliki”.

---

## 4. Cara Menggunakan AI

### 4.1 Mode AI

AI digunakan dalam beberapa mode berbeda.

#### Mode 1: Tutor

Tujuan: memahami konsep, mental model, dan trade-off.

Gunakan AI untuk:

- menjelaskan konsep dari first principles;
- membandingkan paradigma;
- memberikan contoh dan kontra-contoh;
- menjelaskan failure mode;
- menguji pemahaman dengan pertanyaan;
- membuat analogi teknis.

Jangan gunakan AI tutor hanya untuk ringkasan cepat. Paksa AI menjelaskan kenapa sesuatu ada, masalah apa yang diselesaikan, dan kapan tidak cocok digunakan.

#### Mode 2: Implementer

Tujuan: mempercepat pembuatan kode, konfigurasi, pipeline, dokumentasi, atau scaffold.

Gunakan AI untuk:

- membuat struktur awal project;
- menghasilkan boilerplate;
- menulis konfigurasi awal;
- membuat test template;
- membuat Dockerfile atau CI workflow awal;
- refactor kode;
- menghasilkan dokumentasi awal.

Tetapi semua output implementer harus melewati review.

#### Mode 3: Reviewer

Tujuan: membaca ulang hasil kerja dan menemukan kelemahan.

Gunakan AI untuk:

- code review;
- security review;
- architecture review;
- test coverage review;
- maintainability review;
- overengineering detection;
- simplification.

#### Mode 4: Adversary

Tujuan: menyerang asumsi dan mencari failure mode.

Gunakan AI untuk bertanya:

- Bagian mana yang insecure?
- Bagian mana yang fragile?
- Bagian mana yang akan gagal di production?
- Bagian mana yang terlalu kompleks?
- Bagian mana yang belum observable?
- Bagian mana yang sulit di-debug?
- Bagian mana yang memberi privilege terlalu besar?

#### Mode 5: Debugging Partner

Tujuan: membantu menyusun hipotesis, bukan langsung memberi jawaban final.

Urutan yang benar:

1. Saya tampilkan error, log, konteks, dan perubahan terakhir.
2. AI membantu menyusun kemungkinan penyebab.
3. AI memberi langkah verifikasi.
4. Saya menjalankan pemeriksaan.
5. Baru setelah bukti cukup, solusi diterapkan.

Debugging tidak boleh dimulai dari “berikan fix”. Debugging harus dimulai dari “apa hipotesisnya dan bagaimana membuktikannya?”.

### 4.2 Rasio Belajar 70-20-10

Gunakan rasio default:

- **70% AI-assisted building**: membangun project, scaffold, fitur, pipeline, dokumentasi, dan eksperimen.
- **20% deep review**: membaca, menjelaskan, mengkritik, dan memperbaiki hasil AI.
- **10% no-AI reconstruction**: membangun ulang komponen kecil tanpa AI untuk memperkuat otot teknis.

Rasio ini bukan aturan kaku, tetapi default untuk menjaga keseimbangan antara akselerasi dan kompetensi.

### 4.3 Aturan Vibe Coding

Vibe coding boleh dilakukan jika:

- scope project jelas;
- constraint teknis diberikan;
- output direview;
- bagian security tidak diterima mentah-mentah;
- ada test minimal;
- ada decision log;
- saya bisa menjelaskan hasilnya.

Vibe coding tidak boleh dilakukan secara buta pada:

- authentication;
- authorization;
- cryptography;
- secret management;
- IAM policy;
- database transaction;
- migration penting;
- production deployment;
- CI/CD permission;
- supply chain security;
- incident response.

Bagian-bagian ini minimal harus masuk `[REVIEW-DEEP]`, sering kali `[FRICTION-ZONE]`.

---

## 5. Friction Tags

Tag ini digunakan di roadmap, repo, issue, commit, dan visual tracker.

### `[AI-OK]`

AI boleh digunakan penuh.

Cocok untuk:

- boilerplate;
- scaffolding;
- draft dokumentasi;
- contoh awal;
- eksplorasi tool;
- generate variasi solusi;
- mempercepat pekerjaan repetitif.

Risiko: terlalu percaya diri. Tetap lakukan review ringan.

### `[REVIEW-DEEP]`

AI boleh membantu, tetapi output wajib dibaca, dikritik, dan dijelaskan.

Cocok untuk:

- auth flow;
- RBAC;
- error handling;
- database transaction;
- Dockerfile production;
- GitHub Actions;
- secret management;
- IAM policy;
- Terraform/OpenTofu module;
- security scan result.

Checklist:

- Apa asumsi output ini?
- Apa risiko security-nya?
- Apa failure mode-nya?
- Apa bagian yang terlalu kompleks?
- Apakah saya bisa menjelaskan trade-off-nya?

### `[NO-AI-FIRST]`

Saya harus mencoba sendiri dulu sebelum meminta solusi final.

Cocok untuk:

- membaca error sederhana;
- memperbaiki test gagal;
- membuat handler kecil;
- membuat middleware sederhana;
- menulis table-driven test;
- membaca log container;
- tracing request;
- memperbaiki Git conflict sederhana;
- debugging environment variable.

Aturan:

- Coba sendiri 15-30 menit.
- Tulis hipotesis.
- Tulis apa yang sudah dicoba.
- Baru minta AI membantu mengoreksi arah berpikir.

### `[FRICTION-ZONE]`

Ini area perkembangan utama. Jangan mengejar selesai cepat.

Cocok untuk:

- bug authorization;
- pipeline failure;
- flaky test;
- dependency vulnerability;
- container crash;
- migration error;
- permission cloud salah;
- network/DNS/TLS issue;
- secret exposure;
- log tidak cukup jelas;
- deployment gagal.

Aturan:

- Jangan langsung minta fix final.
- Mulai dari observasi.
- Buat hipotesis.
- Cari bukti.
- Persempit penyebab.
- Terapkan fix.
- Tulis postmortem pendek.

Tujuan tag ini bukan membuat proses lambat tanpa alasan. Tujuannya adalah membangun debugging autonomy.

### `[BREAK-AND-FIX]`

Sengaja merusak sistem lalu memperbaikinya.

Contoh:

- hapus environment variable;
- masukkan dummy secret lalu jalankan secret scanner;
- buat endpoint tanpa authorization lalu perbaiki;
- gunakan dependency vulnerable lalu update;
- buat pipeline gagal;
- ubah permission file;
- matikan database;
- ubah port;
- rusak migration;
- jalankan container dengan config salah.

Output wajib:

- gejala;
- penyebab;
- langkah debugging;
- solusi;
- pencegahan;
- pelajaran.

### `[PORTFOLIO-GRADE]`

Hasil harus layak dilihat publik.

Minimal harus ada:

- README jelas;
- problem statement;
- architecture diagram sederhana;
- setup instruction;
- CI/CD pipeline;
- tests;
- security checklist;
- decision log;
- known limitations;
- AI usage disclosure;
- evidence screenshot/log bila relevan.

### `[EXPLAIN-WITHOUT-AI]`

Saya harus bisa menjelaskan tanpa bantuan AI.

Pertanyaan uji:

- Apa problem yang diselesaikan?
- Bagaimana alur sistem?
- Apa trust boundary-nya?
- Apa risiko security-nya?
- Apa yang terjadi jika dependency gagal?
- Bagaimana cara rollback?
- Di mana log penting berada?
- Bagaimana membuktikan bug sudah selesai?

---

## 6. Portfolio Architecture

### 6.1 Prinsip Multi-Repo

Portofolio tidak dibangun sebagai satu project besar yang mencampur semua hal. Portofolio dibangun sebagai beberapa repo fokus, masing-masing membuktikan satu kompetensi spesifik.

Prinsip:

> **Setiap repo harus menjawab satu pertanyaan kompetensi.**

Contoh pertanyaan kompetensi:

- Apakah saya bisa membangun backend API yang aman dan testable?
- Apakah saya bisa membuat pipeline dari commit sampai artifact?
- Apakah saya bisa memasukkan security check sejak awal development?
- Apakah saya paham risiko dependency, artifact, dan pipeline?
- Apakah saya bisa deploy aplikasi ke cloud dengan least privilege?
- Apakah saya bisa mendeteksi, menganalisis, dan memperbaiki incident?

### 6.2 Standar Minimal Setiap Repo

Setiap repo portfolio-grade harus memiliki:

```text
README.md
ARCHITECTURE.md
SECURITY.md
DECISIONS.md
TESTING.md
INCIDENTS.md atau POSTMORTEM.md jika relevan
AI_USAGE.md
.github/workflows/
docs/ jika diperlukan
```

Tidak semua repo harus kompleks. Namun setiap repo harus jelas kompetensi apa yang dibuktikan.

### 6.3 AI Usage Disclosure

Karena AI digunakan secara aktif, setiap repo harus menjelaskan:

- bagian mana yang dibuat dengan bantuan AI;
- bagian mana yang direview manual;
- bug atau kesalahan AI yang ditemukan;
- keputusan teknis yang diambil manusia;
- pelajaran yang didapat.

Tujuannya bukan meminta maaf karena memakai AI. Tujuannya membuktikan bahwa saya adalah owner, bukan operator pasif.

---

## 7. Roadmap Utama

Roadmap ini mastery-based, bukan calendar-based. Lanjut fase jika exit criteria terpenuhi, bukan hanya karena waktu sudah lewat.

---

## Phase 0 — Learning Operating System

### Misi

Membangun sistem belajar utama agar semua sesi dengan AI, semua repo, dan semua project mengikuti prinsip yang sama.

### Repo Output

`ai-assisted-devsecops-learning-system`

### Pertanyaan Kompetensi

Apakah saya memiliki sistem belajar yang membuat AI partner memahami tujuan, aturan, standar, dan cara membantu saya tanpa perlu dijelaskan ulang dari nol?

### Isi Repo

```text
README.md
AI_CONTEXT.md
MANIFESTO.md
ROADMAP.md
ROADMAP_TRACKER.md
FRICTION_PROTOCOL.md
PROJECT_STANDARD.md
PROMPT_LIBRARY.md
templates/
  DECISION_LOG_TEMPLATE.md
  POSTMORTEM_TEMPLATE.md
  SECURITY_REVIEW_TEMPLATE.md
  PROJECT_README_TEMPLATE.md
visual-roadmap/
  roadmap-data.json
  README.md
```

### Skill yang Dibangun

- AI-assisted learning design;
- prompt-as-specification;
- learning protocol;
- friction management;
- project standardization;
- documentation discipline;
- self-review habit.

### Tags

`[PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI] [REVIEW-DEEP]`

### Manual Drill

Tulis sendiri tanpa AI:

- tujuan belajar dalam 5 kalimat;
- definisi V-shape developer versi sendiri;
- alasan kenapa AI tidak boleh menggantikan debugging autonomy;
- standar minimal repo portfolio-grade.

### Exit Criteria

Saya boleh lanjut jika:

- repo fase 0 sudah ada;
- `AI_CONTEXT.md` bisa diberikan ke AI lain dan menghasilkan respons yang selaras;
- friction tags sudah didefinisikan;
- project standard sudah jelas;
- saya bisa menjelaskan roadmap ini tanpa membaca seluruh dokumen.

---

## Phase 1 — Systems Foundation

### Misi

Membangun fondasi Linux, Git, networking, HTTP, DNS, TLS, terminal, dan debugging dasar.

### Repo Output

`systems-foundation-labs`

### Pertanyaan Kompetensi

Apakah saya memahami lingkungan tempat software berjalan dan bisa melakukan investigasi dasar saat sistem bermasalah?

### Skill

- Linux filesystem dan permissions;
- process, signals, ports;
- shell scripting dasar;
- Git workflow;
- GitHub collaboration workflow;
- HTTP request/response;
- DNS lookup;
- TLS basics;
- TCP/IP mental model;
- curl, dig, ss/netstat, journalctl, grep, awk dasar;
- environment variables;
- log reading.

### Tags

`[NO-AI-FIRST] [FRICTION-ZONE] [EXPLAIN-WITHOUT-AI]`

### Labs

- Trace HTTP request dengan `curl -v`.
- Cek DNS resolution dengan `dig` atau `nslookup`.
- Jalankan service lokal dan cek port terbuka.
- Buat script log parser sederhana.
- Simulasikan permission error.
- Simulasikan port conflict.
- Buat Git branching workflow dan resolve conflict sederhana.

### Manual Drills

Tanpa AI, saya harus bisa:

- membaca error permission;
- mencari process yang memakai port tertentu;
- menjelaskan request HTTP sederhana;
- melakukan Git revert/reset dasar dengan hati-hati;
- membaca log service sederhana.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan alur request HTTP dari client ke server;
- bisa memakai terminal untuk investigasi dasar;
- bisa membaca log error sederhana;
- bisa resolve Git conflict kecil;
- bisa menjelaskan DNS dan TLS secara high-level tanpa AI.

---

## Phase 2 — Secure Backend Foundation

### Misi

Membangun backend API yang aman, testable, dan bisa dijelaskan.

### Repo Output

`secure-api-template`

### Pertanyaan Kompetensi

Apakah saya bisa membangun backend API production-minded yang memiliki auth, validation, error handling, testing, logging, dan security baseline?

### Skill

- API design;
- routing;
- request validation;
- error handling;
- structured logging;
- database migration;
- transaction;
- authentication;
- authorization;
- password hashing;
- session/token strategy;
- rate limiting;
- input validation;
- testing;
- config management;
- Docker Compose untuk local dev.

### Tags

`[REVIEW-DEEP] [NO-AI-FIRST] [FRICTION-ZONE] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]`

### AI Usage

AI boleh membuat scaffold, contoh handler, test template, Docker Compose, dan README awal.

AI tidak boleh diterima mentah-mentah untuk:

- auth flow;
- password handling;
- token lifecycle;
- authorization check;
- database transaction;
- security error handling.

### Labs

- Implementasi API CRUD minimal dengan validation.
- Implementasi auth sederhana.
- Implementasi authorization berdasarkan role/ownership.
- Tambahkan rate limiting.
- Tambahkan test untuk happy path dan failure path.
- Tambahkan structured logging.
- Tambahkan security checklist.

### Break-and-Fix

- Buat endpoint yang lupa authorization, lalu temukan dan perbaiki.
- Buat validation lemah, lalu tulis test yang membuktikan bug.
- Buat token expired tidak ditangani, lalu debug.
- Buat database transaction gagal di tengah proses, lalu rollback.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan request flow dari router sampai database;
- bisa menjelaskan perbedaan authentication dan authorization;
- bisa menulis test dasar tanpa AI;
- bisa debug auth bug sederhana;
- bisa menjelaskan threat model API secara ringkas;
- repo sudah portfolio-grade.

---

## Phase 3 — DevOps Core: Build, Test, Package, Release

### Misi

Mengubah kode menjadi artifact yang bisa diuji, dibangun, dan dirilis secara otomatis.

### Repo Output

`cicd-delivery-lab`

### Pertanyaan Kompetensi

Apakah saya bisa membuat pipeline yang mengubah commit menjadi artifact secara otomatis dan terkontrol?

### Skill

- CI/CD concept;
- GitHub Actions atau alternatif;
- linting;
- automated test;
- build artifact;
- Docker image build;
- container registry;
- semantic versioning;
- release notes;
- branch protection;
- environment separation;
- rollback basics.

### Tags

`[AI-OK] [REVIEW-DEEP] [FRICTION-ZONE] [PORTFOLIO-GRADE]`

### Labs

- Pipeline untuk lint, test, build.
- Pipeline untuk build Docker image.
- Push image ke registry.
- Release tag otomatis.
- Fail pipeline jika test gagal.
- Tambahkan badge pipeline ke README.

### Break-and-Fix

- Sengaja buat test gagal.
- Sengaja buat Docker build gagal.
- Sengaja ubah environment variable menjadi salah.
- Sengaja buat pipeline memakai path yang salah.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan alur commit sampai artifact;
- bisa membaca log pipeline;
- bisa memperbaiki pipeline gagal sederhana;
- bisa menjelaskan kenapa CI harus gagal saat test gagal;
- bisa menjelaskan risiko secret di pipeline.

---

## Phase 4 — Shift-Left Security Pipeline

### Misi

Memasukkan security check sejak awal development, bukan setelah project selesai.

### Repo Output

`shift-left-security-pipeline`

### Pertanyaan Kompetensi

Apakah saya bisa membuat pipeline yang otomatis mendeteksi risiko security dasar sebelum kode masuk lebih jauh?

### Skill

- SAST;
- SCA/dependency scanning;
- secret scanning;
- container scanning;
- linting security rules;
- pre-commit hooks;
- security gates;
- vulnerability triage;
- false positive handling;
- severity prioritization.

### Tags

`[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [PORTFOLIO-GRADE]`

### Labs

- Tambahkan secret scanner.
- Tambahkan dependency scanner.
- Tambahkan SAST sederhana.
- Tambahkan container image scanner.
- Buat pipeline gagal jika severity melewati threshold.
- Dokumentasikan cara membaca hasil scan.

### Break-and-Fix

- Commit dummy secret lalu pastikan scanner mendeteksi.
- Gunakan dependency vulnerable lalu lakukan update.
- Buat Docker image dengan base image rentan lalu ganti.
- Tambahkan false positive dan dokumentasikan triage.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan perbedaan SAST, SCA, secret scanning, dan container scanning;
- bisa membaca report scanner;
- bisa membedakan vulnerability kritis dan noise;
- bisa memperbaiki dependency vulnerable;
- bisa menjelaskan kenapa shift-left bukan berarti semua security selesai di awal.

---

## Phase 5 — CI/CD Security and Software Supply Chain

### Misi

Memahami bahwa pipeline dan dependency adalah bagian dari attack surface.

### Repo Output

`software-supply-chain-lab`

### Pertanyaan Kompetensi

Apakah saya memahami risiko dependency, artifact, registry, pipeline token, provenance, dan integrity?

### Skill

- CI/CD threat model;
- least privilege pipeline token;
- branch protection;
- protected environment;
- dependency pinning;
- artifact integrity;
- SBOM;
- signing basics;
- provenance;
- SLSA concepts;
- registry permissions;
- third-party action risk;
- build reproducibility basics.

### Tags

`[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]`

### Labs

- Buat CI/CD threat model.
- Audit permission pipeline.
- Generate SBOM.
- Pin dependency atau action version.
- Simulasikan risiko third-party action.
- Tambahkan artifact checksum.
- Dokumentasikan provenance secara konseptual.

### Break-and-Fix

- Pakai action tanpa pinning, lalu harden.
- Berikan token terlalu luas, lalu kurangi.
- Buat artifact tanpa checksum, lalu tambahkan integrity check.
- Simulasikan dependency update yang menyebabkan test gagal.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan kenapa CI/CD adalah attack surface;
- bisa menjelaskan SBOM secara praktis;
- bisa menjelaskan kenapa dependency pinning penting;
- bisa menjelaskan least privilege untuk pipeline;
- bisa menjelaskan konsep provenance dan artifact integrity.

---

## Phase 6 — Cloud and Infrastructure as Code

### Misi

Menjalankan sistem di cloud dengan konfigurasi yang aman, dapat direproduksi, dan dapat diamati.

### Repo Output

`cloud-secure-baseline`

### Pertanyaan Kompetensi

Apakah saya bisa membuat baseline deployment cloud yang menggunakan least privilege, networking masuk akal, secret management, logging, dan IaC?

### Skill

- cloud IAM;
- VPC/networking basics;
- compute service;
- managed database;
- object storage;
- security group/firewall;
- secret manager;
- environment separation;
- Terraform/OpenTofu basics;
- remote state concept;
- least privilege;
- cloud logging;
- backup basics;
- cost awareness.

### Tags

`[REVIEW-DEEP] [FRICTION-ZONE] [NO-AI-FIRST] [PORTFOLIO-GRADE]`

### Labs

- Deploy backend sederhana ke cloud.
- Buat IaC baseline.
- Pisahkan dev/staging secara sederhana.
- Simpan secret dengan benar.
- Aktifkan logging.
- Batasi inbound access.
- Dokumentasikan diagram arsitektur.

### Break-and-Fix

- Salah konfigurasi security group, lalu debug.
- IAM permission kurang, lalu investigasi.
- Environment variable hilang, lalu perbaiki.
- Database tidak bisa diakses karena network rule, lalu trace.
- Deployment gagal karena secret belum tersedia.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan arsitektur cloud baseline;
- bisa menjelaskan IAM least privilege;
- bisa membaca log deployment;
- bisa memperbaiki permission/network issue dasar;
- bisa menjelaskan perbedaan config lokal dan cloud;
- bisa menghitung risiko biaya dasar.

---

## Phase 7 — Container and Kubernetes Security

### Misi

Memahami cloud-native deployment tanpa menjadikan Kubernetes sebagai distraksi terlalu awal.

### Repo Output

`kubernetes-security-lab`

### Pertanyaan Kompetensi

Apakah saya bisa menjalankan workload container secara aman dengan RBAC, secret handling, network policy, dan observability dasar?

### Skill

- container image hardening;
- non-root container;
- image scanning;
- Kubernetes deployment;
- service;
- ingress;
- configmap;
- secret;
- namespace;
- RBAC;
- network policy;
- resource limit;
- health check;
- pod security basics;
- runtime visibility.

### Tags

`[REVIEW-DEEP] [FRICTION-ZONE] [BREAK-AND-FIX] [PORTFOLIO-GRADE]`

### Labs

- Deploy app ke local Kubernetes.
- Tambahkan resource limits.
- Tambahkan readiness/liveness probe.
- Terapkan RBAC minimal.
- Terapkan network policy sederhana.
- Scan container image.
- Dokumentasikan threat model cluster sederhana.

### Break-and-Fix

- Pod crash karena config salah.
- Service tidak bisa diakses karena selector salah.
- Ingress salah route.
- Permission RBAC terlalu sempit atau terlalu luas.
- Secret tidak tersedia.
- Image tidak bisa pull.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menjelaskan kapan Kubernetes diperlukan dan kapan tidak;
- bisa debug pod crash sederhana;
- bisa menjelaskan RBAC dan network policy dasar;
- bisa menjelaskan risiko secret di cluster;
- bisa menjalankan deployment minimal yang observable.

---

## Phase 8 — Observability, Incident Response, and Reliability

### Misi

Membangun kemampuan mendeteksi, menganalisis, dan memperbaiki kegagalan sistem.

### Repo Output

`observability-incident-lab`

### Pertanyaan Kompetensi

Apakah saya bisa memahami apa yang terjadi di sistem ketika sesuatu gagal?

### Skill

- structured logging;
- metrics;
- tracing basics;
- alerting;
- dashboard;
- SLI/SLO basics;
- error budget concept;
- incident response;
- rollback;
- backup and restore;
- postmortem;
- root cause analysis;
- runbook;
- failure drills.

### Tags

`[FRICTION-ZONE] [BREAK-AND-FIX] [NO-AI-FIRST] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]`

### Labs

- Tambahkan logging yang bisa dicari.
- Tambahkan metrics endpoint.
- Buat dashboard sederhana.
- Buat alert sederhana.
- Simulasikan incident.
- Tulis postmortem.
- Buat runbook.

### Break-and-Fix

- Database down.
- Latency naik.
- Error rate naik.
- Disk/log penuh.
- Deployment buruk butuh rollback.
- Config salah di production-like environment.

### Exit Criteria

Saya boleh lanjut jika:

- bisa menemukan penyebab error dari log dan metrics;
- bisa menulis postmortem yang jelas;
- bisa menjelaskan perbedaan symptom dan root cause;
- bisa melakukan rollback sederhana;
- bisa membuat runbook yang bisa diikuti orang lain.

---

## Phase 9 — AI-Native DevSecOps Workflow

### Misi

Membangun workflow DevSecOps modern yang memakai AI secara accountable, bukan secara buta.

### Repo Output

`ai-native-devsecops-workflow`

### Pertanyaan Kompetensi

Apakah saya bisa menggunakan AI untuk mempercepat engineering workflow sambil tetap menjaga verifikasi, security, dan ownership manusia?

### Skill

- prompt-as-spec;
- AI-assisted code review;
- AI-assisted threat modeling;
- AI-assisted test generation;
- AI-assisted incident analysis;
- AI-assisted documentation;
- AI hallucination detection;
- human-in-the-loop review;
- AI output evaluation;
- secure prompt/context sharing;
- privacy and secret awareness.

### Tags

`[REVIEW-DEEP] [FRICTION-ZONE] [PORTFOLIO-GRADE] [EXPLAIN-WITHOUT-AI]`

### Labs

- Buat prompt library untuk backend review.
- Buat prompt library untuk CI/CD review.
- Buat prompt library untuk threat modeling.
- Buat prompt library untuk incident analysis.
- Bandingkan output beberapa AI untuk kasus yang sama.
- Dokumentasikan kesalahan AI dan cara mendeteksinya.

### Break-and-Fix

- Minta AI membuat insecure auth flow, lalu review.
- Minta AI membuat pipeline terlalu permisif, lalu harden.
- Minta AI men-debug tanpa log cukup, lalu koreksi prosesnya.
- Minta AI membuat desain overengineered, lalu sederhanakan.

### Exit Criteria

Saya boleh menganggap fase ini matang jika:

- bisa memakai AI sebagai tutor, implementer, reviewer, adversary, dan debugger secara sadar;
- bisa mendeteksi output AI yang tampak benar tetapi salah;
- bisa membuat prompt yang membawa AI ke arah reasoning, bukan sekadar jawaban;
- bisa menjelaskan kapan AI boleh mempercepat dan kapan saya harus melambat;
- punya prompt library yang dapat dipakai ulang di project lain.

---

## 8. Optional Capstone Tracks

Capstone tidak harus satu aplikasi besar. Pilih berdasarkan fase yang ingin dibuktikan.

### Capstone A — Secure Backend Delivery

Fokus:

- backend API;
- auth;
- testing;
- CI/CD;
- security scanning;
- Docker;
- deployment sederhana.

Cocok jika ingin membuktikan backend-heavy DevSecOps.

### Capstone B — Secure Pipeline and Supply Chain

Fokus:

- CI/CD security;
- secret scanning;
- dependency scanning;
- SBOM;
- artifact integrity;
- token hardening;
- branch protection.

Cocok jika ingin membuktikan secure delivery engineering.

### Capstone C — Cloud Secure Baseline

Fokus:

- IaC;
- IAM;
- VPC;
- deployment;
- logging;
- secret management;
- cost awareness;
- backup.

Cocok jika ingin memperkuat cloud delivery environment.

### Capstone D — Incident Response Lab

Fokus:

- observability;
- failure simulation;
- debugging;
- postmortem;
- rollback;
- runbook.

Cocok jika ingin membangun kredibilitas operasional.

---

## 9. Weekly Execution Loop

Gunakan loop mingguan agar konsisten.

### Hari 1 — Concept and Scope

- Pilih satu topik kecil.
- Tulis problem statement.
- Tentukan tag: `[AI-OK]`, `[FRICTION-ZONE]`, dll.
- Minta AI menjelaskan first principles dan trade-off.

### Hari 2 — Build with AI

- Gunakan AI untuk scaffold atau implementasi awal.
- Jaga scope kecil.
- Commit perubahan.

### Hari 3 — Deep Review

- Baca kode/config.
- Tulis penjelasan alur.
- Cari bagian insecure atau fragile.
- Minta AI menjadi adversary.

### Hari 4 — Manual Drill

- Ambil satu komponen kecil.
- Bangun ulang tanpa AI.
- Tulis apa yang sulit.

### Hari 5 — Break and Fix

- Rusak satu bagian.
- Debug dengan hipotesis.
- Tulis hasil investigasi.

### Hari 6 — Documentation

- Update README.
- Update decision log.
- Update security checklist.
- Update known limitations.

### Hari 7 — Reflection

- Apa yang dipahami?
- Apa yang masih kabur?
- Apa yang terlalu dibantu AI?
- Apa yang harus masuk `[NO-AI-FIRST]` minggu depan?

---

## 10. Prompt Library Awal

### 10.1 Tutor Prompt

```text
Jelaskan konsep berikut dari first principles. Jangan hanya beri definisi. Jelaskan:
1. Masalah apa yang diselesaikan.
2. Kenapa konsep ini muncul.
3. Cara kerjanya secara mental model.
4. Trade-off.
5. Failure mode.
6. Contoh dalam backend/cloud/security.
7. Pertanyaan untuk menguji pemahaman saya.

Konsep: <isi konsep>
```

### 10.2 Implementer Prompt

```text
Bantu saya membuat implementasi awal untuk <fitur/lab>.

Konteks:
- Tujuan:
- Stack:
- Constraint:
- Security concern:
- Scope yang tidak boleh dilewati:

Jangan overengineering. Buat versi minimal yang bisa diuji. Setelah kode, jelaskan alur, trade-off, dan bagian yang wajib saya review manual.
```

### 10.3 Adversarial Review Prompt

```text
Bertindak sebagai reviewer adversarial untuk kode/desain berikut.

Cari:
1. Bug tersembunyi.
2. Risiko security.
3. Asumsi rapuh.
4. Overengineering.
5. Missing tests.
6. Failure mode production.
7. Bagian yang sulit di-debug.
8. Bagian yang harus saya pahami tanpa AI.

Jangan hanya memberi kritik umum. Beri alasan teknis dan prioritas perbaikan.
```

### 10.4 Debugging Prompt

```text
Bantu saya debugging dengan metode hipotesis, bukan langsung memberi solusi final.

Konteks:
- Apa yang saya lakukan:
- Expected behavior:
- Actual behavior:
- Error/log:
- Perubahan terakhir:
- Yang sudah saya coba:

Tolong bantu:
1. Susun kemungkinan penyebab.
2. Urutkan berdasarkan probabilitas.
3. Beri langkah verifikasi.
4. Jelaskan bukti apa yang perlu dicari.
5. Setelah itu baru sarankan fix.
```

### 10.5 Security Review Prompt

```text
Review desain/kode ini dari perspektif security.

Fokus pada:
- authentication;
- authorization;
- input validation;
- secret handling;
- dependency risk;
- logging sensitive data;
- CI/CD risk;
- cloud/IAM risk;
- supply chain risk.

Berikan threat model ringan, risiko prioritas, dan mitigasi realistis. Jangan berlebihan, tapi jangan melewatkan risiko penting.
```

### 10.6 Explain-Without-AI Prompt

```text
Uji pemahaman saya. Berikan 10 pertanyaan tentang topik ini yang memaksa saya menjelaskan alur, trade-off, dan failure mode tanpa bergantung pada hafalan.

Topik: <isi topik>
Level: beginner/intermediate/advanced
```

---

## 11. Decision Log Template

Gunakan untuk setiap keputusan teknis penting.

```md
# Decision Log: <Judul>

## Context
Apa masalah yang sedang diselesaikan?

## Options Considered
1. Opsi A
2. Opsi B
3. Opsi C

## Decision
Apa yang dipilih?

## Reason
Kenapa pilihan ini masuk akal sekarang?

## Trade-offs
Apa yang dikorbankan?

## Security Impact
Apa dampak security-nya?

## Operational Impact
Apa dampak deployment, monitoring, debugging, dan maintenance?

## Revisit When
Kapan keputusan ini harus dievaluasi ulang?
```

---

## 12. Postmortem Template

```md
# Postmortem: <Judul Incident>

## Summary
Apa yang terjadi?

## Impact
Apa dampaknya?

## Timeline
- Waktu mulai:
- Waktu terdeteksi:
- Waktu mitigasi:
- Waktu selesai:

## Detection
Bagaimana masalah ditemukan?

## Root Cause
Apa penyebab utama?

## Contributing Factors
Faktor pendukung apa yang memperburuk masalah?

## Resolution
Apa yang dilakukan untuk memperbaiki?

## Prevention
Apa yang akan dilakukan agar tidak terulang?

## Lessons Learned
Apa pelajaran teknis dan mental model yang didapat?

## AI Usage
Apakah AI digunakan? Bagian mana yang membantu? Bagian mana yang harus diverifikasi manual?
```

---

## 13. Security Review Checklist

### Application

- Apakah input divalidasi?
- Apakah error message membocorkan detail sensitif?
- Apakah authentication benar-benar memverifikasi identitas?
- Apakah authorization dicek di resource level?
- Apakah password di-hash dengan benar?
- Apakah token punya expiry?
- Apakah rate limiting diperlukan?
- Apakah data sensitif muncul di log?

### Dependency

- Apakah dependency dipin?
- Apakah ada vulnerability known?
- Apakah dependency benar-benar dibutuhkan?
- Apakah license perlu diperhatikan?

### CI/CD

- Apakah secret muncul di log?
- Apakah token pipeline terlalu luas?
- Apakah branch protection aktif?
- Apakah third-party action dipin?
- Apakah pipeline menjalankan test dan scan?

### Container

- Apakah image terlalu besar?
- Apakah berjalan sebagai root?
- Apakah base image punya vulnerability?
- Apakah secret dimasukkan ke image?
- Apakah healthcheck ada?

### Cloud

- Apakah IAM mengikuti least privilege?
- Apakah security group terlalu terbuka?
- Apakah secret manager digunakan?
- Apakah logging aktif?
- Apakah backup dibutuhkan?
- Apakah biaya bisa membengkak?

---

## 14. Anti-Patterns

Hindari pola berikut.

### 14.1 Tool Collecting

Belajar terlalu banyak tool tanpa memahami problem yang diselesaikan.

Koreksi: selalu mulai dari problem, bukan tool.

### 14.2 AI Copy-Paste Confidence

Menerima output AI karena terlihat rapi.

Koreksi: wajib review, test, dan explain-without-AI untuk bagian penting.

### 14.3 Roadmap Completion Addiction

Mengejar checklist selesai tanpa kompetensi nyata.

Koreksi: gunakan exit criteria dan friction tags.

### 14.4 Avoiding Friction

Selalu meminta AI memperbaiki error sebelum mencoba memahami penyebab.

Koreksi: pakai `[NO-AI-FIRST]` dan debugging berbasis hipotesis.

### 14.5 One Giant Portfolio Project

Membangun satu project besar yang terlihat kompleks tetapi kompetensinya tidak jelas.

Koreksi: bangun multi-repo, masing-masing menjawab pertanyaan kompetensi spesifik.

### 14.6 Security as Decoration

Menambahkan security scanner hanya agar terlihat DevSecOps.

Koreksi: pahami hasil scan, triage, mitigasi, dan batasannya.

### 14.7 Kubernetes Too Early

Masuk Kubernetes sebelum paham container, networking, CI/CD, dan deployment dasar.

Koreksi: Kubernetes masuk setelah fondasi delivery matang.

---

## 15. Definition of Progress

Progress bukan hanya menyelesaikan materi.

Progress berarti:

- saya bisa menjelaskan lebih baik;
- saya bisa debug lebih mandiri;
- saya bisa mengurangi scope yang tidak perlu;
- saya bisa mengenali risiko security lebih cepat;
- saya bisa menilai output AI lebih kritis;
- saya bisa membuat repo yang lebih jelas dan teruji;
- saya bisa menulis decision log yang masuk akal;
- saya bisa memperbaiki failure nyata.

Jika saya hanya menghasilkan banyak kode tetapi tidak meningkatkan hal-hal di atas, itu bukan progress utama.

---

## 16. Definition of Done untuk Repo Portfolio

Sebuah repo dianggap selesai untuk fase tertentu jika:

- problem statement jelas;
- setup dapat dijalankan;
- README tidak membingungkan;
- ada test atau bukti verifikasi;
- ada CI/CD minimal;
- ada security consideration;
- ada decision log;
- ada known limitations;
- ada AI usage disclosure;
- saya bisa menjelaskan repo tanpa AI;
- ada minimal satu friction atau incident yang didokumentasikan.

---

## 17. Recommended Reference Anchors

Referensi ini bukan “kurikulum mutlak”, tetapi anchor untuk menjaga roadmap tetap realistis.

- roadmap.sh DevSecOps Roadmap — referensi visual dan peta umum topik DevSecOps.
- OWASP DevSecOps Guideline — referensi tentang secure pipeline, best practices, tools, dan shift-left security culture.
- OWASP CI/CD Security Cheat Sheet — referensi untuk mengamankan pipeline sebagai attack surface.
- SLSA — framework/checklist untuk software supply chain security, artifact integrity, provenance, dan tampering prevention.
- OWASP Cheat Sheet Series — referensi praktis untuk topik application security spesifik.

---

## 18. Final Principle

Roadmap ini bukan alat untuk menjadi orang yang “tahu banyak nama tool”. Roadmap ini adalah sistem untuk membentuk engineer yang bisa berpikir, membangun, mengamankan, mengirim, mengamati, dan memperbaiki software di era AI.

Mantra utama:

> **AI mempercepat produksi. Friksi membentuk kompetensi. Review menjaga ownership. Security menjaga kualitas. Debugging membuktikan kedalaman.**

Jika suatu fase terasa terlalu mudah, tambahkan `[BREAK-AND-FIX]`.

Jika suatu fase terasa terlalu cepat selesai, tambahkan `[EXPLAIN-WITHOUT-AI]`.

Jika suatu fase terasa terlalu kabur, kecilkan scope.

Jika AI terasa terlalu dominan, lakukan manual reconstruction.

Jika roadmap terasa seperti checklist, kembali ke manifesto.

