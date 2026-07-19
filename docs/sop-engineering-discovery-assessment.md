# Standard Operating Procedure: Engineering Discovery & Assessment

**SOP ID:** SOP-EDA-001
**Version:** 1.0
**Owner:** Practice Lead — Engineering Strategy
**Last Updated:** 2026-07-19
**Classification:** Internal — Client-Facing

---

## 1. Purpose

This SOP defines the end-to-end process for delivering the Engineering Discovery & Assessment service. It ensures consistent, high-quality outcomes across all engagements, from initial inquiry through roadmap delivery and optional implementation.

---

## 2. Scope

This procedure covers all Engineering Discovery & Assessment engagements, including:

- Full-scope assessments (all 33 capability areas)
- Focused assessments (client-selected domains)
- Follow-up validation assessments
- All engagement sizes (SMB to enterprise)

---

## 3. Definitions & Acronyms

| Term | Definition |
|------|------------|
| Maturity Framework | 5-level model: Reactive → Standardized → Automated → Platform Driven → AI-Native Enterprise |
| Capability Area | One of 33 assessed dimensions (e.g., Cloud Architecture, DevOps, Security) |
| Domain | Grouping of capability areas: Architecture, Engineering, Operations, Security, Data, Business |
| Practice Lead | Senior engineer leading the assessment engagement |
| Output Package | Complete set of deliverables delivered to the client |

---

## 4. Roles & Responsibilities

| Role | Responsibility |
|------|---------------|
| **Practice Lead** | End-to-end engagement ownership; client communication; final deliverable sign-off |
| **Engineering Assessor** | Technical discovery, artifact review, stakeholder interviews, scoring |
| **Engagement Manager** | Scheduling, logistics, timeline tracking, billing |
| **Executive Sponsor** | Internal escalation, strategic guidance, presentation at Executive Review |
| **Technical Writer** | Deliverable authoring, report production, diagram creation |

---

## 5. Engagement Phases

### Phase 1: Kickoff (Days 1–3)

**Activities:**

1. **Client onboarding call** — Scope confirmation, stakeholder identification, timeline alignment
2. **Access provisioning** — Grant assessors access to:
   - Source control repositories
   - Cloud provider consoles (read-only)
   - CI/CD systems
   - Incident management tools
   - Architecture documentation
   - Compliance/audit reports
3. **Data request** — Send standardized artifact checklist:
   - Architecture diagrams (current-state)
   - Cloud billing/cost data (last 3 months)
   - Incident post-mortems (last 6 months)
   - Runbooks and operational documentation
   - Engineering headcount and team structure
   - Current OKRs/engineering goals
4. **Survey distribution** — Deploy pre-engagement stakeholder survey (CTO, VP Eng, Directors, Architects)

**Output:** Signed-off scope document, completed access matrix, survey responses collected

---

### Phase 2: Discovery (Days 4–10)

**Activities:**

1. **Stakeholder interviews** — Conduct 45-minute sessions with:
   - CTO / VP Engineering (strategic alignment)
   - Engineering Directors (operational concerns)
   - Enterprise Architects (technical landscape)
   - Platform Team Lead (platform maturity)
   - Security Lead (risk posture)
   - Data Lead (data architecture)
   - 2–3 Individual Contributors (ground-truth)

2. **Artifact review** — Analyze collected documentation:
   - Codebase analysis (repo structure, branch strategy, PR cycle time)
   - Cloud architecture review (resource topology, cost anomalies)
   - CI/CD pipeline assessment (deployment frequency, failure rate)
   - Incident management review (MTTR, MTBF, post-mortem quality)
   - Security posture review (vulnerability management, compliance gaps)

3. **Tool-based assessment** — Run standardized analysis:
   - Cloud cost analyzer (tagging coverage, idle resources, reserved instance coverage)
   - Dependency graph analysis (library freshness, license compliance)
   - Infrastructure-as-Code review (module quality, drift detection, secrets management)
   - Performance benchmarking (page load, API latency, database query patterns)

**Output:** Raw findings database, interview transcripts, tool outputs

---

### Phase 3: Assessment (Days 11–18)

**Activities:**

1. **Capability scoring** — Rate each of 33 capability areas 1–5 using the Maturity Framework:

   | Level | Label | Characteristics |
   |-------|-------|----------------|
   | 1 | Reactive | Manual, undocumented, inconsistent, incident-driven |
   | 2 | Standardized | Defined processes, baseline tooling, partial documentation |
   | 3 | Automated | Pipeline-driven, monitored, repeatable, measured |
   | 4 | Platform Driven | Self-service platforms, product-oriented teams, data-informed |
   | 5 | AI-Native Enterprise | AI-augmented workflows, autonomous operations, predictive optimization |

2. **Domain aggregation** — Calculate weighted averages for:
   - Architecture
   - Engineering
   - Operations
   - Security
   - Data
   - Business

3. **Risk register compilation** — Identify findings by severity:
   - **Critical** — Immediate business risk (security vulnerabilities, single points of failure)
   - **High** — Significant operational impact (performance degradation, compliance gaps)
   - **Medium** — Efficiency improvement (manual processes, cost optimization)
   - **Low** — Nice-to-have (tooling upgrades, documentation gaps)

4. **SWOT analysis** — Complete internal Strengths/Weaknesses + external Opportunities/Threats matrix

**Output:** Maturity scores (overall + per domain), risk register, SWOT matrix

---

### Phase 4: Analysis (Days 19–23)

**Activities:**

1. **Root cause analysis** — Group findings into thematic root causes:
   - Inadequate architecture governance
   - Insufficient observability
   - Skills gaps in critical areas
   - Tool fragmentation
   - Missing platform strategy

2. **Quick win identification** — Effort/impact matrix:
   - High impact, low effort → Quick wins (0–3 months)
   - High impact, high effort → Strategic initiatives (6–18 months)
   - Low impact, low effort → Fill-ins (as capacity allows)
   - Low impact, high effort → Deprioritize

3. **Recommendation development** — For each finding, produce:
   - Recommendation description
   - Rationale (evidence-based)
   - Effort estimate (person-weeks)
   - Cost estimate (tooling/infrastructure)
   - Risk reduction impact
   - Dependencies and prerequisites

4. **Roadmap construction** — Sequence recommendations into:
   - Phase 1: Quick Wins (0–3 months)
   - Phase 2: Foundation (3–6 months)
   - Phase 3: Transformation (6–12 months)
   - Phase 4: Optimization (12–18 months)

**Output:** Draft recommendations, effort/cost estimates, phased roadmap

---

### Phase 5: Recommendations & Deliverable Production (Days 24–30)

**Deliverable Creation:**

| #  | Deliverable | Owner | Format | Pages |
|----|-------------|-------|--------|-------|
| 01 | Executive Summary | Practice Lead | PDF/Slides | 4–6 |
| 02 | Technology Landscape Assessment | Engineering Assessor | PDF | 10–15 |
| 03 | Architecture Review | Engineering Assessor | PDF + Diagrams | 15–20 |
| 04 | Engineering Maturity Score | Practice Lead | PDF + Interactive | 2–4 |
| 05 | Capability Maturity Matrix | Practice Lead | PDF + Interactive | 4–6 |
| 06 | SWOT Analysis | Practice Lead | PDF | 2 |
| 07 | Technical Debt Report | Engineering Assessor | PDF | 8–12 |
| 08 | Cloud Assessment | Engineering Assessor | PDF | 8–12 |
| 09 | Security Findings | Engineering Assessor | PDF | 6–10 |
| 10 | Operational Findings | Engineering Assessor | PDF | 6–10 |
| 11 | Risk Register | Engineering Assessor | PDF/Spreadsheet | 4–8 |
| 12 | Quick Wins | Practice Lead | PDF | 2–4 |
| 13 | Medium-Term Recommendations | Practice Lead | PDF | 4–6 |
| 14 | Long-Term Strategy | Practice Lead | PDF | 4–6 |
| 15 | Prioritized Roadmap | Practice Lead | PDF + Timeline | 2–4 |
| 16 | Investment Recommendations | Practice Lead | Spreadsheet | 2–4 |
| 17 | Implementation Phases | Practice Lead | PDF | 4–6 |
| 18 | Architecture Diagrams | Technical Writer | Diagrams (Draw.io) | 5–15 |
| 19 | Executive Presentation | Practice Lead | Slides (Google Slides) | 20–30 |

**Quality Checklist (every deliverable):**
- [ ] Reviewed by Practice Lead
- [ ] Findings are evidence-based with supporting artifacts
- [ ] Recommendations are specific, actionable, and prioritized
- [ ] All technical terms are defined or glossaried
- [ ] Executive summary is readable by non-technical stakeholders
- [ ] Client branding applied
- [ ] Substrate branding in appendix only

**Output:** Complete deliverable package (PDF + interactive assets)

---

### Phase 6: Executive Review (Day 31–35)

**Activities:**

1. **Pre-read distribution** — Send Executive Summary + Executive Presentation to client 48 hours before review meeting
2. **Executive Review session** — 90-minute session with client leadership:
   - Presentation of key findings (15 min)
   - Maturity score walkthrough (10 min)
   - Risk register highlights (10 min)
   - Roadmap and investment recommendations (20 min)
   - Q&A and discussion (35 min)
3. **Feedback collection** — Capture adjustments, priorities, and sensitivities

**Output:** Signed-off findings and recommendations (or revision requests with 2-week turnaround)

---

### Phase 7: Roadmap Delivery (Day 36–40)

**Activities:**

1. **Final revision** — Incorporate executive feedback into all deliverables
2. **Knowledge transfer session** — 2-hour session with client engineering leadership:
   - How to use the maturity model for ongoing self-assessment
   - Recommended metrics to track progress
   - Implementation approach for quick wins
3. **Deliverable handover** — Final package delivered via:
   - Secure file share (preferred)
   - Email with encrypted attachment (alternative)
   - Physical copy (on request)

**Output:** Final deliverable package, knowledge transfer recording

---

### Phase 8: Optional Implementation (Ongoing)

**Trigger:** Client requests Substrate implementation support for roadmap recommendations

**Activities:**

1. **Implementation kickoff** — Separate SOW and timeline
2. **Quick win execution** — Substrate team implement 0–3 month items
3. **Platform engineering** — Build or enhance internal platforms
4. **Team coaching** — Upskill client teams on new processes and tools
5. **Progress tracking** — Monthly maturity reassessment and roadmap adjustment

**Output:** Implementation SOW, monthly progress reports

---

### Phase 9: Continuous Advisory (Ongoing)

**Trigger:** Client retains Substrate for ongoing advisory

**Activities:**

1. **Quarterly check-in** — Maturity reassessment (targeted), roadmap adjustment
2. **Quarterly advisory session** — Technology landscape update, emerging risks
3. **Annual full reassessment** — Complete reassessment across all 33 capability areas

**Output:** Quarterly advisory reports, annual reassessment

---

## 6. Maturity Framework — Scoring Guidelines

| Score | Label | Scoring Criteria |
|-------|-------|------------------|
| 1 | Reactive | Process is ad-hoc, undocumented, and depends on heroic individual effort. Failures cause incidents. No measurement. |
| 2 | Standardized | Process is documented and repeatable. Basic tooling in place. Some monitoring. Manual handoffs remain. |
| 3 | Automated | Process is automated and pipeline-driven. Self-service for basic operations. Measured with defined SLIs/SLOs. |
| 4 | Platform Driven | Internal platform with self-service capabilities. Teams are product-oriented. Decisions are data-informed. |
| 5 | AI-Native Enterprise | AI/ML augments workflows. Operations are autonomous where possible. Predictive optimization. Continuous improvement is embedded. |

**Scoring Rules:**
- Score must be justified by at least one artifact or interview finding
- Partial scores (e.g., 2.5) are permitted but require explicit rationale
- If insufficient data exists, score as 1 and flag as "insufficient data — defaulted to Reactive"
- A score of 5 requires evidence of production AI/ML integration for the capability area

---

## 7. Capability Domain Mapping

| Domain | Capabilities |
|--------|-------------|
| **Architecture** | Enterprise Architecture, Technology Landscape, Application Portfolio, Cloud Architecture, API Landscape, Integration, Networking |
| **Engineering** | Platform Engineering, DevOps, Developer Experience, Performance, Automation, Engineering Team Maturity, Technical Debt |
| **Operations** | Site Reliability Engineering, Observability, Operational Processes, Disaster Recovery, Business Continuity, Cloud Cost Optimization, Knowledge Management |
| **Security** | Security, Compliance, Identity & Access |
| **Data** | Data Platforms, Data Quality, Analytics, AI Readiness |
| **Business** | Business Strategy Alignment, Governance, Documentation, Vendor Dependencies |

---

## 8. Engagement Model — Standard Timeline

| Phase | Duration | Week |
|-------|----------|------|
| Kickoff | 3 days | 1 |
| Discovery | 7 days | 1–2 |
| Assessment | 8 days | 2–3 |
| Analysis | 5 days | 3–4 |
| Recommendations & Deliverables | 7 days | 4–5 |
| Executive Review | 5 days | 5 |
| Roadmap Delivery | 5 days | 6 |

**Total: 40 business days (8 weeks)**

**Accelerated Timeline** (available for focused assessments, 2–3 domains only):
- Total: 20 business days (4 weeks)
- Discovery reduced to 3 days, Assessment to 4 days, Analysis to 2 days

---

## 9. Quality Standards

### 9.1 Deliverable Quality
- All executive-facing deliverables must pass a readability review (Flesch-Kincaid Grade Level ≤ 10)
- All technical deliverables must include a glossary of terms
- Architecture diagrams must follow C4 model conventions
- Recommendations must include estimated effort, cost, and risk reduction impact

### 9.2 Evidence Requirements
- Every finding in the risk register must be linked to at least one artifact or interview
- Maturity scores below 3 must have specific, actionable recommendations
- Claims about industry benchmarks must cite the source

### 9.3 Ethical Standards
- Assessments are vendor-neutral; no product endorsements
- Findings are presented objectively, regardless of discovery source
- Client data is confidential and never reused across engagements
- Team composition is transparent — clients know who performs the assessment

---

## 10. Templates & Tools

| Template/Tool | Location |
|---------------|----------|
| Stakeholder interview guide | `templates/interview-guide.md` |
| Artifact checklist | `templates/artifact-checklist.md` |
| Scoring worksheet | `templates/scoring-worksheet.csv` |
| Deliverable templates | `templates/deliverables/` |
| Cloud cost analyzer | Substrate internal tools |
| Dependency graph tool | Substrate internal tools |
| Client survey | `templates/survey.md` |
| Engagement SOW template | `templates/engagement-sow.md` |

---

## 11. Handoff Procedures

### 11.1 Sales → Delivery Handoff
- Completed SOW signed by client
- Background research package (company, industry, known challenges)
- Sales call recordings and notes
- Key stakeholder contact information
- Any pre-existing relationships or context

### 11.2 Delivery → Implementation Handoff
- All deliverables in final signed-off state
- Risk register with implementation ownership recommendations
- Architecture diagrams in editable format
- Documentation of quick wins ready for immediate execution
- Client preferences and communication style notes

---

## 12. Key Contacts

| Role | Responsible | Backup |
|------|-------------|--------|
| Practice Lead, Engineering Strategy | TBD | TBD |
| Engagement Management | TBD | TBD |
| Technical Writing | TBD | TBD |
| Executive Sponsor | TBD | TBD |

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-07-19 | System | Initial SOP based on Engineering Discovery & Assessment content data |
