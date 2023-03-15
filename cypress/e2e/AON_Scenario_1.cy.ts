import { CheckoutLogic } from "../BusinessLayer/checkoutLogic";
import { testData } from "../fixtures/testData";

const checkoutLogic = new CheckoutLogic()

describe("Verify stripe checkput scenario", () => {

    before(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it("Verify the landing page is loaded properly", () => {
        checkoutLogic.verifyPageIsLoaded();
    })

    it("Enter all the valid data in the fields", () => {
        checkoutLogic.enterMailAddress(testData.checkoutPage.mailAddress)
        checkoutLogic.enterCardExpiry(testData.checkoutPage.expiryDate)
        checkoutLogic.enterCVV(testData.checkoutPage.CVV)
        checkoutLogic.enterUserName(testData.checkoutPage.billingName)
        checkoutLogic.selectCountry(testData.checkoutPage.country)
        checkoutLogic.enterZip(testData.checkoutPage.zip)
        checkoutLogic.copySelectCardAndEnterdetails()
    })

    it("Click on pay button and verify the processing call", () => {
        checkoutLogic.clickPayAndVerifySubmitted()
    })

})