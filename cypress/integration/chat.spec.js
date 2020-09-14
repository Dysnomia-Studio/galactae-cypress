describe('Chat', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Buttons', () => {
		it('Show/Hide (Bottom button)', () => {
			// cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');

			cy.clickWithChecks(
				'#hud-bottom-button-chat', {
					invisibleBefore: [],
					visibleBefore: ['#hud-chat'],

					invisibleAfter: ['#hud-chat'],
					visibleAfter: [],
				}
			);

			cy.get('#hud-bottom-button-chat').should('not.have.class', 'hud-bottom-active');

			cy.clickWithChecks(
				'#hud-bottom-button-chat', {
					invisibleBefore: ['#hud-chat'],
					visibleBefore: [],

					invisibleAfter: [],
					visibleAfter: ['#hud-chat'],
				}
			);

			cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');
		});

		it('Change channels', () => {
			cy.clickWithChecks(
				'#hud-chat-channels li[chatChannel=hud-chat-trade]', {
					invisibleBefore: ['#hud-chat-trade', '#hud-chat-ally'],
					visibleBefore: ['#hud-chat-global'],

					invisibleAfter: ['#hud-chat-global', '#hud-chat-ally'],
					visibleAfter: ['#hud-chat-trade'],
				}
			);

			cy.clickWithChecks(
				'#hud-chat-channels li[chatChannel=hud-chat-ally]', {
					invisibleBefore: [],
					visibleBefore: [],

					invisibleAfter: ['#hud-chat-global', '#hud-chat-trade'],
					visibleAfter: ['#hud-chat-ally'],
				}
			);

			cy.clickWithChecks(
				'#hud-chat-channels li[chatChannel=hud-chat-global]', {
					invisibleBefore: [],
					visibleBefore: [],

					invisibleAfter: ['#hud-chat-ally', '#hud-chat-trade'],
					visibleAfter: ['#hud-chat-global'],
				}
			);
		});

		it('Send message', () => {
			const text = 'Test Automatisé - envoi de message - ' + Date.now();
			cy.get('#chat_message').type(text + '{enter}');

			cy.get('#hud-chat').contains(text);
		});
	});
});