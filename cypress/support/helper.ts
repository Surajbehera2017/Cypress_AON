import { checkoutPageElements } from "../element/element"

export class Helper {

    getFrameBody(frameEle: string = checkoutPageElements.checkOutDemoFrame) {
        return cy.get(frameEle)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    typeText(element: string, text: string) {
        cy.get(element).type(text)
    }

    clickOnElementInFrame(css: string) {
        this.getFrameBody().find(css).click()
    }

    clickOnElement(css: string) {
        cy.get(css).click()
    }

    clickOnElementxpath(xpath: string) {
        cy.xpath(xpath).click({ force: true })
    }

    typeTextInsideFrame(elementId: string, text: any) {
        this.getFrameBody().find(checkoutPageElements.inputFields(elementId)).should('exist').type(text)
    }

    selectFromDropdownInFrame(selectElement: string, selectValue: string) {
        this.getFrameBody().find(checkoutPageElements.billingCountry).select(selectValue)
    }

}