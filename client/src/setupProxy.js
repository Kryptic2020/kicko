const { createProxyMiddleware } = require('http-proxy-middleware');
<<<<<<< HEAD
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google', '/auth/facebook'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
=======

module.exports = function (app) {
	app.use(
		['/api', '/auth/google', '/auth/facebook'],
		createProxyMiddleware({
			target: 'http://localhost:5000',
		})
	);
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
};
