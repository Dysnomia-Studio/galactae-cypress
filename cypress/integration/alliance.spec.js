describe('Alliance', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');

			cy.togglePanel(
				'#hud-bottom-button-alliances',
				['#alliances-panel'],
				() => {
					cy.get('#hud-bottom-button-alliances').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');

			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-alliances',
				'#alliances-close',
				['#alliances-panel'],
				() => {
					cy.get('#hud-bottom-button-alliances').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-alliances').should('not.have.class', 'hud-bottom-active');
		});
	});
});