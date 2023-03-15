
export const checkoutPageElements = {

    checkOutDemoFrame: '#checkout-demo',
    fakeWalletButton: '.FakeWalletButton',
    inputFields: (elementId) => {
        return `[class*='CheckoutInput'][id='${elementId}']`
    },
    billingCountry: "select[id='billingCountry']",
    selectCardExpand: ".TestInputs-Chevron",
    successCardButton: "//button[contains(@class,'TestInputs-Entry')][1]",
    payButton: ".SubmitButton"

}