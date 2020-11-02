const mongoose = require('mongoose');
//const requireLogin = require('../middlewares/requireLogin');
const Group = mongoose.model('groups');
const Event = mongoose.model('events');


module.exports = (app) => { 
	//CREATE GROUPS
	app.post('/api/group/create', async (req, res) => {
		console.log(req.body);
		const { groupName, groupDescription, groupSummary, groupAddress, groupSports, groupAdmins, groupOwner } = req.body;
		const exist = await Group.find({ groupName });
		if (exist.length>0) {
			console.log('Group Name Already Exist!');
			res.send('Group Name Already Exist!');
		} else {
			const s = new Group({
				groupName,
				groupDescription,
				groupSummary,
				groupAddress,
				groupSports,
				groupAdmins,
				groupOwner
			});
			await s.save();
			console.log('Group Successfully Created!!!');
			res.send('Group Successfully Created!!!');
	  }
	});
	
	//FETCH GROUPS
	app.get('/api/group/get', async (req, res) => {
		const groups = await Group.find({});
		res.send(groups);
	});
  
	//UPDATE GROUPS
	app.post('/api/group/update', async (req, res) => {
		const { _id, groupName, groupDescription, groupSummary, groupAddress, groupSports, groupAdmins, groupOwner } = req.body;
		await Group.updateOne({
			_id
		}, {
			$set: { groupName, groupDescription, groupSummary, groupAddress, groupSports, groupAdmins, groupOwner},
		})
			.exec()
			.then((res) => {
				console.log(res, 'res');
			})
			.catch((err) => {
				console.log(err, 'err');
			});
		res.send('Successfully Updated!!!');
	});

	//DELETE GROUPS
	app.post('/api/group/delete', async (req, res) => {
		const { _id } = req.body;
		await Group.findByIdAndRemove({_id});
		res.send('Deleted!!');
	});  
  
	//CREATE EVENTS
	app.post('/api/event/create', async (req, res) => {
		const { groupName, eventOwner, eventName, eventDate, eventStartTime, eventEndTime, eventPricePerPlayer, eventDescription, eventLocation } = req.body;
		const exist = await Event.find({ groupName });
		if (exist.length>0) {
			console.log(exist);
			res.send('Event Name Already Exist!');
		} else {
			const s = new Event({
				groupName,
				eventOwner,
				eventName,
				eventDate,
				eventStartTime,
				eventEndTime,
				eventPricePerPlayer,
				eventDescription,
				eventLocation
			});
			await s.save();
			res.send('Event Successfully Created!!!');
	  }
	});
  
	//FETCH EVENTS
	app.get('/api/event/get', async (req, res) => {
		const events = await Event.find({});
		res.send(events);
	});
  
	//UPDATE EVENTS
	app.post('/api/event/update', async (req, res) => {
		const { _id, groupName, eventOwner, eventName, eventDate, eventStartTime, eventEndTime, eventPricePerPlayer, eventDescription, eventLocation } = req.body;
		await Event.updateOne({
			_id
		}, {
			$set: { groupName, eventOwner, eventName, eventDate, eventStartTime, eventEndTime, eventPricePerPlayer, eventDescription, eventLocation},
		})
			.exec()
			.then((res) => {
				console.log(res, 'res');
			})
			.catch((err) => {
				console.log(err, 'err');
			});
		res.send('Successfully Updated!!!');
	});

	//DELETE EVENTS
	app.post('/api/event/delete', async (req, res) => {
		const { _id } = req.body;
		await Event.findByIdAndRemove({_id});
		res.send('Deleted!!');
	}); 
};