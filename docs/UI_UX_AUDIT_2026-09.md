# SafePath CSP — Whole-site UI/UX audit

Date: 2026-09-05

## Research basis

This review synthesizes published guidance from Nielsen Norman Group (NN/G), Baymard Institute, and W3C WCAG 2.2. It is not a claim that those organizations audited SafePath directly.

- NN/G usability heuristics: visibility of system status, match to the real world, user control, consistency and standards, error prevention, recognition rather than recall, flexibility, minimalist design, error recovery, and help/documentation.
- NN/G card guidance: cards should group related information, provide strong information scent, clearly communicate clickability, and avoid card-heavy layouts when users need rapid comparison.
- NN/G complex-application guidance: promote learning by doing, support flexible workflows, help users track actions/thought processes, coordinate tools, reduce clutter, and make important information salient.
- Baymard navigation guidance: users need clear hierarchy, manageable chunks, explicit current scope, and clearly styled clickable elements.
- W3C WCAG 2.2: keyboard focus must remain visible and not be obscured; focus appearance needs sufficient size/contrast.

## Whole-site findings

### P0 — Must be consistent everywhere
1. Establish one button hierarchy: primary, secondary/outline, ghost, destructive.
2. Establish one card pattern: predictable padding, title placement, metadata placement, hover/focus behavior, and click affordance.
3. Make current location obvious in desktop and mobile navigation.
4. Keep terminology literal and task-oriented. Avoid labels whose destination does not match the label.
5. Keep important actions visible without making every element equally prominent.

### P1 — Study/product experience
1. Make the learner's next action obvious on Study and Dashboard.
2. Separate Assess, Learn, Practice, Review, Simulate, and Readiness conceptually.
3. Surface progress and completion state near the action it controls.
4. Keep Study Plan discoverable from Study and show whether a plan exists.
5. Make flags/review focus easy to return to.
6. Preserve lesson reading width and add strong section hierarchy instead of presenting long notes as one wall of text.

### P1 — Practice
1. Specialist Workspaces need large topic signage and distinct visual identities.
2. Mission cards need a strong primary title, concise description, metadata, and obvious arrow/action.
3. Domain cards should scan by domain number, official name, weight, and class coverage.
4. Similar collections should use a consistent layout so comparison is easy.

### P1 — Forms/authentication
1. All interactive controls need visible focus states and touch-safe sizes.
2. Login/register/reset flows should use consistent field styling and explicit success/error feedback.
3. Google/social sign-in should look like a distinct provider action rather than a generic button.
4. Never silently fail; show what happened and the next recovery action.

### P1 — Mobile
1. Desktop navigation should become a clear mobile menu rather than a compressed imitation.
2. Preserve card hierarchy and tap targets at narrow widths.
3. Avoid horizontal overflow in lessons, tables, drills, and settings.
4. Keep the most important action near the top of the mobile viewport.

### P2 — Accessibility
1. Provide a skip-to-content path.
2. Keep keyboard focus visible.
3. Do not rely on color alone for active, flagged, correct, or error states.
4. Respect reduced-motion preferences.
5. Use semantic labels/aria state for menus and major navigation.

## Implemented in this pass

- Added a holistic UX polish layer at `src/ui-expert-overhaul.css`.
- Added a keyboard-accessible Skip to main content control.
- Improved active navigation treatment.
- Improved sidebar grouping and active-state clarity.
- Standardized button height/radius/feedback.
- Strengthened generic card click affordances.
- Increased Specialist Workspace signage size and hierarchy.
- Increased Practice mission hierarchy.
- Strengthened CSP-11 domain signage scanning.
- Improved form focus treatment.
- Improved table scanning treatment.
- Added intentional empty-state styling.
- Improved responsive breakpoints for practice/lab/home tool grids.
- Corrected misleading sidebar labels: Question Bank, CSP-11 Domains, Study Plan, Calculator, Account.
- Added mobile shortcuts for Study Plan and CSP-11 Domains.

## Deliberately not changed without deeper functional testing

- Authentication provider secrets and OAuth credentials.
- Database schema and migrations.
- Question content correctness.
- Exam scoring logic.
- Existing lesson/exam mechanics.
- Payment/seat logic.

These are functional/security concerns rather than visual-only UX changes and should be tested separately before modifying.
