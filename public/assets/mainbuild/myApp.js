/*! Made on 11-05-2016 */
/* Angular routing and app declaration */

var app = angular.module('fsimApp', ['ui.router', 'pascalprecht.translate']);

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$translateProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
        $stateProvider
    /* Main page state starts */
        .state('home', {
            url: '/home',
            templateUrl: 'views/components/frontpage/index.html',
            controller: 'FrontCtrl'
        })
        .state('indexedloan', {
            url: '/indexedloan',
            templateUrl: 'views/components/indexedloan/index.html',
            controller: 'IndexedLoanCtr'
        })
        .state('compoundloan', {
            url: '/compoundloan',
            templateUrl: 'views/components/compoundloan/index.html',
            controller: 'CompoundCtrl'
        })        
        .state('contributors', {
            url: '/contributors',
            templateUrl: 'views/components/contributors/index.html',
            controller: 'ContributorsCtrl'
        });
    
        $urlRouterProvider.otherwise('home');

    /* Translator configuration, files are in prefix path below*/

        $translateProvider.useStaticFilesLoader({
          prefix: 'views/languages/',
          suffix: '.json'
        });

        $translateProvider.preferredLanguage('is');
        $translateProvider.useSanitizeValueStrategy('escape');
    }
]);
app.controller('CompoundCtrl', ['$scope', '$state', '$timeout', 'IndexedFact', 
    function ($scope, $state, $timeout, IndexedFact) {

IndexedFact.getIndexedloan().then(function(response){

    		$scope.indexedLoan =  response.data;

		});
		$scope.test;
		$scope.youPercent;
		$scope.empPercent;
		$scope.mSalary;
		$scope.indexedFloat;
		$scope.indexedFixed;
		$scope.nonIndexedFloat;
		$scope.nonIndexedFixed;
		$scope.aPayment
		$scope.ePayment
		$scope.loanAmount;
		$scope.propertyValue;
		$scope.intresetRate;
		$scope.inflation;
    }
]);
app.controller('ContributorsCtrl', ['$scope', '$state', '$timeout',
    function ($scope, $state, $timeout) {
    	/* Change this url to github */
		$scope.projectUrl = "https://github.com/BjarniLeifs/FSIM";    	

		$scope.contributors = [
			{
				name  : 'Bjarni Kristján Leifsson',
				email : 'bjarnil10@ru.is',
				study : 'MSc Software Engineering',
				school : 'Reykjavík University'
			},
			{
				name  : 'Ísleifur Muggur Jónsson',
				email : 'isleifur14@ru.is',
				study : 'BSc Computer Science',
				school : 'Reykjavík University'
			},
			{
				name  : 'Jacky Mallett',
				email : 'jacky@ru.is',
				study : 'Phd Media Arts and Sciences',
				school : 'Massachusetts Institute of Technology'
			}

		];
    }
]);
app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);

/* FrontFactory */
app.factory('FrontFact', ['$http', 
    function ($http) {
    	
    	return {
    		einn : function () {
        		return $http.get('/statistic/einn');
            /*
                .success(function (data) {
        		  return data;
                });
    		*/
            }
		};
	}
]);
app.controller('IndexedLoanCtr', ['$scope', '$state', '$timeout', 'IndexedFact',
    function ($scope, $state, $timeout, IndexedFact) {

    	IndexedFact.getIndexedloan().then(function(response){

    		$scope.indexedLoan =  response.data;

		});
		$scope.test;

    }
]);
/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function () {
        		return $http.get('/statistic/indexloan');
            }
		};
	}
]);
app.controller('NavCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);
