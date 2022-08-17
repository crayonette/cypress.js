
describe('Тестирование staya', function () {
    
    it('Позитивная проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('thetestedstory@proton.me');
        cy.get('.auth-form > form > [type="password"]').type('d_S79mQ8LNuX');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
       
        })
})
