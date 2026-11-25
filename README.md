# THE CAMEL — Sovereign Command Center

**Master project blueprint and development README**  
**Project version:** 1.0 (consolidated)  
**Project status:** Design and prototype stage  
**Deployment:** Not authorized  
**Live activation:** Not authorized

> **Guiding principle:** THE CAMEL does the work. The owner remains in command.  
> **Design philosophy:** Simple on the surface. Intelligent underneath.

---

## 1. Project overview

THE CAMEL is a planned Bitcoin-rewards and earning administration platform. It is intended to help its owner discover legitimate earning opportunities, organize rewards, monitor activity, and manage approved operations through one central governing intelligence.

The system has **one Sovereign Intelligence**—THE CAMEL—and **three specialist bots**. The owner has final authority over permissions, financial actions, integrations, constitutional changes, and deployment.

The project has two connected applications:

1. **THE CAMEL** — the simple, public-facing rewards and activity application.
2. **THE CAMEL Moderator — God Mode** — a separate, private owner-only command and oversight application.

The public application must not expose the private Moderator or its owner-only controls.

This repository is the single source of truth for the project specification as it develops. Earlier notes and visual previews are consolidated into this blueprint rather than treated as separate competing plans.

## 2. Core architecture

```text
OWNER
  |
  +--> THE CAMEL MODERATOR (private owner-only control app)
          |
          v
     THE CAMEL — SOVEREIGN INTELLIGENCE
          |
          +--> DUNE — ZBD Gaming & Referrals
          |
          +--> SIROCCO — Independent Earning Research & Kalshi Intelligence
          |
          +--> OASIS — Bitcoin Rewards Treasury & Payout Administration
```

### Sovereign Intelligence — THE CAMEL

THE CAMEL is the only governing agent. It:

- Coordinates and delegates work to the specialist bots.
- Enforces the Constitution and approved permissions.
- Monitors performance, safety, and security.
- Researches legitimate earning opportunities.
- Reviews specialist reports and recommends improvements.
- Requests owner approval for significant changes or expanded authority.
- Sends alerts and understandable reports.
- Pauses affected activity when serious danger is detected.

No specialist may override THE CAMEL, the Constitution, or the owner's permissions. The owner remains the ultimate authority.

### Specialist 1 — DUNE: ZBD Gaming & Referrals

DUNE is responsible for the primary planned earning path:

- Identify eligible games through ZBD or authorized ZBD integrations.
- Track each game's rewards and provider limits separately.
- Track ZBD referrals and eligible game-sharing opportunities.
- Monitor reward eligibility and supported cash-out information.
- Research additional eligible games.
- Maintain an auditable record of activity and rewards.
- Recommend opportunities using factual, current eligibility information.

**Compliance boundary:** DUNE must not bypass provider rules, exploit reward systems, or automate gameplay in a way prohibited by ZBD or a game publisher. Any gameplay automation is conditional on explicit technical support and provider permission.

A historical design target mentioned up to **500 satoshis per game per day**. This is not an established ZBD-wide rule. Verify each game's actual current terms and limits before implementation; never hard-code the target as a guaranteed allowance.

### Specialist 2 — SIROCCO: Independent Earning & Kalshi Intelligence

SIROCCO researches opportunities beyond the primary ZBD path:

- Research legitimate independent earning opportunities and approved integrations.
- Evaluate advertising and referral programs, costs, eligibility, and risks.
- Track independently verified rewards.
- Prepare research and performance reports.
- Research Kalshi markets, evidence, fees, risks, and historical outcomes.
- Present potential trades for owner review when the optional Kalshi integration is approved.

**Kalshi is optional and financially separate.** It is not a third Bitcoin earning hump. Kalshi research may be prepared independently, but every live trade requires explicit owner approval. Kalshi bankroll, positions, gains, and losses must never be mixed with the Bitcoin rewards Treasury.

A proposed advertising target of **70 satoshis per three qualifying ad views** is only a design hypothesis, not a promised or guaranteed payout. Any implementation must be based on actual program terms, verified qualifying views, sustainable revenue, fraud controls, and transparent accounting. Ads must never appear on the main dashboard or interrupt core workflows.

### Specialist 3 — OASIS: Bitcoin Rewards Treasury & Payout Administration

OASIS organizes verified rewards and supported payout workflows:

- Track rewards by source and preserve their attribution.
- Show pending, eligible, available, and withdrawable balances separately.
- Maintain a combined Bitcoin rewards overview without double-counting.
- Track individual games, referrals, and earning sources.
- Display and validate supported Lightning Address details.
- Explain payment-network minimums, fees, and restrictions.
- Prepare payout details and require owner confirmation before every withdrawal.
- Maintain permanent transaction and payout history.

**Financial boundaries:**

- THE CAMEL is not a user-funded deposit account and must not accept user deposits.
- Prefer non-custodial designs where practical.
- The custody and settlement model must be decided and reviewed before any live financial integration.
- No automatic transfers or withdrawals.
- Cash App is only a possible destination if an official, verified supported route exists. Never promise or simulate unsupported payouts.
- Never misrepresent pending rewards as available funds.

## 3. The two Bitcoin earning humps

The visual identity uses a recognizable camel with two illuminated humps:

| Hump | Meaning | Examples |
|---|---|---|
| First hump | ZBD rewards | Eligible ZBD games, ZBD referrals, approved platform activities |
| Second hump | THE CAMEL earnings | Approved independent earning, eligible advertising, additional approved opportunities |

Both feed a combined rewards overview, while every reward remains traceable to its original source.

**Kalshi is separate** and is not represented as a third hump or included in the Bitcoin rewards total.

Bitcoin accounting must support satoshis accurately. **1 BTC = 100,000,000 satoshis.** Small rewards, including one-satoshi amounts, must not be rounded away or hidden.

## 4. Application One — THE CAMEL

The public-facing application should feel calm, friendly, and easy to understand, even for a person with no technical background.

### Main dashboard

- Total verified Bitcoin rewards, shown in sats.
- Separate ZBD and THE CAMEL earning-hump totals.
- Pending, eligible, available, and withdrawable balances.
- Kalshi activity shown separately when enabled.
- Daily activity summary.
- Agent/system status indicators.
- Important notifications and approvals.
- Clear pause controls.
- Access to the friendly CAMEL Assistant.

### Main sections

1. **Home / Dashboard** — combined overview and two earning humps.
2. **Activity** — understandable history of commands, rewards, and operations.
3. **Earning paths** — ZBD and approved independent earning information.
4. **Referrals** — one combined dashboard for eligible ZBD and THE CAMEL referrals, with attribution and payout status.
5. **Treasury** — balances, source breakdown, payout information, and transaction history.
6. **Kalshi** — optional separate research and approval page, with separate accounting.
7. **Notifications** — live alerts and daily summaries.
8. **Help / Assistant** — friendly explanations and guided walkthroughs.
9. **Settings & permissions** — user-visible connections and permissions.
10. **Safety** — pause status and plain-language safety information.

### User experience

- Permanent dark/black theme.
- Camel identity with two visually distinct humps.
- Plain language; technical complexity stays behind the scenes unless requested.
- Guided first-use walkthroughs for every major workflow.
- Tutorials remain available after onboarding.
- Users can pause earning activity; essential security monitoring may remain active.
- Ads do not appear on the main dashboard.

## 5. Application Two — THE CAMEL Moderator: God Mode

The Moderator is a separate private application for the owner. It is a control interface—not another sovereign bot.

It should provide:

- Direct communication with THE CAMEL.
- Inspection of DUNE, SIROCCO, and OASIS.
- Individual and system-wide pause/resume requests.
- Earnings, expenses, losses, and activity review.
- Approval or rejection of proposed upgrades.
- Permission and integration management.
- Security alerts and audit history.
- Daily reports and quarterly research reviews.
- Financial-action review and explicit confirmation.
- Emergency shutdown controls.
- Review of annual improvement proposals.
- Owner feedback and improvement suggestions.

**God Mode means full visibility and authorized control, not unrestricted automatic financial authority.** It must use stronger owner-only authentication and access controls than the public application. Constitutional amendments, new integrations, significant upgrades, changes to financial permissions, and changes to risk limits require explicit owner approval.

## 6. Constitution: non-negotiable operating rules

1. The owner has ultimate authority.
2. THE CAMEL is the single sovereign governing intelligence.
3. Specialist bots cannot override the sovereign agent, Constitution, or owner permissions.
4. Autonomy is limited to explicitly approved boundaries.
5. No self-amendment of the Constitution.
6. No silent expansion of permissions or financial authority.
7. No unapproved integrations or upgrades.
8. No live Kalshi trades without explicit owner approval.
9. No withdrawals or transfers without explicit owner confirmation.
10. No mixing Kalshi funds with Bitcoin rewards.
11. No unsupported payout claims.
12. No rule-breaking gameplay automation, ad fraud, reward manipulation, or platform abuse.
13. No live deployment or activation without explicit owner authorization.
14. A prototype must never be described as a connected or functioning earning system.
15. Every important action, approval, denial, pause, and financial record must be auditable.

## 7. Security, privacy, and safety

Security must be designed in from the beginning. Planned safeguards include:

- Strong authentication and two-factor protection.
- Passkeys or biometrics where supported.
- Separate user accounts and user-specific cryptographic keys.
- Encryption in transit and at rest.
- Hardware-backed key protection where available.
- Least-privilege permissions.
- Secure account recovery and key rotation/revocation.
- Encrypted backups.
- Network protections and security monitoring.
- Tamper-evident, append-only audit history.
- Secure software updates.
- Independent emergency shutdown protection.

A separate permissioned blockchain is not automatically required. Start by evaluating a tamper-evident append-only audit ledger; only add a blockchain if a demonstrated trust or validation requirement justifies it. No security technology can promise absolute immunity from compromise. The goal is defense in depth, detection, containment, and recovery.

### The CAMEL Signal

When an agent encounters pressure, suspicious activity, a failure, or a decision requiring attention, it should send a clear signal explaining:

- What happened.
- Why it matters.
- Which agent or workflow is affected.
- What action is recommended.
- Whether owner approval or intervention is required.

Provide accessible review and pause controls. Any release from a safety hold must follow the approved authorization process.

### Loss and incident handling

A prior design target proposed a maximum of two losses per specialist per day. Treat this as an **unfinalized risk-policy proposal**, not an automatic universal rule. Before implementation, define what counts as a loss, the measurement period, the applicable activity, and the response. Distinguish financial losses from technical errors, rejected transactions, and interruptions.

Serious security or financial danger may trigger an immediate pause without waiting for a loss threshold. A separate emergency-stop mechanism must remain available if the sovereign service malfunctions.

## 8. Records, alerts, and reporting

Maintain an auditable history of:

- Owner commands and agent actions.
- Approvals, denials, and permission changes.
- Integrations and configuration changes.
- Earnings, source attribution, expenses, and losses.
- Game and referral activity.
- Payout requests and completed transactions.
- Pauses, shutdowns, incidents, and recoveries.
- Research recommendations and their later outcomes.

Communication levels:

- **Live alerts:** important transactions, security concerns, agent failures, approval requests, and significant opportunities.
- **Daily summaries:** earnings, expenses, agent performance, completed operations, and pending items.
- **Quarterly reviews:** research, new opportunities, technology, user feedback, security, and performance.
- **Annual proposal:** at least one consolidated improvement plan for owner review.

The system may research and test ideas in isolated environments, but significant changes and live adoption require owner approval.

## 9. Development roadmap

Build in small, verifiable stages. Do not connect money or automate external activity while the project is still a prototype.

### Phase 1 — Project foundation
- Create the GitHub repository.
- Add this consolidated README as the authoritative blueprint.
- Organize source code, documentation, and prototypes.
- Record decisions and changes in version history.

### Phase 2 — Public app prototype
- Build the dark-theme mobile-first dashboard.
- Add the two earning humps and clearly labeled simulated balances.
- Add navigation, activity history, assistant mockup, and pause-state demonstration.
- Label every unconnected feature as demo or prototype.

### Phase 3 — Private Moderator prototype
- Build owner-only interface screens for overview, team, reports, safety, and improvements.
- Demonstrate approvals and pause controls without connecting live services.
- Plan and review the authentication boundary before implementing access.

### Phase 4 — Sovereign and specialist service design
- Define agent responsibilities, messages, permissions, and audit events.
- Implement the central policy/permission layer before specialist capabilities.
- Keep DUNE, SIROCCO, and OASIS isolated by role and permission.

### Phase 5 — Reward records and Treasury foundation
- Implement accurate satoshi accounting and source attribution.
- Separate pending, eligible, available, and withdrawable states.
- Add transaction history and payout review flows using test data only.
- Finalize custody and settlement architecture before live funds are considered.

### Phase 6 — Integrations and research
- Review official ZBD integration options and terms before connecting DUNE.
- Add independent earning research only after provider and legal terms are reviewed.
- Keep Kalshi optional, separate, and research-only until separately authorized.
- Verify every payout route and fee before describing it as supported.

### Phase 7 — Security and controlled testing
- Test authentication, permissions, audit records, recovery, and emergency shutdown.
- Test loss/incident policies with simulated scenarios.
- Conduct security review and verify backups.
- Run end-to-end simulations with no real funds or live gameplay.

### Phase 8 — Owner-authorized trial
- Prepare a written readiness review.
- Confirm provider permissions, security, financial controls, and rollback plan.
- Obtain explicit owner authorization before any live trial or deployment.
- Expand only in small, measured steps.

## 10. Prototype status and design direction

The supplied foundation prototype, friendly preview, and Moderator God Mode preview are **visual/interaction demonstrations**. They show design concepts such as:

- Dark mobile-first interface and camel identity.
- Rewards dashboard and two earning paths.
- Activity history and friendly assistant.
- Sovereign core and specialist team presentation.
- Moderator overview, team, reports, safety controls, and improvement suggestions.

They do **not** establish that ZBD, Kalshi, wallets, payment services, real AI agents, or earning automation are connected. Their sample balances and actions are illustrative only.

The consolidated direction is to retain the approachable public-facing design of the friendly preview, the dashboard and specialist overview of the foundation prototype, and the owner controls of the Moderator preview—under the single architecture and rules in this README.

## 11. Suggested repository organization

As the project grows, use a clear structure such as:

```text
the-camel-command-center/
├── README.md                  # This master blueprint
├── docs/
│   ├── constitution.md        # Detailed operating constitution
│   ├── architecture.md        # System and agent architecture
│   ├── security.md            # Security and threat model
│   ├── decisions.md           # Decision log and unresolved questions
│   └── roadmap.md             # Development milestones
├── apps/
│   ├── camel-public/          # Public-facing application
│   └── camel-moderator/       # Private owner control application
├── services/
│   ├── sovereign-core/        # Central governance and permissions
│   ├── dune-zbd/              # ZBD and referral specialist
│   ├── sirocco-research/      # Independent research and Kalshi
│   └── oasis-treasury/        # Reward accounting and payout workflows
├── shared/
│   ├── models/                # Shared data definitions
│   └── ui/                    # Reusable interface elements
├── tests/
│   ├── simulations/
│   └── security/
└── .github/
    └── workflows/             # Automated checks, when configured
```

This is a planned structure, not a claim that these folders or services already exist. Add folders as their corresponding phase begins.

## 12. Open decisions before live implementation

These items must be resolved and documented before the related live capability is built:

- Final technology stack and hosting.
- Authentication provider and owner-only Moderator access model.
- ZBD's currently supported API/integration capabilities and game rules.
- Whether any gameplay automation is permitted and technically possible.
- Custody, settlement, and non-custodial payout architecture.
- Exact supported payout destinations, minimums, and fees.
- Advertising partner terms and sustainable reward economics.
- Kalshi integration scope, data access, and trading authorization workflow.
- Formal definition of a loss and the proposed two-loss safety policy.
- Emergency-stop design and recovery procedure.
- Privacy, data retention, and applicable legal/compliance review.

Do not silently turn a target, idea, or historical assumption into a guaranteed feature.

## 13. Change control and project continuity

- Keep this README as the consolidated project blueprint until a deliberate versioned update replaces it.
- Record important decisions, open questions, and changes in `docs/decisions.md` when that file is created.
- Preserve approved requirements when revising the design.
- Explain technical choices in beginner-friendly language.
- Make changes in small steps and test each step.
- Do not discard earlier decisions without recording why they changed.
- Do not deploy, activate, trade, transfer funds, or begin live earning operations without explicit owner authorization.

---

**PROJECT:** THE CAMEL — Sovereign Command Center  
**GUIDING PHILOSOPHY:** Stubborn in its values. Flexible in its approach. Autonomous only within approved authority.  
**FINAL AUTHORITY:** The owner.
