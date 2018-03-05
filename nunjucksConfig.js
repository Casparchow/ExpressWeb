'use strict';

var path = require('path');
var nunjucks = require('nunjucks');

module.exports = function(app) {
  var env = nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
  });

  env.addFilter('formatMoney', function(s) {
    var n = 2;
    s = s / 100;
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    let t = "";
    for(let i = 0; i < l.length; i ++ )
    {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
  });
  env.addFilter('radio', function(data) {
    return typeof data === 'object' ? data.name : data;
  });
  env.addFilter('styles', function(obj) {
    if (obj.color && obj.textAlign) {
      return `style="color: ${obj.color}; text-align: ${obj.textAlign};" class="font-${obj.fontSize}"`;
    }
    return '';
  });

  env.addFilter('match', function(str) {
    if (str == '100') {
      return '1:1';
    }
    return '1:1';
  });
};
