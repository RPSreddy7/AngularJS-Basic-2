(function() {
    'use strict';
    myApp.constant('appConfiguration', {
        signIn: '/SignIn',
        signInState: 'SignInState',
        templatePath: './templates/',
        register: '/Registration',
        registerState: 'RegisterState',

        forget: '/ForgetPassword',
        forgetState: 'ForgetPasswordState',

        dashboardState: 'DSState',
        dashboardUrl: '/Dashboard',

        dashboardImageState:'DashImg',
        dashboardImageUrl: '/DashImgUrl',
        
        prasadRestApiURL:"https://jsonplaceholder.typicode.com/"
    })
})()