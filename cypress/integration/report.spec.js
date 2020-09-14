describe('Reports', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');

			cy.togglePanel(
				'#hud-bottom-button-report',
				['#report-panel'],
				() => {
					cy.get('#hud-bottom-button-report').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');

			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-report',
				'#report-panel-close',
				['#report-panel'],
				() => {
					cy.get('#hud-bottom-button-report').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');
		});
	});
});