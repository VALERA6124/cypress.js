describe('Покупка нового аватара для своего тренера', function () {
    
    it('е2е тест на покупку аватара', function () {
        cy.visit('https://pokemonbattle.me/login');

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');//ввел логин
        cy.get('#password').type('USER_PASSWORD');//ввел пароль
        cy.get('.auth__button').click();//нажал на кнопку войти
        cy.get('.header__btns > [href="/shop"]').click();//нажал на кнопку магазин
        cy.get('.available > button').first().click(); //кликаем по кнопке Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4444721605056313');//ввел номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');//ввел срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//ввел код ccv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VALERY IVANOV'); //ввел имя владельца карты
        cy.get('.pay-btn').click();//нажал на кнопку оплатить
        cy.get('#cardnumber').type('56456'); //ввел код из смс
        cy.get('.payment__submit-button').click();//нажал на кнопку отправить
        cy.get('.payment__font-for-success').should('be.visible'); //проверил что текст виден пользователю
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //проверяю текст
        cy.get('.payment__adv').should('be.visible'); //проверил что есть кнопка вернуться в магазин

    })

})

