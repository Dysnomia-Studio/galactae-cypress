describe('Ranks', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Shows/Hide', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-ranks').should('not.be.visible');
			cy.get('#hud-bottom-button-ranks').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-ranks').click();

			cy.get('#hud-ranks').should('be.visible');
			cy.get('#hud-bottom-button-ranks').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-ranks').click();

			cy.get('#hud-ranks').should('not.be.visible');
			cy.get('#hud-bottom-button-ranks').should('not.have.class', 'hud-bottom-active');
		});

		it('Show/Hide (Close button)', () => {
			cy.get('#hud-ranks').should('not.be.visible');
			cy.get('#hud-bottom-button-ranks').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-ranks').click();

			cy.get('#hud-ranks').should('be.visible');
			cy.get('#hud-bottom-button-ranks').should('have.class', 'hud-bottom-active');

			cy.get('#hud-ranks-close').click({ force: true });

			cy.get('#hud-ranks').should('not.be.visible');
			cy.get('#hud-bottom-button-ranks').should('not.have.class', 'hud-bottom-active');
		});
	});

	context('Test interface', () => {
		it('Have a blue name', () => {
			cy.get('#hud-bottom-button-ranks').click();

			cy.get('.rank-name em').should('have.text', 'ElanisTest');

			cy.get('#hud-ranks-close').click({ force: true });
		});

		it('Can switch to alliance ranks', () => {
			cy.get('#hud-bottom-button-ranks').click();

			cy.get('#hud-ranks-frame').should('have.attr', 'src').should('include', 'https://00-dev.galactae.eu/ranks.php');

			cy.get('#ranks-galAly-button').click({ force: true });

			cy.get('#hud-ranks-frame').should('have.attr', 'src').should('include', 'ranks.php?type=ally');

			cy.get('#hud-ranks-close').click({ force: true });
		});
	});
});