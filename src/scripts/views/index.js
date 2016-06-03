var indexTpl = require('../tpl/index.string');

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  bindActions: {
    'exit': function () {
      this.hide();
    }
  }
});
