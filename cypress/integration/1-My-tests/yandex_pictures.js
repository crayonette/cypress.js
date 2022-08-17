
describe('Тестирование Yandex', function () {
    
    it('Проверка поисковой выдачи картинок', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята').type('{enter}');
        cy.contains('Картинки по запросу котята');
        
        })
})
