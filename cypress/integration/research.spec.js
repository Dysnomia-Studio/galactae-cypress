describe('Research', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');

			cy.togglePanel(
				'#hud-bottom-button-research',
				['#hud-research'],
				() => {
					cy.get('#hud-bottom-button-research').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');

			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-research',
				'#research-close',
				['#hud-research'],
				() => {
					cy.get('#hud-bottom-button-research').should('have.class', 'hud-bottom-active');
				},
				true
			);

			cy.get('#hud-bottom-button-research').should('not.have.class', 'hud-bottom-active');
		});
	});
});