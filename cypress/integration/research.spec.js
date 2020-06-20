describe('Research', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-research').should('not.be.visible');
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-research').click();

			cy.get('#hud-research').should('be.visible');
			cy.get('#hud-bottom-button-research').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-research').click();

			cy.get('#hud-research').should('not.be.visible');
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-research').should('not.be.visible');
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-research').click();

			cy.get('#hud-research').should('be.visible');
			cy.get('#hud-bottom-button-research').should('have.class', 'hud-bottom-active');

			cy.get('#research-close').click({ force: true });

			cy.get('#hud-research').should('not.be.visible');
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');
		});
	});
});