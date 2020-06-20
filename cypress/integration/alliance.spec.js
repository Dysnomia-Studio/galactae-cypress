describe('Alliance', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#alliances-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-alliances').click();

			cy.get('#alliances-panel').should('be.visible');
			cy.get('#hud-bottom-button-alliances').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-alliances').click();

			cy.get('#alliances-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#alliances-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-alliances').click();

			cy.get('#alliances-panel').should('be.visible');
			cy.get('#hud-bottom-button-alliances').should('have.class', 'hud-bottom-active');

			cy.get('#alliances-close').click();

			cy.get('#alliances-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');
		});
	});
});