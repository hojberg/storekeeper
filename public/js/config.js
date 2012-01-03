(function (root) {
  root.YUI_config = {
    combine: false,
    gallery: 'gallery-2011.09.07-20-35',
    groups: {
      storekeeper: {
        combine: false,
        base: '/js/app/',
        root: '/js',
        modules: {
          'sk:app': {
            path:     'storekeeper_app.js',
            requires: ['app-base', 'app-transitions', 'sk:views:dashboard']
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
      }
    }
  };
}(this));
