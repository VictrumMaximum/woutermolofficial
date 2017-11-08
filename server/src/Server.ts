import * as express from "express";
const app = express();
const port = 80;

import TourDatabase from "./TourDatabase";
const tourDB = new TourDatabase({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'woutermolofficial'
});

app.get("/", (req, res) => {
	console.log("Client requested tourpage");
	res.sendFile(__dirname + "/client/Tour/index.html");
});

app.get("/bio", (req, res) => {
	console.log("Client requested biopage");
	res.sendFile(__dirname + "/client/Bio/index.html");
});

app.get("/outofskin", (req, res) => {
	console.log("Client requested albumpage");
	res.sendFile(__dirname + "/client/OutOfSkin/index.html");
});

app.get("/press", (req, res) => {
	console.log("Client requested presspage");
	res.sendFile(__dirname + "/client/Press/index.html");
});

app.get("/contact", (req, res) => {
	console.log("Client requested contactpage");
	res.sendFile(__dirname + "/client/Contact/index.html");
});

app.get("/tourmenu", (req, res) => {
	console.log("Client requested tourmenu");
	res.sendFile(__dirname + "/client/Tourmenu/index.html");
});

app.use(express.static(__dirname + "/client/Tour/"));
app.use(express.static(__dirname + "/client/Bio/"));
app.use(express.static(__dirname + "/client/OutOfSkin/"));
app.use(express.static(__dirname + "/client/Press/"));
app.use(express.static(__dirname + "/client/Contact/"));
app.use(express.static(__dirname + "/client/TourMenu/"));

app.get("/addTour", (req, res) => {
	console.log("Received request to add tour");
	console.log(req.query);
	tourDB.addTour(req.query)
		.then(() => {
			console.log("Added tour");
			res.end();
		}).catch((error) => {
		console.log("Adding tour errored with error " + JSON.stringify(error, null, 2));
		res.end(JSON.stringify({
			error
		}));
	});
});

app.get("/fetchTours", (req, res) => {
	console.log("Received request to show tours");
	tourDB.fetchTours()
		.then((tours) => {
			res.end(JSON.stringify({
				tours
			}));
		}).catch((error) => {
		res.end(JSON.stringify({
			error
		}));
	});
});

app.get("/deleteTour", (req, res) => {
	console.log("Received request to delete tour");
	console.log(req.query);
	const id = req.query.id;
	tourDB.deleteTour(id)
		.then(() => {
			res.end();
		}).catch((error) => {
		res.end(JSON.stringify({
			error
		}));
	});
});

app.listen(port);
console.log("Server started on port " + port);
