
describe('Автотесты формы логина и пароля', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');//ввел логин
        cy.get('#pass').type('iLoveqastudio1');//ввел пароль
        cy.get('#loginButton').click();//нажал на кнопку войти

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();//нажал забыли пароль
        cy.get('#mailForgot').type('login@qa.ru');//ввел почту
        cy.get('#restoreEmailButton').click();//нажал на кнопку отправить код

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

    it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');//ввел логин
        cy.get('#pass').type('iLoveqastudio2');//ввел не правильный пароль
        cy.get('#loginButton').click();//нажал на кнопку войти

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

    it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnik.ru');//ввел не правильный логин
        cy.get('#pass').type('iLoveqastudio1');//ввел пароль
        cy.get('#loginButton').click();//нажал на кнопку войти

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');//ввел логин без @
        cy.get('#pass').type('iLoveqastudio1');//ввел пароль
        cy.get('#loginButton').click();//нажал на кнопку войти

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');//ввел логин с верхним регистром
        cy.get('#pass').type('iLoveqastudio1');//ввел пароль
        cy.get('#loginButton').click();//нажал на кнопку войти

        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

        })

})
