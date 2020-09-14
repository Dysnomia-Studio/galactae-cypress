describe('Map', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-bottom-button-map').should('not.have.class', 'hud-bottom-active');

			cy.togglePanel(
				'#hud-bottom-button-map',
				['#hud-map', '#map-global-legend'],
				() => {
					cy.get('#map-system').should('not.be.visible');
					cy.get('#hud-bottom-button-map').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-map').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-bottom-button-map').should('not.have.class', 'hud-bottom-active');

			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-map',
				'#map-close',
				['#hud-map', '#map-global-legend'],
				() => {
					cy.get('#map-system').should('not.be.visible');
					cy.get('#hud-bottom-button-map').should('have.class', 'hud-bottom-active');
				}
			);

			cy.get('#hud-bottom-button-map').should('not.have.class', 'hud-bottom-active');
		});
	});
});