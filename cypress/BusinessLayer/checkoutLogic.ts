import { checkoutPageElements } from "../element/element"
import { Helper } from "../support/helper"

const helper = new Helper()

export class CheckoutLogic {

    verifyPageIsLoaded() {
        helper.getFrameBody(checkoutPageElements.checkOutDemoFrame).find(checkoutPageElements.fakeWalletButton).should('be.visible')
    }

    enterMailAddress(mail: string) {
        helper.typeTextInsideFrame('email', mail)
    }

    enterCardExpiry(cardExpity: number) {
        helper.typeTextInsideFrame('cardExpiry', cardExpity)
    }
    enterCVV(CVV: number) {
        helper.typeTextInsideFrame('cardCvc', CVV)
    }
    enterUserName(name: string) {
        helper.typeTextInsideFrame('billingName', name)
    }
    enterZip(zip: number) {
        helper.typeTextInsideFrame('billingPostalCode', zip)
    }

    selectCountry(countryName: string) {
        helper.selectFromDropdownInFrame(checkoutPageElements.billingCountry, countryName)
    }

    copySelectCardAndEnterdetails() {
        helper.clickOnElement(checkoutPageElements.selectCardExpand)
        cy.xpath(checkoutPageElements.successCardButton).trigger('mouseover')
        helper.clickOnElementxpath(checkoutPageElements.successCardButton)
        cy.window().its('navigator.clipboard').then((clip) => clip.readText()).should('equal', '4242424242424242').then((copytext) => {
            helper.typeTextInsideFrame('cardNumber', copytext)
        })
    }

    // copySelectCardAndEnterdetails() {
    //     helper.clickOnElement(checkoutPageElements.selectCardExpand)
    //     cy.xpath(checkoutPageElements.successCardButton).trigger('mouseover')
    //     cy.xpath(checkoutPageElements.successCardButton).click({ force: true }).should('have.class','TestInputs-Entry--copied')
    //     cy.window().its('navigator.clipboard').then((clip) => clip.readText()).should('equal', '4242424242424242').then((copytext) => {
    //         helper.typeTextInsideFrame('cardNumber', copytext)
    //     })
    // }

    clickPayAndVerifySubmitted() {
        cy.intercept('https://api.stripe.com/v1/payment_pages/*/confirm').as('submittedRequest')
        helper.clickOnElementInFrame(checkoutPageElements.payButton)
        cy.wait('@submittedRequest').its('response.statusCode').should('equal',200)
    }

}
