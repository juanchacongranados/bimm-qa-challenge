# BIMM QA Automation Challenge

Automated end-to-end test suite for [DemoQA](https://demoqa.com/) built with Cypress and JavaScript.

The project focuses on representative user flows, maintainable test structure, meaningful assertions, defect investigation, and a lightweight CI setup.

## Test Coverage

The main regression suite covers:

- Practice Form
  - Valid student submission
  - Submitted data validation
  - Invalid email validation
  - Required field validation
- Select Menu
  - Single selection
  - Multiple selection
- Web Tables
  - Add and verify a new user
- Alerts
  - Browser alert
  - Confirmation dialog
  - Prompt dialog
- Accessibility
  - Critical-impact accessibility validation on the Practice Form using axe-core

The final regression execution contains **10 tests across 5 specs**, with **10 passing and 0 failing**.

## Tech Stack

- Cypress 15
- JavaScript
- Node.js 22
- cypress-axe
- axe-core
- GitHub Actions

## Project Structure

```text
.github/
└── workflows/
    └── cypress.yml

cypress/
├── e2e/
│   ├── accessibility/
│   ├── alerts/
│   ├── forms/
│   ├── selections/
│   └── tables/
├── fixtures/
├── known-defects/
├── pages/
└── support/

evidence/
results/
DEFECTS.md
README.md
```

Test specifications, page objects, fixtures, reusable commands, known-defect reproductions, and evidence are intentionally separated to keep the suite easy to understand and extend.

## Prerequisites

- Node.js 22 or compatible version
- npm
- Git

## Installation

Clone the repository and install dependencies:

```bash
npm ci
```

## Running the Tests

Run the main regression suite in headless mode:

```bash
npm test
```

Open the Cypress Test Runner for interactive/headed execution:

```bash
npm run cy:open
```

Run Cypress directly in headless mode:

```bash
npm run cy:run
```

Run the known-defect reproduction suite:

```bash
npm run test:known-defects
```

The known-defect command is expected to report failures while the documented application issues remain reproducible.

## Configuration

The project uses `https://demoqa.com` as the Cypress base URL.

A 30-second page load timeout is configured because DemoQA is a public external application and its page load time can vary due to third-party resources. Test assertions continue to rely on Cypress retryability rather than fixed waits.

Screenshots are automatically generated on test failure. Video recording is disabled to keep the challenge lightweight.

## Test Design and Maintainability

The framework uses the Page Object Model to keep selectors and page interactions outside the test specifications.

Stable element IDs are preferred where DemoQA provides them. Test data is stored in fixtures where reuse is useful, and a small custom `safeClick` command handles scrolling and visibility before interacting with elements that may appear outside the viewport.

The suite intentionally avoids arbitrary fixed waits and does not suppress application exceptions to make failing scenarios appear successful.

## Known Defects

Two application behaviors identified during exploratory testing were reproduced through isolated Cypress tests:

1. The Practice Form submission modal cannot be closed using the **Close** button and produces an application-side JavaScript exception.
2. The Practice Form accepts and successfully submits a future **Date of Birth**.

Detailed reproduction steps, expected and actual results, severity/priority rationale, and evidence are available in `DEFECTS.md`.

The future Date of Birth expectation is based on the semantics of the field because no explicit business rule was provided.

Known-defect tests are intentionally kept outside the main regression suite. This allows the standard suite to represent regression health while preserving executable reproductions of currently observed product issues.

## Accessibility

The Practice Form includes an automated accessibility check using `cypress-axe` and `axe-core`.

The current test checks for **critical-impact violations**. It is intended as a lightweight automated accessibility signal and not as a replacement for a complete accessibility audit or manual accessibility testing.

## Test Results and Evidence

The latest documented execution summary is available in:

```text
results/TEST-RESULTS.md
```

Defect screenshots are stored in:

```text
evidence/
```

Final regression result:

```text
Specs:    5
Tests:    10
Passing:  10
Failing:  0
```

Known defects are executed and reported separately.

## CI/CD

A GitHub Actions workflow is included in `.github/workflows/cypress.yml`.

On pushes and pull requests to `main`, the workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm ci`.
4. Runs the main regression suite using `npm test`.

Known-defect reproductions are not part of the CI regression gate because they intentionally exercise currently failing application behavior.

## Scaling Recommendations

For a larger production suite, I would extend this approach with test tagging for smoke/regression groups, environment-specific configuration, controlled test-data creation and cleanup, parallel execution, and reporting integrated with the CI pipeline.

Useful quality metrics would include pass/fail trends, execution duration, flaky-test rate, defect detection by test layer, and regression stability over time.

## Scope and Trade-offs

The implementation is intentionally representative rather than exhaustive. Priority was given to meaningful flows, edge cases, reusable structure, defect investigation, and reliable execution within the challenge timebox.

DemoQA is a public third-party application, so external resources and application-side behavior are outside the test framework's control.