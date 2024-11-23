describe('Test form submissions with different goals', () => {
  const menuSelectors = [
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(1)',
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(2)',
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(3)',
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(4)',
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(5)',
    '#downshift-0-menu > div > div > div.content.content___e072bcbbb7d0f3b0be0c.options___cd6837bd8e016eb2f9fd > div:nth-child(6)'
  ];
  let successfulTestCount = 0;
  menuSelectors.forEach((selector, index) => {
    it(`Fills out the form with goal option ${index + 1}`, () => {
      cy.visit('https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template');
      cy.viewport(1280, 720);
      // Имя
      cy.get('#__next > div.survey___bccbe8e57fe8804b082c.survey > div.surveyInner.wysiwyg.surveyInner___ef119f124e1b0afe4f51.surveyInnerWithFooter___a410f93ddcd31a19c4cf > div.content.content___dc5e560ce80ecb1e7d40 > div > div.questions___cad41689373d16c7f214 > div.question.question_107.question_type_1.question___df23e051d300eb092d0d > div.content___fde8e27345b6df2af011.start___bb6477f99c8e6d530160 > div')
        .find('input')
        .type('Эдуард');
       // Почта
      cy.get('#__next > div.survey___bccbe8e57fe8804b082c.survey > div.surveyInner.wysiwyg.surveyInner___ef119f124e1b0afe4f51.surveyInnerWithFooter___a410f93ddcd31a19c4cf > div.content.content___dc5e560ce80ecb1e7d40 > div > div.questions___cad41689373d16c7f214 > div.question.question_108.question_type_1.question___df23e051d300eb092d0d > div.content___fde8e27345b6df2af011.start___bb6477f99c8e6d530160 > div > div')
        .find('input')
        .type('eduard.eduard@mail.ru');
      // Телефон
      cy.get('#__next > div.survey___bccbe8e57fe8804b082c.survey > div.surveyInner.wysiwyg.surveyInner___ef119f124e1b0afe4f51.surveyInnerWithFooter___a410f93ddcd31a19c4cf > div.content.content___dc5e560ce80ecb1e7d40 > div > div.questions___cad41689373d16c7f214 > div.question.question_109.question_type_1.question___df23e051d300eb092d0d > div.content___fde8e27345b6df2af011.start___bb6477f99c8e6d530160 > div > div')
        .type('+7 311 22 44 99');
      // Цель обращения
      cy.get('#downshift-0-toggle-button').click();
      // Выбор пункта из меню
      cy.wait(1000);
      cy.get(selector).should('be.visible').click();
      // Сообщение
      cy.get('#__next > div.survey___bccbe8e57fe8804b082c.survey > div.surveyInner.wysiwyg.surveyInner___ef119f124e1b0afe4f51.surveyInnerWithFooter___a410f93ddcd31a19c4cf > div.content.content___dc5e560ce80ecb1e7d40 > div > div.questions___cad41689373d16c7f214 > div.question.question_110.question_type_2.question___df23e051d300eb092d0d > div.content___fde8e27345b6df2af011.start___bb6477f99c8e6d530160 > div > div > textarea')
      .type(`Тестовый текст ${index + 1}`);
      // Отправить
      cy.get('button[type="button"]').contains("Отправить").click();
      // Проверка
      cy.contains('Благодарим за обращение!')
        .should('be.visible')
        .then(() => {
        cy.log(`Test Passed for goal option ${index + 1}`);
        successfulTestCount++;
        });
    });
  });
  
after(() => {
  if (successfulTestCount === menuSelectors.length) {
    cy.log('Все тесты "Fills out the form with goal option" выполнились успешно.');
  } else {
    throw new Error('Не все тесты "Fills out the form with goal option" прошли успешно.');
  }
});
});
