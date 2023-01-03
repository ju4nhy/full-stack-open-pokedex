describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000') // eslint-disable-line no-undef
    cy.contains('ivysaur') // eslint-disable-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.') // eslint-disable-line no-undef
  })

  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000') // eslint-disable-line no-undef
    cy.contains('ivysaur').click() // eslint-disable-line no-undef
    cy.contains('chlorophyll') // eslint-disable-line no-undef
  })
})