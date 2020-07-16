describe('Chat', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-chat').should('be.visible');
			//cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-chat').click();

			cy.get('#hud-chat').should('not.be.visible');
			cy.get('#hud-bottom-button-chat').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-chat').click();

			cy.get('#hud-chat').should('be.visible');
			cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');
		});
	});
});