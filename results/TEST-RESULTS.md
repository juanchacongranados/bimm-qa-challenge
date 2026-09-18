# Test Execution Results

## Execution Summary

- Application: DemoQA
- Execution date: September 18, 2026
- Cypress version: 15.15.0
- Browser: Electron 138 (headless)
- Node.js: 22.16.0
- Command: `npm test`

## Main Regression Suite

| Spec | Tests | Passing | Failing |
| --- | ---: | ---: | ---: |
| Alerts | 3 | 3 | 0 |
| Practice Form Accessibility | 1 | 1 | 0 |
| Practice Form | 3 | 3 | 0 |
| Select Menu | 2 | 2 | 0 |
| Web Tables | 1 | 1 | 0 |
| **Total** | **10** | **10** | **0** |

**Result:** All regression tests passed.

The main regression suite covers representative form validation and submission flows, browser dialogs, table interactions, selection controls, and a critical-impact accessibility check.

## Known Defects

Known application defects are maintained separately from the main regression suite and can be reproduced with:

`npm run test:known-defects`

At the time of execution, both known-defect tests fail as expected because the corresponding application issues are still reproducible:

1. **DEFECT-001:** Submission modal cannot be closed using the Close button.
2. **DEFECT-002:** Practice Form accepts a future Date of Birth.

Full reproduction details and severity/priority rationale are documented in `DEFECTS.md`. Supporting screenshots are stored in the `evidence/` directory.

## Flakiness and Stability

No flaky behavior was observed during the final regression execution.

The suite uses Cypress retryability and explicit assertions instead of fixed waits. The page load timeout was increased to 30 seconds because DemoQA is a public external application whose page and third-party resources can load inconsistently.

Known application failures are intentionally isolated from the regression suite rather than suppressing application exceptions or forcing tests to pass.

## Notes and Limitations

This suite is intentionally representative rather than exhaustive, in line with the scope and time constraints of the challenge.

The accessibility test checks for critical-impact violations using axe-core; it should not be interpreted as a complete accessibility audit.

The expected behavior for the future Date of Birth defect is inferred from the semantics of the field because an explicit business rule was not provided.