(function (root) {
  root.YUI_config = {
    combine: false,
    gallery: 'gallery-2011.09.07-20-35',
    groups: {
      storekeeper: {
        combine: false,
        root: '../public/js/app/',
        base: '../public/js/app/',
        patterns: {
          "storekeeper-": {
            configFn : function (mod) {
              var path = mod.name .replace("storekeeper-", "")
                                  .replace(/-/g, "/");

              if (path.indexOf("view") !== -1)  path += "_view.js";
              else                              path += ".js";

              mod.path = path;
            }
          }
        }
      },
      storekeeperTests: {
        combine: false,
        root: '/',
        base: './',
        patterns: {
          "storekeepertests": {
            configFn : function (mod) {
              var path = mod.name .replace("storekeepertests", "")
                                  .replace(/-/g, "/");

              if (path.indexOf("view") !== -1)  path += "_view_test.js";
              else                              path += "_test.js";

              mod.path = path;
            }
          }
        }
      }
    }
  };
}(this));
