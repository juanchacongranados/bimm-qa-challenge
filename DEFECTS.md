# Defects Report

## DEFECT-001 - Submission modal cannot be closed using the Close button

### Environment
- Application: DemoQA
- Page: Practice Form
- URL: https://demoqa.com/automation-practice-form
- Browser: Electron 138 (Cypress headless)
- Cypress: 15.15.0
- Date observed: September 18, 2026

### Preconditions
A valid Practice Form submission has been completed and the submission confirmation modal is displayed.

### Steps to Reproduce
1. Open the Practice Form.
2. Enter valid data in all required fields.
3. Click **Submit**.
4. Verify that the submission confirmation modal is displayed.
5. Click the **Close** button.

### Expected Result
The submission modal should close and the user should return to the Practice Form.

### Actual Result
The modal remains open after clicking **Close** and the application throws the following JavaScript error:

`TypeError: Lr.findDOMNode is not a function`

The issue was first observed during manual exploratory testing and was subsequently reproduced with Cypress using a standard user click.

### Severity
Medium

### Priority
Medium

### Rationale
The form submission itself succeeds and the submitted information is displayed correctly, so the primary workflow is not blocked. However, the user cannot dismiss the confirmation modal through the provided Close action, which disrupts the expected interaction and generates an application-side JavaScript exception.

### Automation Notes
Cypress correctly detects the uncaught exception as originating from the application code. The exception was intentionally not suppressed because doing so would hide a product defect.

The defect reproduction test is excluded from the main regression suite so that known application defects do not cause the standard suite to report a framework failure.

### Evidence
Screenshot: `evidence/defect-001-close-modal.png`


---

## DEFECT-002 - Practice Form accepts a future Date of Birth

### Environment
- Application: DemoQA
- Page: Practice Form
- URL: https://demoqa.com/automation-practice-form
- Browser: Electron 138 (Cypress headless)
- Cypress: 15.15.0
- Date observed: September 18, 2026

### Preconditions
The Practice Form is available and the user is able to enter valid student information.

### Steps to Reproduce
1. Open the Practice Form.
2. Enter valid data in all required fields.
3. Open the **Date of Birth** date picker.
4. Select a future date, for example **September 18, 2027**.
5. Click **Submit**.

### Expected Result
A future date should not be accepted as a Date of Birth and the form should not be submitted.

### Actual Result
The form accepts the future date and displays the submission confirmation modal. The submitted data includes:

`Date of Birth: 18 September,2027`

### Severity
Medium

### Priority
Medium

### Rationale
The issue does not prevent the user from completing the form, but it allows logically invalid data to be accepted and processed. This may affect data quality and any downstream functionality that relies on a valid Date of Birth.

The expected behavior is inferred from the semantics of the **Date of Birth** field because no explicit business rule for date validation was provided as part of the challenge.

### Automation Notes
The behavior was reproduced with Cypress by selecting a future date through the application's date picker and submitting otherwise valid student data.

The known-defect test expresses the expected behavior that a future Date of Birth should prevent successful submission. It currently fails because the confirmation modal is displayed.

The defect reproduction test is kept outside the main regression suite so that the known application issue does not cause the standard suite to report a framework failure.

### Evidence
Screenshot: `evidence/defect-002-future-date-of-birth.png`