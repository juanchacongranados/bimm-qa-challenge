# BIMM QA Challenge

This project contains automated end-to-end tests built with Cypress using the Page Object Model (POM) pattern.

The automation covers:
- Forms
- Web Tables
- Alerts
- Basic accessibility validation using axe

---

# Tech Stack

- Cypress
- JavaScript
- Cypress-axe
- Axe-core

---

# Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

# Run Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

---

# Project Structure

```text
cypress/
├── e2e/
│   ├── accessibility/
│   ├── alerts/
│   ├── forms/
│   └── tables/
│
├── fixtures/
├── pages/
└── support/
```

---

# Accessibility Testing

Accessibility validation was implemented using cypress-axe.

The Practice Form page includes a basic accessibility automated validation for critical issues.

---

# Defect Report

The project includes a DEFECTS.md file with an example accessibility issue detected during testing.

---

# Notes

This project was developed as part of the BIMM QA automation challenge.

The framework was kept simple and focused on readability and maintainability.