require('./lib/spa.min.js');

require('./views/guide.js');
require('./views/index.js');

// 配置视图的信息
SPA.config({
  indexView: 'guide'
});
