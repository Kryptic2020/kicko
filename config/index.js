const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	//PORT: process.env.PORT || 5000,
	mongoURI: process.env.MONGO_URI,
	jwtToken: {
		secretKey: process.env.JWT_TOKEN_SECRET,
	}
};