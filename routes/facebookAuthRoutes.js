const passport = require('passport');

module.exports = app => {
<<<<<<< HEAD
	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook'),
		(req, res) => {
			res.redirect('/');
		}
	);
};




/*
=======

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
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
	app.get('/profile', (req, res) => {
		res.send('You are a valid user');
	});

<<<<<<< HEAD
	app.get('/failed', (req, res) => {
		res.send('You are not a valid user');
	});*/
=======
	// @route GET /failed
	// @desc Get 
	app.get('/failed', (req, res) => {
		res.send('You are not a valid user');
	});

};
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
