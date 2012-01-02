(function (root) {
  root.YUI_config = {
    combine: false,
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
