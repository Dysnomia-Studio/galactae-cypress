import Regex from '../support/Regex';

const buildingsNames = [
	'carriere',
	'metallurgy',
	'living',
	'serre',
	'solar',
	'warehouse',
	'headquarter',
	'launchpad',
	'research',

	'radar',
	'tank',
	'shipyard',
	'trade',
	'he3exp',
];

describe('My planet', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Building informations', () => {
		it('Has valid building level', () => {
			for(const buildingsName of buildingsNames) {
				cy.get('#lvl-' + buildingsName).contains(Regex.isNumber);
			}
		});

		it('Has tutorial designing solar panel', () => {
			cy.get('#solar').should('have.class', 'tutorial-active');

			cy.get('#solar').click();

			cy.get('#solar').should('not.have.class', 'tutorial-active');

			cy.get('#building-quit').click();
		});

		for(const buildingsName of buildingsNames) {
			it('Opens building panel - ' + buildingsName, () => {
				cy.get('#building-area').should('not.be.visible');

				cy.get('#' + buildingsName).click();

				cy.get('#building-area').should('be.visible');

				cy.get('#building-img').invoke('attr', 'src').should('eq', './cdn/img/buildings/desc/' + buildingsName + '.jpg');

				cy.get('#building-quit').click();

				cy.get('#building-area').should('not.be.visible');
			});
		}
	});
});