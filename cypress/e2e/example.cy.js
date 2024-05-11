// https://on.cypress.io/api

describe('sanity Test', () => {
  it('visits the app root url', () => {

   cy.visit("/");
   cy.contains("#header a:first-child", "Music");
  })
})
