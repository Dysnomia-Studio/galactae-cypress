import Regex from '../support/Regex';

describe('Map', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-map').should('not.be.visible');
			cy.get('#map-global-legend').should('not.be.visible');
			cy.get('#map-system').should('not.be.visible');

			cy.get('#hud-bottom-button-map').click();

			cy.get('#hud-map').should('be.visible');
			cy.get('#map-global-legend').should('be.visible');
			cy.get('#map-system').should('not.be.visible');

			cy.get('#hud-bottom-button-map').click();

			cy.get('#hud-map').should('not.be.visible');
			cy.get('#map-global-legend').should('not.be.visible');
			cy.get('#map-system').should('not.be.visible');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-map').should('not.be.visible');
			cy.get('#map-global-legend').should('not.be.visible');
			cy.get('#map-system').should('not.be.visible');

			cy.get('#hud-bottom-button-map').click();

			cy.get('#hud-map').should('be.visible');
			cy.get('#map-global-legend').should('be.visible');
			cy.get('#map-system').should('not.be.visible');

			cy.get('#map-close').click();

			cy.get('#hud-map').should('not.be.visible');
			cy.get('#map-global-legend').should('not.be.visible');
			cy.get('#map-system').should('not.be.visible');
		});
	});
});