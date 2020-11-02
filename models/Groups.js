const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupsSchema = new Schema({
	groupName: {
		type: String,
	},
	groupDescription: {
		type: String,
	},
	groupSummary: {
		type: String,
	},
	groupAddress: {
		type: String,
	},
	groupSports: {
		type: Array,
	},
	groupAdmins: {
		type: Array,
	},
	groupOwner: {
		type: String,
	}
});

mongoose.model('groups', groupsSchema);

