## Cypress Framework Documentation

This repository contains an E2E testing framework for testing the React Email Editor application using Cypress. The framework is designed following the Page Object Model (POM) to enhance maintainability, scalability, and reusability of code.

# Tools and libraries:

1. Cypress: For end-to-end testing.

2. cypress-iframe: For handling iframe elements within the application.

3. mochawesome: For generating test reports.

# Approach

* Page Object Model (POM):
    * Each page or component in the application is represented by a class.
    * The EditorPage.js class encapsulates all selectors and actions related to the Editor page.

* Test Class:
    * The editorChanges.cy.js test class contains test cases written using Cypress.
    * Each test case interacts with the EditorPage class to perform actions and verifications.

* iframe Handling:
    * Since the Editor UI is embedded within an iframe, the cypress-iframe plugin is used to locate and interact with elements inside it.

* Reporting:
    * Mochawesome is used to generate detailed HTML reports of the test execution.

# Installation

* Clone the repository:
    `git clone <repository-url>`

* Navigate to the project directory:
    `cd <repository-directory>`

* Install the dependencies:
    `npm install`

# Running Tests

* Open Cypress Test Runner:
    `npx cypress open`

* Select E2E Testing.

* Choose your preferred browser and start the test runner.

* Run tests in headless mode:
    `npx cypress run`

* Run tests in specific browser with headless mode:
    `npx cypress run --browser {browsername}`

* Run tests in chrome browser with headed mode:
    `npx cypress run --browser chrome --headed`

# Report Generation

* Generate reports using Mochawesome:
    `npx cypress run --reporter mochawesome`

* View report in your local browser
    Find [reports] folder in the root directory
    Find [html] file and click to reveal in finder
    Open the file with any [browser] to view it

# Key Points of Interest

1. Dynamic Element Handling:
    * The framework interacts with dynamic elements inside an iframe using custom locators and cy.iframe().

2. Reusable Components:
    * Actions such as changing font, color, uploading images, and adding links are encapsulated in the EditorPage class.

3. Validation:
    * Assertions are written to verify the UI updates and expected behaviors, such as:

4. Image Upload:
    * The image upload functionality is implemented using the selectFile API.

**Additional Notes** 

1. Ensure the browser drivers are up to date.
2. Verify that the application under test is accessible at the base URL.
3. The framework can be extended by adding new page classes or test cases.
4. The HTML reports generated by Mochawesome can be found in the mochawesome-report folder after test execution.
