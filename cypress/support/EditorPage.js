class EditorPage {
    // Elements
    get headingText() {
      return cy.iframe().find("#u_content_heading_2");
    }
  
    get segmentedControl() {
      return cy.iframe().find(".segmented-control button:nth-child(2)").first();
    }
  
    get fontDropdown() {
      return cy.iframe().find('button[role="combobox"].dropdown-button').first();
    }

    get fontSize(){
      return cy.iframe().find(".blockbuilder-font-size-widget input[name='counter-input']")
    }
    
    get colorPicker() {
      return cy.iframe().find("#color-picker-trigger");
    }
  
    get colorInput() {
      return cy.iframe().find(".sketch-picker .flexbox-fix #rc-editable-input-1");
    }
  
    get imageButton() {
      return cy.iframe().find('#u_column_4 img');
    }
  
    get uploadButton() {
      return cy.iframe().find("button").contains("span", "Upload Image");
    }
  
    get fileInput() {
      return cy.iframe().find("input[type='file']");
    }
  
    get linkButton() {
      return cy.iframe().find("#u_content_button_2");
    }
  
    get linkInput() {
      return cy.iframe().find("input[type='url']");
    }
  
    // Actions
    visitEditor() {
      cy.visit('/');
    }
  
    verifyTitle() {
      cy.title().should('eq', 'React Email Editor Playground');
    }
  
    changeFontToMontserrat() {
      this.fontDropdown.click();
      cy.iframe().find('div[role="listbox"]').each(($el) => {
        if ($el.text().includes('Montserrat')) {
          cy.wrap($el).click();
        }
      });

      this.fontSize.clear().type('32{enter}')
    }
  
    changeColor(colorCode) {
      this.colorPicker.click();
      this.colorInput.clear().type(colorCode);
      this.colorPicker.click();
      cy.iframe().find('.display-color').should('have.css', 'background-color');
    }
  
    uploadImage(filePath) {
      this.imageButton.invoke("click");
      this.uploadButton.click();
      this.fileInput.invoke('css', 'display', 'block').eq(1).selectFile(filePath);
    }
  
    addLinkToButton(link) {
      this.linkButton.invoke("click");
      this.linkInput.click().type(link);
    }
  
    exportHTML() {
      cy.contains('Export HTML').click();
    }
  
    verifyExportAlert() {
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Output HTML has been logged in your developer console');
      });
    }
  }
  
  export default new EditorPage();
  