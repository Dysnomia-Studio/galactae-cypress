import Regex from '../support/Regex';

describe('My planet', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Building informations', () => {
		it('Has valid building level', () => {
			cy.get('#lvl-carriere').contains(Regex.isNumber);
			cy.get('#lvl-metallurgy').contains(Regex.isNumber);
			cy.get('#lvl-living').contains(Regex.isNumber);
			cy.get('#lvl-serre').contains(Regex.isNumber);
			cy.get('#lvl-solar').contains(Regex.isNumber);
			cy.get('#lvl-warehouse').contains(Regex.isNumber);
			cy.get('#lvl-headquarter').contains(Regex.isNumber);
			cy.get('#lvl-launchpad').contains(Regex.isNumber);
			cy.get('#lvl-research').contains(Regex.isNumber);

			cy.get('#lvl-radar').contains(Regex.isNumber);
			cy.get('#lvl-tank').contains(Regex.isNumber);
			cy.get('#lvl-shipyard').contains(Regex.isNumber);
			cy.get('#lvl-trade').contains(Regex.isNumber);
			cy.get('#lvl-he3exp').contains(Regex.isNumber);
		});

		it('Has tutorial designing solar panel', () => {
			cy.get('#solar').should('have.class', 'tutorial-active');

			cy.get('#solar').click();

			cy.get('#solar').should('not.have.class', 'tutorial-active');
		});
	});
});