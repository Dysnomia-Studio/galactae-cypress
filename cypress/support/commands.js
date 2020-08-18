// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('connect', (destinationUrl, exactURLMatch=false) => {
	cy.url().then(currUrl => {
		cy.log(currUrl);

		if(!exactURLMatch && currUrl.startsWith(destinationUrl)) {
			return;
		}

		if(exactURLMatch && currUrl === destinationUrl) {
			return;
		}

		// Assign user cookie
		if(Cypress.platform === 'win32') { // Dev computer
			cy.setCookie('galactae-phpsessid', '***REMOVED***');

		} else if (Cypress.isBrowser('chrome')) { // CI Chrome
			cy.setCookie('galactae-phpsessid', '***REMOVED***');

		} else if (Cypress.isBrowser('firefox')) { // CI Firefox
			cy.setCookie('galactae-phpsessid', '***REMOVED***');

		} else if (Cypress.isBrowser('electron')) { // CI Electron
			cy.setCookie('galactae-phpsessid', '***REMOVED***');

		}

		// Prevent having sound while testing
		cy.setCookie('galactae_settings_sounds_musicVol', '0');
		cy.setCookie('galactae_settings_sounds_soundLvl', '0');

		cy.wait(500);

		// Visit
		cy.visit(destinationUrl);

		cy.wait(500);

		// On load end
		cy.get('#loading-overlay-back').should('not.be.visible');

		cy.get('#tutorial-panel-ok').click();
		cy.get('#tutorial-panel').should('not.be.visible');

		cy.get('#day-bonus-confirm').click({ force: true });
		cy.get('#day-bonus').should('not.be.visible');
	});
});