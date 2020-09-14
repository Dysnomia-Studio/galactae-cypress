describe('Fleet', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide - Fleet Build', () => {
		it('Show/Hide - Fleet Build (Bottom button)', () => {
			cy.togglePanel(
				'#hud-bottom-button-units',
				['#hud-fleet', '#fleet-build'],
			);
		});

		it('Show/Hide - Fleet Build (Close button)', () => {
			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-units',
				'#fleet-close',
				['#hud-fleet', '#fleet-build'],
			);
		});
	});

	context('Shows/Hide - Fleet Orbit', () => {
		it('Show/Hide - Fleet Orbit (Bottom button)', () => {
			cy.togglePanel(
				'#hud-bottom-button-fleets',
				['#hud-fleet', '#fleet-orbit'],
			);
		});

		it('Show/Hide - Fleet Orbit (Close button)', () => {
			cy.togglePanelWithCloseBtn(
				'#hud-bottom-button-fleets',
				'#fleet-close',
				['#hud-fleet', '#fleet-orbit'],
			);
		});
	});

	context('Shows/Hide - Fleet Orbit', () => {
		it('Show/Hide - Fleet Orbit (Bottom button)', () => {
			cy.togglePanel(
				'#hud-bottom-button-radar',
				['#hud-fleet', '#fleet-move'],
			);
		});

		it('Show/Hide - Fleet Orbit (Close button)', () => {
			it('Show/Hide - Fleet Orbit (Close button)', () => {
				cy.togglePanelWithCloseBtn(
					'#hud-bottom-button-radar',
					'#fleet-close',
					['#hud-fleet', '#fleet-move'],
				);
			});
		});
	});
});