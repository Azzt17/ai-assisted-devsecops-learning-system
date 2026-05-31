const state = {
  roadmap: null,
  filters: {
    search: "",
    status: "all",
    tag: "all",
    priority: "all",
  },
};

const elements = {
  title: document.getElementById("roadmap-title"),
  description: document.getElementById("roadmap-description"),
  coreDirection: document.getElementById("core-direction"),
  coreSubtitle: document.getElementById("core-subtitle"),
  overallProgressLabel: document.getElementById("overall-progress-label"),
  overallProgressBar: document.getElementById("overall-progress-bar"),
  summaryStats: document.getElementById("summary-stats"),
  currentTitle: document.getElementById("current-phase-title"),
  currentMission: document.getElementById("current-phase-mission"),
  currentTags: document.getElementById("current-phase-tags"),
  currentNextAction: document.getElementById("current-next-action"),
  searchInput: document.getElementById("search-input"),
  statusFilter: document.getElementById("status-filter"),
  tagFilter: document.getElementById("tag-filter"),
  priorityFilter: document.getElementById("priority-filter"),
  resetFilters: document.getElementById("reset-filters"),
  tagLegend: document.getElementById("tag-legend"),
  portfolioBoard: document.getElementById("portfolio-board"),
  timeline: document.getElementById("timeline"),
  visibleCount: document.getElementById("visible-count"),
  phaseList: document.getElementById("phase-list"),
  phaseTemplate: document.getElementById("phase-card-template"),
};

function formatStatus(status) {
  return String(status || "not-started")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatPriority(priority) {
  return String(priority || "medium")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function phaseProgress(phase) {
  if (typeof phase.progress === "number")
    return Math.max(0, Math.min(100, phase.progress));
  if (phase.status === "completed") return 100;
  if (phase.status === "in-progress") return 50;
  return 0;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function createPill(text, className = "pill") {
  const pill = document.createElement("span");
  pill.className = className;
  pill.textContent = text;
  return pill;
}

function createTag(tag) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tag clickable";
  button.textContent = `[${tag}]`;
  button.title = `Filter by ${tag}`;
  button.addEventListener("click", () => {
    state.filters.tag = tag;
    elements.tagFilter.value = tag;
    render();
  });
  return button;
}

function listItems(items) {
  if (!items || items.length === 0)
    return '<p class="muted">No items defined.</p>';
  return `<ul>${items.map((item) => `<li>${escapeHtml(String(item))}</li>`).join("")}</ul>`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function phaseSearchText(phase) {
  const fields = [
    phase.title,
    phase.mission,
    phase.repo,
    phase.competencyQuestion,
    phase.priority,
    phase.status,
    phase.nextAction,
    ...(phase.tags || []),
    ...(phase.skills || []),
    ...(phase.requiredFiles || []),
    ...(phase.manualDrills || []),
    ...(phase.labs || []),
    ...(phase.breakAndFix || []),
    ...(phase.exitCriteria || []),
  ];
  return fields.join(" ").toLowerCase();
}

function filteredPhases() {
  const search = state.filters.search.trim().toLowerCase();
  return state.roadmap.phases.filter((phase) => {
    const matchesSearch = !search || phaseSearchText(phase).includes(search);
    const matchesStatus =
      state.filters.status === "all" || phase.status === state.filters.status;
    const matchesTag =
      state.filters.tag === "all" ||
      (phase.tags || []).includes(state.filters.tag);
    const matchesPriority =
      state.filters.priority === "all" ||
      phase.priority === state.filters.priority;
    return matchesSearch && matchesStatus && matchesTag && matchesPriority;
  });
}

function currentPhase() {
  return (
    state.roadmap.phases.find((phase) => phase.status === "in-progress") ||
    state.roadmap.phases.find((phase) => phase.status !== "completed") ||
    state.roadmap.phases[state.roadmap.phases.length - 1]
  );
}

function calculateSummary() {
  const phases = state.roadmap.phases;
  const total = phases.length;
  const completed = phases.filter(
    (phase) => phase.status === "completed" || phaseProgress(phase) === 100,
  ).length;
  const inProgress = phases.filter(
    (phase) => phase.status === "in-progress",
  ).length;
  const repos = phases.filter((phase) => phase.repo).length;
  const reposCompleted = phases.filter(
    (phase) =>
      phase.repo &&
      (phase.status === "completed" || phaseProgress(phase) === 100),
  ).length;
  const progress = Math.round(
    phases.reduce((sum, phase) => sum + phaseProgress(phase), 0) / total,
  );
  return { total, completed, inProgress, repos, reposCompleted, progress };
}

function populateFilters() {
  const phases = state.roadmap.phases;
  const statuses = unique(phases.map((phase) => phase.status));
  const tags = unique(phases.flatMap((phase) => phase.tags || []));
  const priorities = unique(phases.map((phase) => phase.priority));

  fillSelect(elements.statusFilter, statuses, formatStatus, "All statuses");
  fillSelect(elements.tagFilter, tags, (tag) => `[${tag}]`, "All tags");
  fillSelect(
    elements.priorityFilter,
    priorities,
    formatPriority,
    "All priorities",
  );
}

function fillSelect(select, values, labelFn, defaultLabel) {
  const current = select.value || "all";
  select.innerHTML = `<option value=\"all\">${defaultLabel}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labelFn(value);
    select.appendChild(option);
  });
  select.value = values.includes(current) ? current : "all";
}

function renderHeader() {
  const { roadmap } = state;
  elements.title.textContent =
    roadmap.title || "AI-Assisted DevSecOps V-Shape Roadmap";
  elements.description.textContent =
    roadmap.description ||
    "Backend-heavy. Cloud-delivered. Security-disciplined.";
  elements.coreDirection.textContent =
    roadmap.coreDirection?.primary || "Backend-heavy DevSecOps";
  elements.coreSubtitle.textContent = [
    roadmap.coreDirection?.cloud,
    roadmap.coreDirection?.security,
    roadmap.coreDirection?.ai,
  ]
    .filter(Boolean)
    .join(" ");
}

function renderProgress() {
  const summary = calculateSummary();
  elements.overallProgressLabel.textContent = `${summary.progress}%`;
  elements.overallProgressBar.style.width = `${summary.progress}%`;
  elements.summaryStats.innerHTML = "";

  const stats = [
    ["Phases", `${summary.completed}/${summary.total}`],
    ["In progress", summary.inProgress],
    ["Portfolio repos", `${summary.reposCompleted}/${summary.repos}`],
    ["Current", `Phase ${currentPhase()?.phase ?? "—"}`],
  ];

  stats.forEach(([label, value]) => {
    const stat = document.createElement("div");
    stat.className = "stat";
    stat.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    elements.summaryStats.appendChild(stat);
  });
}

function renderCurrentFocus() {
  const phase = currentPhase();
  if (!phase) return;
  elements.currentTitle.textContent = `Phase ${phase.phase}: ${phase.title}`;
  elements.currentMission.textContent = phase.mission || "";
  elements.currentNextAction.textContent =
    phase.nextAction || "Review exit criteria and select one manual drill.";
  elements.currentTags.innerHTML = "";
  (phase.tags || []).forEach((tag) =>
    elements.currentTags.appendChild(createTag(tag)),
  );
}

function renderLegend() {
  elements.tagLegend.innerHTML = "";
  (state.roadmap.tagLegend || []).forEach((tag) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <button type="button" data-tag="${escapeHtml(tag.id)}">
        <strong>[${escapeHtml(tag.label || tag.id)}]</strong>
        <p>${escapeHtml(tag.meaning || "")}</p>
        <p>${escapeHtml(tag.action || "")}</p>
      </button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.filters.tag = tag.id;
      elements.tagFilter.value = tag.id;
      render();
    });
    elements.tagLegend.appendChild(item);
  });
}

function renderPortfolioBoard() {
  elements.portfolioBoard.innerHTML = "";
  state.roadmap.phases
    .filter((phase) => phase.repo)
    .forEach((phase) => {
      const item = document.createElement("div");
      item.className = "repo-item";
      item.innerHTML = `
        <div class="repo-meta">
          <strong>${escapeHtml(phase.repo)}</strong>
          <span class="status-badge status-${escapeHtml(phase.status)}">${formatStatus(phase.status)}</span>
        </div>
        <p>Phase ${phase.phase}: ${escapeHtml(phase.title)}</p>
      `;
      elements.portfolioBoard.appendChild(item);
    });
}

function renderTimeline(phases) {
  elements.timeline.innerHTML = "";
  phases.forEach((phase) => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = `timeline-node status-${phase.status}`;
    node.innerHTML = `
      <small>Phase ${phase.phase}</small>
      <strong>${escapeHtml(phase.title)}</strong>
      <small>${phaseProgress(phase)}% · ${formatStatus(phase.status)}</small>
    `;
    node.addEventListener("click", () => {
      document
        .getElementById(phase.id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    elements.timeline.appendChild(node);
  });
}

function renderPhaseCards(phases) {
  elements.phaseList.innerHTML = "";
  elements.visibleCount.textContent = `${phases.length} phase${phases.length === 1 ? "" : "s"}`;

  if (phases.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No phases match the current filters.";
    elements.phaseList.appendChild(empty);
    return;
  }

  phases.forEach((phase) => {
    const card =
      elements.phaseTemplate.content.firstElementChild.cloneNode(true);
    card.id = phase.id;
    card.dataset.phase = phase.phase;
    card.querySelector(".phase-number").textContent = `Phase ${phase.phase}`;
    card.querySelector(".phase-title").textContent = phase.title;
    card.querySelector(".phase-mission").textContent = phase.mission || "";

    const meta = card.querySelector(".phase-meta");
    meta.appendChild(
      createPill(
        formatStatus(phase.status),
        `status-badge status-${phase.status}`,
      ),
    );
    meta.appendChild(
      createPill(
        formatPriority(phase.priority),
        `priority-badge priority-${phase.priority}`,
      ),
    );

    const tags = card.querySelector(".phase-tags");
    (phase.tags || []).forEach((tag) => tags.appendChild(createTag(tag)));

    const progress = phaseProgress(phase);
    card.querySelector(".progress-bar").style.width = `${progress}%`;
    card.querySelector(".phase-progress-label").textContent = `${progress}%`;

    const quickGrid = card.querySelector(".phase-quick-grid");
    quickGrid.innerHTML = `
      <div class="quick-box"><span>Output repo</span><strong>${escapeHtml(phase.repo || "No repo defined")}</strong></div>
      <div class="quick-box"><span>Competency question</span><strong>${escapeHtml(phase.competencyQuestion || "No question defined")}</strong></div>
      <div class="quick-box"><span>Next action</span><strong>${escapeHtml(phase.nextAction || "Select one exit criterion")}</strong></div>
      <div class="quick-box"><span>Dependencies</span><strong>${escapeHtml((phase.dependsOn || []).join(", ") || "None")}</strong></div>
    `;

    const details = card.querySelector(".phase-details");
    details.innerHTML = `
      <div class="detail-grid">
        ${detailBlock("Skills", phase.skills)}
        ${detailBlock("Required files / outputs", phase.requiredFiles)}
        ${detailBlock("Manual drills", phase.manualDrills)}
        ${detailBlock("Labs", phase.labs)}
        ${detailBlock("Break-and-fix", phase.breakAndFix)}
        ${detailBlock("Exit criteria", phase.exitCriteria)}
      </div>
    `;

    const toggle = card.querySelector(".details-toggle");
    toggle.addEventListener("click", () => {
      const isHidden = details.hidden;
      details.hidden = !isHidden;
      toggle.textContent = isHidden ? "Hide details" : "View details";
    });

    elements.phaseList.appendChild(card);
  });
}

function detailBlock(title, items) {
  return `
    <div class="detail-block">
      <h4>${escapeHtml(title)}</h4>
      ${listItems(items)}
    </div>
  `;
}

function render() {
  if (!state.roadmap) return;
  const phases = filteredPhases();
  renderHeader();
  renderProgress();
  renderCurrentFocus();
  renderLegend();
  renderPortfolioBoard();
  renderTimeline(phases);
  renderPhaseCards(phases);
}

function attachEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value;
    render();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    render();
  });

  elements.tagFilter.addEventListener("change", (event) => {
    state.filters.tag = event.target.value;
    render();
  });

  elements.priorityFilter.addEventListener("change", (event) => {
    state.filters.priority = event.target.value;
    render();
  });

  elements.resetFilters.addEventListener("click", () => {
    state.filters = { search: "", status: "all", tag: "all", priority: "all" };
    elements.searchInput.value = "";
    elements.statusFilter.value = "all";
    elements.tagFilter.value = "all";
    elements.priorityFilter.value = "all";
    render();
  });
}

async function loadRoadmap() {
  try {
    const response = await fetch("roadmap-data.json", { cache: "no-store" });
    if (!response.ok)
      throw new Error(`Failed to load roadmap-data.json: ${response.status}`);
    state.roadmap = await response.json();
    populateFilters();
    attachEvents();
    render();
  } catch (error) {
    document.querySelector("main").innerHTML = `
      <section class="panel error-card">
        <h2>Roadmap data could not be loaded.</h2>
        <p>${escapeHtml(error.message)}</p>
        <p>Run this site through a local server or deploy it to GitHub Pages/Vercel. Opening index.html directly with file:// may block JSON loading in some browsers.</p>
        <pre>python3 -m http.server 8080</pre>
      </section>
    `;
  }
}

loadRoadmap();
