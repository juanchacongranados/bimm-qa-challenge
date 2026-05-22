# Defects Report

## DEFECT-001 - Accessibility issues detected on Practice Form page

### Summary
Accessibility violations were detected during automated accessibility testing on the Practice Form page.

### Environment
- URL: https://demoqa.com/automation-practice-form
- Browser: Chrome
- Framework: Cypress + cypress-axe

### Steps to Reproduce
1. Open the Practice Form page
2. Run the accessibility automated test using axe
3. Review the accessibility violations reported

### Expected Result
The page should not contain critical accessibility violations.

### Actual Result
The automated accessibility scan detected:
- Missing labels on form elements
- Missing or invalid image alt attributes

### Severity
Medium

### Priority
Medium

### Rationale
These issues may impact users relying on assistive technologies such as screen readers and reduce overall accessibility compliance.

### Evidence
Detected through automated accessibility testing using cypress-axe.