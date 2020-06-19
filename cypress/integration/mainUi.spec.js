import Regex from '../support/Regex';

describe('Main UI', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Top Left HUD', () => {
		it('Should have valid top HUD values types - Credits', () => {
			cy.get('#credits_nmb').contains(Regex.isQuantity);
		});

		it('Should have valid top HUD values & tooltips - Planet Count', () => {
			// Planet Count
			cy.get('#planetCount_nmb').contains(Regex.isNumberSlashNymber);
			cy.get('#planetCount-available').contains(Regex.isNumber);
			cy.get('#planetCount-used').contains(Regex.isNumber);
			cy.get('#planetCount-total').contains(Regex.isNumber);
			cy.get('#planetCount-next-level').contains(Regex.isPointsCount);
		});

		it('Should have valid top HUD values & tooltips - Population', () => {
			cy.get('#population_nmb').contains(Regex.isQuantity);
			cy.get('#population-available').contains(Regex.isQuantity);
			cy.get('#population-used').contains(Regex.isQuantity);
			cy.get('#population-total').contains(Regex.isQuantity);
		});

		it('Should have valid top HUD values & tooltips - Research', () => {
			cy.get('#research_nmb').contains(Regex.isQuantityPerHour);
		});

		it('Should have valid top HUD values & tooltips - Moral', () => {
			cy.get('#moral_nmb').contains(Regex.isPercentage);
		});

		it('Should have valid top HUD values & tooltips - Energy', () => {
			cy.get('#electricity_nmb').contains(Regex.isEnergy);
			cy.get('#electricity-available').contains(Regex.isEnergy);
			cy.get('#electricity-used').contains(Regex.isEnergy);
			cy.get('#electricity-total').contains(Regex.isEnergy);
		});
	});

	context('Top Center HUD', () => {
		it('Can rename planet (Click outside)', () => {
			cy.get('#hud-planet-name').should('not.be.empty');

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'SPAN');

			cy.get('#hud-planet-name').click();

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'INPUT');

			const newName = 'Planete - ' + Date.now();

			cy.get('#hud-planet-name')
				.clear()
				.type(newName)
				.should('have.value', newName);

			cy.get('#planet-current').click();

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'SPAN');

			cy.get('#hud-planet-name').contains(newName);
		});

		it('Can rename planet (Enter key)', () => {
			cy.get('#hud-planet-name').should('not.be.empty');

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'SPAN');

			cy.get('#hud-planet-name').click();

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'INPUT');

			const newName = 'Planete - ' + Date.now();

			cy.get('#hud-planet-name')
				.clear()
				.type(newName + '{enter}');

			cy.get('#hud-planet-name').should('have.prop', 'tagName' ).should('eq', 'SPAN');

			cy.get('#hud-planet-name').contains(newName);
		});
	});


	context('Top Right HUD', () => {
		it('Should have valid top HUD values & tooltips - Minerals', () => {
			cy.get('#minerals_nmb').contains(Regex.isMass);
			cy.get('#minerals-cap').contains(Regex.isMass);
			cy.get('#minerals-prod').contains(Regex.isMassPerHour);
			cy.get('#minerals-cons').contains(Regex.isMassPerHour);
		});

		it('Should have valid top HUD values & tooltips - Helium 3', () => {
			cy.get('#he_nmb').contains(Regex.isMass);
			cy.get('#he-cap').contains(Regex.isMass);
			cy.get('#he-prod').contains(Regex.isMassPerHour);
			// he-fuel-distribute ?
		});

		it('Should have valid top HUD values & tooltips - Aluminium', () => {
			cy.get('#al_nmb').contains(Regex.isMass);
			cy.get('#al-cap').contains(Regex.isMass);
			cy.get('#al-prod').contains(Regex.isMassPerHour);
			cy.get('#al-variety').contains(Regex.isPercentage);
		});

		it('Should have valid top HUD values & tooltips - Iron', () => {
			cy.get('#fe_nmb').contains(Regex.isMass);
			cy.get('#fe-cap').contains(Regex.isMass);
			cy.get('#fe-prod').contains(Regex.isMassPerHour);
			cy.get('#fe-variety').contains(Regex.isPercentage);
		});

		it('Should have valid top HUD values & tooltips - Titanium', () => {
			cy.get('#ti_nmb').contains(Regex.isMass);
			cy.get('#ti-cap').contains(Regex.isMass);
			cy.get('#ti-prod').contains(Regex.isMassPerHour);
			cy.get('#ti-variety').contains(Regex.isPercentage);
		});

		it('Should have valid top HUD values & tooltips - Copper', () => {
			cy.get('#cu_nmb').contains(Regex.isMass);
			cy.get('#cu-cap').contains(Regex.isMass);
			cy.get('#cu-prod').contains(Regex.isMassPerHour);
			cy.get('#cu-variety').contains(Regex.isPercentage);
		});
	});
});