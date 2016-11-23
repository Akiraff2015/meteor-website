FlowRouter.route('/about', {
	action: function() {
		BlazeLayout.render('layout1', {
			top: 'navbar',
			main: 'index'
		});
	}
});

FlowRouter.route('/contact', {
	action: function() {
		BlazeLayout.render('layout1', {
			top: 'navbar',
			main: 'contact'
		});
	}
});