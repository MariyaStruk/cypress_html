describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/src/index.html')
  })

  it('passes', () => {
    cy.contains('test123').should('be.visible')

    const headerNames = ['Test2', 'Test3']
    headerNames.forEach((headerName) => {
      checkForm(headerName)
    })
  })

  const checkForm = (titleName) => {
    cy.contains('h2', titleName).parent().within(() => {
      cy.get('#text-field').type('gfgcf454')
      cy.get('.password-field').type('123456k')
      cy.get("[data-cy='number-field']").type('123456k')
      cy.get("[type='checkbox']").click().click()
    })
  }
})