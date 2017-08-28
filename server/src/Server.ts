import * as express from "express";
import {Promise} from "es6-promise";
import * as mysql from "mysql";
import * as QueryBuilder from "querybuilder";

const qb = new QueryBuilder("mysql");

const pool = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'woutermolofficial'
});

const app = express();
const port = 80;

function getConnection(): any {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
			}
			else {
				resolve(connection);
			}
		});
	});
}

function queryDatabase(connection, query: string) {
	return new Promise((resolve, reject) => {
		console.log("Executing query: " + query);
		connection.query(query, function (error, results, fields) {
			// make connection available for pool again, but don't destroy it.
			connection.release();
			if (error) {
				reject(error);
			}
			else {
				resolve(results);
			}
		});
	});
}

app.get("/", (req, res) => {
	console.log("Client requested homepage");
	res.sendFile(__dirname + "/client/index.html");
});

app.use(express.static(__dirname + "/client/"));

app.get("/addTour", (req, res) => {
	console.log("Received request to add tour");
	console.log(req.query);
	const query = qb.insert({
		event: req.query.event,
		begin: req.query.begin,
		city: req.query.city,
		establishment: req.query.establishment
	}).from("tours").call();

	getConnection().then((connection) => {
		return queryDatabase(connection, query);
	}).then(() => {
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
	getConnection().then((connection) => {
		const query = "SELECT * FROM tours";
		return queryDatabase(connection, query);
	}).then((tours) => {
		console.log("Database query succeeded");
		res.end(JSON.stringify({
			tours
		}));
	}).catch((error) => {
		console.log("Database query failed with error " + JSON.stringify(error, null, 2));
		res.end(JSON.stringify({
			error
		}));
	});
});

app.get("/deleteTour", (req, res) => {
	console.log("Received request to delete tour");
	console.log(req.query);
	const id = req.query.id;
	getConnection().then((connection) => {
		const query = "DELETE FROM tours WHERE id=" + connection.escape(id);
		return queryDatabase(connection, query);
	}).then(() => {
		console.log("Database query succeeded");
		res.end();
	}).catch((error) => {
		console.log("Database query failed with error " + JSON.stringify(error, null, 2));
		res.end(JSON.stringify({
			error
		}));
	});
});

app.listen(port);
console.log("Server started on port " + port);
