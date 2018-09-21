const express = require('express');
const cors = require('cors');
const clients = require('./clients.json');

var app = express();
app.use(cors());
app.get('/clients.json', function(req, res) {
	setTimeout(function(event) {
		res.send(clients);
	}, 1500);
});
app.listen(4000, (err) => {
	if (err) throw err;
	console.log(`Server has started on port 4000`);
});
