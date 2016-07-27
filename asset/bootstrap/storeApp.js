var storeApp = angular
  .module('storeApp', ['infinite-scroll', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'chieffancypants.loadingBar', 'gsn.core', 'ui.map', 'ui.keypress', 'ui.event', 'ui.utils', 'angulartics'])
  .config(['$routeProvider', function($routeProvider) {
    // disable theme
    gsn.config.SiteTheme = 'bootstrap';
    gsn.config.defaultMobileListView = true;

    var le = [gsn.getThemeUrl('/views/layout.html')];
    for (var i = 1; i < 5; i++) {
      le.push(gsn.getThemeUrl('/views/layout-gsn' + i + '.html'));
    }

    var lec = gsn.getThemeUrl('/views/layout-circular.html');
    var homeFile = '/proxy/Content/meta/' + gsn.config.ChainId + '/?name=home page&meta=home&type=text/html&nocache=' + gsn.config.Version;
    var urls = [
      {
        login: 0,
        store: 0,
        path: '/',
        tpl: homeFile
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/article',
        tpl: gsn.getThemeUrl('/views/engine/article.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/article/:id',
        tpl: gsn.getThemeUrl('/views/engine/article.html')
      }
      , {
        login: 0,
        store: 1,
        layout: lec,
        path: '/circular',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-flyer.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/list',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/grid',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-grid.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/text',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/contactus',
        tpl: gsn.getThemeUrl('/views/engine/contact-us.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons',
        tpl: gsn.getThemeUrl('/views/engine/coupons-printable.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons/digital',
        tpl: gsn.getThemeUrl('/views/engine/coupons-digital.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons/store',
        tpl: gsn.getThemeUrl('/views/engine/coupons-store.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/mealplannerfull',
        tpl: gsn.getThemeUrl('/views/engine/meal-planner.html')
      }
      , {
        login: 1,
        store: 0,
        layout: le[3],
        path: '/savedlists',
        tpl: gsn.getThemeUrl('/views/engine/saved-lists.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/mylist',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list.html')
      }
      , {
        login: 0,
        store: 0,
        path: '/mylist/print',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list-print.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/mylist/email',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list-email.html')
      }
      , {
        login: 1,
        store: 0,
        layout: le[3],
        path: '/myrecipes',
        tpl: gsn.getThemeUrl('/views/engine/my-recipes.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/product',
        tpl: gsn.getThemeUrl('/views/engine/product.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/product/search',
        tpl: gsn.getThemeUrl('/views/engine/product-search.html')
      }
      , {
        login: 1,
        store: 0,
        path: '/profile',
        tpl: gsn.getThemeUrl('/views/engine/profile-edit.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipe/search',
        tpl: gsn.getThemeUrl('/views/engine/recipe-search.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipe',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipe/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipecenter/recipe/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipecenter',
        tpl: gsn.getThemeUrl('/views/engine/recipe-center.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipevideo',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipecenter/recipevideo',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipevideo/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , { 
        login: 0, 
        store: 1, 
        layout: le[4], 
        path: '/specials', 
        tpl:gsn.getThemeUrl('/views/engine/specials.html') 
      }

      , {
        login: 0,
        store: 0,
        path: '/registration',
        tpl: gsn.getThemeUrl('/views/engine/registration.html')
      }
      , {
        login: 0,
        store: 0,
        path: '/registration/facebook',
        tpl: gsn.getThemeUrl('/views/engine/registration.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/signin',
        tpl: gsn.getThemeUrl('/views/engine/signin.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[1],
        path: '/store/:id',
        tpl: gsn.getThemeUrl('/views/engine/store-info.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/storelocator',
        tpl: gsn.getThemeUrl('/views/engine/store-locator.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/unsubscribe',
        tpl: gsn.getThemeUrl('/views/engine/unsubscribe.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/applyJob',
        tpl: gsn.getThemeUrl('/views/engine/employment-apply.html')
      }
    ];


    angular.forEach(urls, function(v, k) {
      $routeProvider.when(v.path, {
        templateUrl: v.tpl,
        caseInsensitiveMatch: true,
        storeRequired: v.store,
        requireLogin: v.login,
        controller: v.controller,
        layout: v.layout
      })
    });

    $routeProvider.when('/coupons/printable', {
      redirectTo: '/coupons',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars/:id/:page', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/login', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/manage', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
      templateUrl: gsn.getThemeUrl('/views/engine/static-content.html'),
      caseInsensitiveMatch: true
    });
  }]);

