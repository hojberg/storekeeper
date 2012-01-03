(function (root) {

  root.YUI_config = {
    combine: false,
    gallery: 'gallery-2011.09.07-20-35',
    groups: {
      storekeeper: {
        combine: false,
        base: '../public/js/app/',
        root: '../public/js',
        modules: {
          'sk:app': {
            path:     'storekeeper_app.js',
            requires: ['app-base', 'app-transitions']
          },
          'sk:models:order': {
            path:     'models/order.js',
            requires: ['model', "gallery-model-sync-rest"]
          },
          'sk:views:dashboard': {
            path:     "views/dashboard_view.js", 
            requires: ["view"]
          }
        }
      },

      storekeeperTests: {
        combine: false,
        base: '',
        root: '',
        modules: {
          'sk:tests:models:order': {
            fullpath: 'models/order_test.js',
            requires: ["test", "sk:models:order"]
          },
          'sk:tests:views:dashboard': {
            fullpath: 'views/dashboard_view_test.js',
            requires: ["test", "sk:views:dashboard"]
          }

        }
      }

    }
  };

}(this));

