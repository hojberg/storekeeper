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
            requires: ['app-base', 'app-transitions']
          }
        }
      }
    }
  };
}(this));
