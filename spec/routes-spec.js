describe('Routes', function () {

    beforeEach(function () {
        module("BeginApp");
    });

    it("should have a Home Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('HomeController', {$scope: $rootScope})).toBeDefined();
        });
    });

    it("should have a home route", function () {
        inject(function ($route) {
            expect($route.routes['/home']).toBeDefined();
            expect($route.routes['/home'].controller).toBe('HomeController');
            expect($route.routes['/home'].templateUrl).toEqual('templates/home.html');
        });
    });

    it("should have an About Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('AboutController', {$scope: $rootScope})).toBeDefined();
        });
    });

    it("should have an about route", function () {
        inject(function ($route) {
            expect($route.routes['/about']).toBeDefined();
            expect($route.routes['/about'].controller).toBe('AboutController');
            expect($route.routes['/about'].templateUrl).toEqual('templates/about.html');
        });
    });


    it("should have an Members Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('MembersController', {$scope: $rootScope})).toBeDefined();
        });
    });

    it("should have a members route", function () {
        inject(function ($route) {
            expect($route.routes['/members']).toBeDefined();
            expect($route.routes['/members'].controller).toBe('MembersController');
            expect($route.routes['/members'].templateUrl).toEqual('templates/members.html');
        });
    });

    it("should have an Photos Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('PhotosController', {$scope: $rootScope})).toBeDefined();
        });
    });

    it("should have a photos route", function () {
        inject(function ($route) {
            expect($route.routes['/photos']).toBeDefined();
            expect($route.routes['/photos'].controller).toBe('PhotosController');
            expect($route.routes['/photos'].templateUrl).toEqual('templates/photos.html');
        });
    });

    it("should have an Events Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('EventsController', {$scope: $rootScope})).toBeDefined();
        });
    });

    it("should have an events route", function () {
        inject(function ($route) {
            expect($route.routes['/events']).toBeDefined();
            expect($route.routes['/events'].controller).toBe('EventsController');
            expect($route.routes['/events'].templateUrl).toEqual('templates/events.html');
        });
    });
});