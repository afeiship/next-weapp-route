(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxWeappRoute = nx.declare('nx.WeappRoute', {
    statics: {
      moduleKey: 'index',
    },
    methods: {
      back: function () { },
      push: function () { },
      replace: function () { },
      to: function () { },
      reLaunch: function () { },
      switchTao: function () { }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappRoute;
  }

}());
