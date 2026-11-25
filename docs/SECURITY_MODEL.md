
# THE CAMEL — Security Model

Version: 1.0  
Status: Development specification  
Authority: Project Owner

## 1. Security Mission

Protect THE CAMEL, its owner, its users, its accounts, and its Bitcoin rewards operations.

Security takes priority over convenience and automation.

## 2. Owner Authority

The project owner retains final authority over:
- System configuration.
- Bot permissions.
- Account connections.
- Treasury policies.
- Financial approvals.
- Emergency shutdown.
- Deployment and upgrades.

No specialist bot may override owner instructions.

## 3. Authentication

Before Moderator God Mode is deployed:
- Require secure owner authentication.
- Use a trusted authentication provider.
- Require multi-factor authentication where available.
- Use secure, protected sessions.
- Deny access when authentication fails.
- Never rely on a hidden URL as security.

## 4. Public and Private Separation

Public application:
- Displays approved public information.
- Does not expose private account data.
- Does not contain secret credentials.
- Cannot access private Moderator functions.

Private Moderator:
- Requires authenticated owner access.
- Controls approved system settings.
- Displays sensitive operational information only to authorized users.
- Records important administrative actions.

A public GitHub repository does not provide private access control for individual files.

## 5. API Keys and Credentials

- Never place API keys in HTML, JavaScript, or public documentation.
- Store secrets in protected server-side environment variables or a secrets manager.
- Never commit passwords, recovery phrases, private keys, or wallet seed phrases.
- Rotate credentials immediately if exposed.
- Use the minimum permissions required for each integration.

## 6. Specialist Bot Permissions

### DUNE
Purpose: ZBD gaming and referral operations.

Permission limits:
- Research and track approved earning activity.
- Never independently withdraw or transfer funds.
- Never change account security settings.

### SIROCCO
Purpose: Independent earning research.

Permission limits:
- Research and compare opportunities.
- Clearly identify risks and unverified claims.
- Keep optional Kalshi intelligence separate from Bitcoin accounting.
- Never independently execute financial transactions.

### OASIS
Purpose: Bitcoin rewards Treasury administration.

Permission limits:
- Track approved rewards and balances.
- Prepare payout records for owner review.
- Never independently authorize withdrawals or transfers.

## 7. Financial Approval

The following always require explicit owner approval:
- Withdrawals.
- Transfers.
- Trades.
- Wallet changes.
- Payment destination changes.
- New financial integrations.
- Changes to payout rules.

No bot may approve its own financial actions.

## 8. Audit History

Record:
- Successful and failed login attempts.
- Owner configuration changes.
- Bot permission changes.
- Integration activity.
- Proposed financial actions.
- Approved and rejected requests.
- Emergency pause events.

Do not store passwords, private keys, or recovery phrases in audit logs.

## 9. Emergency Response

If a security incident is suspected:
1. Stop affected automation.
2. Revoke compromised credentials.
3. Protect connected accounts.
4. Preserve relevant audit records.
5. Notify the owner.
6. Require owner approval before restoring operations.

Emergency controls must be implemented and tested before being represented as functional.

## 10. Development and Deployment Rules

- Review changes before deployment.
- Test authentication and permissions.
- Keep development and production credentials separate.
- Protect sensitive configuration.
- Do not activate financial integrations without explicit owner authorization.
- Never describe a prototype as a live system.

## 11. Security Acceptance Checklist

- [ ] Owner authentication implemented.
- [ ] Multi-factor authentication configured where available.
- [ ] Public and private access separated.
- [ ] Secrets stored securely.
- [ ] Bot permissions enforced server-side.
- [ ] Financial approval workflow tested.
- [ ] Audit logging implemented.
- [ ] Emergency shutdown tested.
- [ ] Security review completed.

**THE CAMEL SECURITY PRINCIPLE: Owner authority first. Least privilege always. No unauthorized financial action.**
