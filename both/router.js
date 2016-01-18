// both/router.js

Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', 'visas');
Router.route('/visas/:_id', function () {
  var item = Visas.findOne({_id: this.params._id});
  this.render('visa', {data: item});
}, {
  name: 'visa.show'
});