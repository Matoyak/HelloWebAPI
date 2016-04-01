namespace HelloWebAPI {

    angular.module('HelloWebAPI', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: HelloWebAPI.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: HelloWebAPI.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('list', {
                url: '/list',
                templateUrl: '/ngApp/productList.html',
                controller: HelloWebAPI.Controllers.ListController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url: '/movies',
                templateUrl: '/ngApp/movieList.html',
                controller: HelloWebAPI.Controllers.MovieListController,
                controllerAs: 'controller'
            })
            .state('addMovie', {
                url: '/addMovie',
                templateUrl: '/ngApp/addMovie.html',
                controller: HelloWebAPI.Controllers.AddMovieController,
                controllerAs: 'controller'
            })
            .state('editMovie', {
                url: '/editMovie/:id',
                templateUrl: '/ngApp/editMovie.html',
                controller: HelloWebAPI.Controllers.EditMovieController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
