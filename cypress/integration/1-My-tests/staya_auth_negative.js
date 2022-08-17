describe('Тестирование staya', function () {
    
    it('Негативная проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('thetestedstory@proton.me');
        cy.get('.auth-form > form > [type="password"]').type('123456789');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
       
        })
})
