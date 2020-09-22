const passport = require('passport');

module.exports = (app) => {
<<<<<<< HEAD
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		//res.send(req.user);
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
=======
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
      console.log('hey');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    //res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
};
