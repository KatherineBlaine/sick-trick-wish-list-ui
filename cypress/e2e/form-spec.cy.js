describe('Add trick form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'trick.json'
    })
    .visit('http://localhost:3000/')

    cy.get('[name="stance"]').select('switch')
    cy.get('[name="name"]').type('heelflip')
    cy.get('[name="obstacle"]').select('stairs')
    cy.get('[name="tutorial"]').type('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })

  it('Should be able to update form values based on user inputs', () => {
    cy.get('[name="stance"]').should('have.value', 'switch')
    cy.get('[name="name"]').should('have.value', 'heelflip')
    cy.get('[name="obstacle"]').should('have.value', 'stairs')
    cy.get('[name="tutorial"]').should('have.value', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
  })

  it('Should be able to display the newly added trick to the DOM when the submit button is clicked', () => {
    cy.get('button').click()

    cy.get('.card-container > :nth-child(1)').should('be.visible')
    cy.get('.card-container > :nth-child(2)').should('be.visible')

    const trickData = ['stairs', 'Obstacle:', 'Link to Tutorial:', 'https://www.youtube.com/watch?v=9N9swrZU1HA']

    trickData.forEach(data => {
      cy.get('.card-container > :nth-child(2)').contains(data)
    })

    cy.get('.card-container > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('.card-container > :nth-child(2) > :nth-child(2)').should('be.visible').contains('stairs')
    cy.get('.card-container > :nth-child(2) > :nth-child(3)').should('be.visible').contains('Link to Tutorial')
    cy.get(':nth-child(2) > a').should('be.visible').contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })
})