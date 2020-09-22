const dotenv = require('dotenv');
dotenv.config();

module.exports = {
<<<<<<< HEAD
	//PORT: process.env.PORT || 5000,
	mongoURI: process.env.MONGO_URI,
	jwtToken: {
		secretKey: process.env.JWT_TOKEN_SECRET,
	}
=======
    //PORT: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI,
    jwtToken: {
        secretKey: process.env.JWT_TOKEN_SECRET,
    }
>>>>>>> b4c6b0769838f84600e65543410f3621fe8b58bf
};