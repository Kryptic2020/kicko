const passport = require('passport');

module.exports = app => {

	// @route GET /auth/facebook
	// @desc Get facebook authentication
	app.get('/auth/facebook', 
		passport.authenticate('facebook', 
			{ scope: ['email'] }
		)
	);

	// @route GET /auth/facebook/callback
	// @desc Get
	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect:'/auth'
		}),
		// Successful authentication, redirect home.
		function(req, res) {
			res.redirect('/');
		}
	);

	// @route GET /profile
	// @desc Get 
	app.get('/profile', (req, res) => {
		res.send('You are a valid user');
	});

	// @route GET /failed
	// @desc Get 
	app.get('/failed', (req, res) => {
		res.send('You are not a valid user');
	});

};
