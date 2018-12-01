(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxpromisify = nx.wxPromisify || require('next-wx-promisify');
  var wx = global.wx;

  // import packages:
  require('next-param');

  var NxWeappRoute = nx.declare('nx.weapp.Route', {
    statics: {
      route: function (inApi, inUrl, inData) {
        var suffix = inData ? ('?' + nx.param(inData)) : '';
        var urlData = inUrl ? { url: inUrl + suffix } : null;
        return new Promise(function (resolve, reject) {
          wx[inApi](
            nx.mix(urlData, nxWxpromisify(resolve, reject))
          );
        });
      },
      back: function (inData) {
        this.route('navigateBack', null, inData);
      },
      push: function (inUrl, inData) {
        this.route('navigateTo', inUrl, inData);
      },
      replace: function (inUrl, inData) {
        this.route('redirectTo', inUrl, inData);
      },
      reLaunch: function (inUrl, inData) {
        this.route('reLaunch', inUrl, inData)
      },
      switchTab: function (inKey) {
        var url = '/' + inKey;
        this.route('switchTab', url);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappRoute;
  }

}());
