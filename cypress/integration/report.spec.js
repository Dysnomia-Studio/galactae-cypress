describe('Reports', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#report-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-report').click();

			cy.get('#report-panel').should('be.visible');
			cy.get('#hud-bottom-button-report').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-report').click();

			cy.get('#report-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#report-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-report').click();

			cy.get('#report-panel').should('be.visible');
			cy.get('#hud-bottom-button-report').should('have.class', 'hud-bottom-active');

			cy.get('#report-panel-close').click({ force: true });

			cy.get('#report-panel').should('not.be.visible');
			cy.get('#hud-bottom-button-report').should('not.have.class', 'hud-bottom-active');
		});
	});
});