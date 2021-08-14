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

Cypress.Commands.add('connect', (destinationUrl, exactURLMatch=true, tutorialCheck=true) => {
	cy.url().then(currUrl => {
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

		if(tutorialCheck) {
			cy.clickWithChecks(
				'#tutorial-panel-ok', {
					invisibleBefore: ['#loading-overlay-back'],
					visibleBefore: [],

					invisibleAfter: ['#tutorial-panel'],
					visibleAfter: [],
				},
				true
			);

			cy.clickWithChecks(
				'#day-bonus-confirm', {
					invisibleBefore: [],
					visibleBefore: [],

					invisibleAfter: ['#day-bonus'],
					visibleAfter: [],
				},
				true
			);
		}
	});
});

Cypress.Commands.add('clickWithChecks', (
	button,
	{ visibleBefore, invisibleBefore, visibleAfter, invisibleAfter },
	force=false
) => {

	for(const selector of visibleBefore) {
		cy.get(selector).should('be.visible');
	}

	for(const selector of invisibleBefore) {
		cy.get(selector).should('not.be.visible');
	}

	cy.get(button).click({ force });

	for(const selector of visibleAfter) {
		cy.get(selector).should('be.visible');
	}

	for(const selector of invisibleAfter) {
		cy.get(selector).should('not.be.visible');
	}
});

Cypress.Commands.add('togglePanelWithCloseBtn', (
	button,
	closeButton,
	panels,
	midCallBack=() => {},
	force=false,
) => {
	cy.clickWithChecks(
		button, {
			invisibleBefore: panels,
			visibleBefore: [],

			invisibleAfter: [],
			visibleAfter: panels,
		},
		force
	);

	midCallBack();

	cy.clickWithChecks(
		closeButton, {
			invisibleBefore: [],
			visibleBefore: panels,

			invisibleAfter: panels,
			visibleAfter: [],
		},
		force
	);
});

Cypress.Commands.add('togglePanel', (
	button,
	panels,
	midCallBack=() => {},
	force=false,
) => {
	cy.togglePanelWithCloseBtn(
		button,
		button,
		panels,
		midCallBack,
		force
	);
});