describe('Chat', () => {
	before(() => {
		cy.connect('https://00-dev.galactae.eu');
	});

	context('Buttons', () => {
		it('Show/Hide (Bottom button)', () => {
			cy.get('#hud-chat').should('be.visible');
			//cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-chat').click();

			cy.get('#hud-chat').should('not.be.visible');
			cy.get('#hud-bottom-button-chat').should('not.have.class', 'hud-bottom-active');

			cy.get('#hud-bottom-button-chat').click();

			cy.get('#hud-chat').should('be.visible');
			cy.get('#hud-bottom-button-chat').should('have.class', 'hud-bottom-active');
		});

		it('Change channels', () => {
			cy.get('#hud-chat-global').should('be.visible');
			cy.get('#hud-chat-trade').should('not.be.visible');
			cy.get('#hud-chat-ally').should('not.be.visible');

			cy.get('#hud-chat-channels li[chatChannel=hud-chat-trade]').click();

			cy.get('#hud-chat-global').should('not.be.visible');
			cy.get('#hud-chat-trade').should('be.visible');
			cy.get('#hud-chat-ally').should('not.be.visible');

			cy.get('#hud-chat-channels li[chatChannel=hud-chat-ally]').click();

			cy.get('#hud-chat-global').should('not.be.visible');
			cy.get('#hud-chat-trade').should('not.be.visible');
			cy.get('#hud-chat-ally').should('be.visible');

			cy.get('#hud-chat-channels li[chatChannel=hud-chat-global]').click();

			cy.get('#hud-chat-global').should('be.visible');
			cy.get('#hud-chat-trade').should('not.be.visible');
			cy.get('#hud-chat-ally').should('not.be.visible');
		});

		it('Send message', () => {
			const text = 'Test Automatisé - envoi de message - ' + Date.now();
			cy.get('#chat_message').type(text + '{enter}');

			cy.get('#hud-chat').contains(text);
		});
	});
});