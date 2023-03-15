import 'cypress-xpath'
//import 'cypress'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      exist(value: string): Chainable<Element>
    }
  }
}