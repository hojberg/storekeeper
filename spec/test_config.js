(function (root) {
  root.YUI_config = {
    combine: false,
    gallery: 'gallery-2011.09.07-20-35',
    groups: {
      storekeeper: {
        combine: false,
        root: '../public/js/app/',
        base: '../public/js/app/',
        modules: {
          'sk:models:order': {
            requires: ["model", "gallery-model-sync-rest"],
            path: 'models/order.js'
          },
          'sk:models:order_list': {
            requires: ["model-list", "gallery-model-sync-rest", 'sk:models:order'],
            path: 'models/order_list.js'
          }
        }
      },
      storekeeperSpecs: {
        combine: false,
        root: '/',
        base: './',
        modules: {
          'skspec:models:order': {
            requires: ["sk:models:order"],
            path: 'models/order_spec.js'
          },
          'skspec:models:order_list': {
            requires: ["sk:models:order_list", "sk:models:order"],
            path: 'models/order_list_spec.js'
          }
        }
      }
    }
  };
}(this));
