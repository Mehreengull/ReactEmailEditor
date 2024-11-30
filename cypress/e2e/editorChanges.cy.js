import EditorPage from "../support/EditorPage";


describe("React Email Editor v1.7.11 (Demo)", () => {
  beforeEach(() => {
    EditorPage.visitEditor();
  });

  it("Change text properties", () => {
    // Verify page title
    EditorPage.verifyTitle();

    // Interact with the editor elements
    EditorPage.headingText.should("have.text", "Mover. Maker. Boundary breaker.");
    EditorPage.headingText.invoke("click");
    

    EditorPage.segmentedControl.click();

    // Change font
    EditorPage.changeFontToMontserrat();

    // Change color
    EditorPage.changeColor('13D5CF');
    EditorPage.headingText.invoke("click");
    
     // Upload an image
    EditorPage.uploadImage('cypress/fixtures/macpro.jpg');
    
   // Add a link to a button
    EditorPage.addLinkToButton('https://unlayer.com/');

    // Export HTML
    EditorPage.exportHTML();

    // Verify Export Alert
    EditorPage.verifyExportAlert();
  });
});
