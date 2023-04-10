describe('Home DOM on page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'trick.json'
    })
    .visit('http://localhost:3000/')
  })

  it('Should display the site title', () => {
    cy.get('h1').should('be.visible').contains('Sick Trick Wish List')
  })

  it('Should display the new trick form', () => {
    cy.get('form').should('be.visible')

    cy.get('[name="stance"]').should('be.visible')
    cy.get('[name="name"]').should('be.visible')
    cy.get('[name="obstacle"]').should('be.visible')
    cy.get('[name="tutorial"]').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('Should display trick cards that contain the trick name, obstacle, stance, and tutorial link', () => {
    cy.get('.card').should('be.visible')
    
    const trickInfo = ['flat ground', 'https://www.youtube.com/watch?v=XGw3YkQmNig', 'Obstacle:', 'Link to Tutorial:']

    trickInfo.forEach(info => {
      cy.get('.card').contains(info)
    })

    cy.get('.card > :nth-child(1)').should('be.visible')
    cy.get('.card > :nth-child(2)').should('be.visible').contains('flat ground')
    cy.get('.card > :nth-child(3)').should('be.visible').contains('Link to Tutorial:')
    cy.get(':nth-child(1) > a').should('be.visible').contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
  })
})