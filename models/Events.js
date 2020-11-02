const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventsSchema = new Schema({
	groupName: {
		type: String,
	},
	eventOwner: {
		type: String,
	},
	eventName: {
		type: String,
	},
	eventDate: {
		type: Date,
	},
	eventStartTime: {
		type: Date,
	},
	eventEndTime: {
		type: Date,
	},
	eventPricePerPlayer: {
		type: Number,
	},
	eventDescription: {
		type: String,
	},
	eventLocation: {
		type: String,
	}
});

mongoose.model('events', eventsSchema);

