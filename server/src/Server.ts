import * as express from "express";
import {Promise} from "es6-promise";
import * as mysql from "mysql";

const pool = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'woutermolofficial'
});

pool.getConnection(function(err, connection) {
	// connected! (unless `err` is set)
});

const app = express();
const port = 3005;

app.get("/", (request, res) => {
	res.sendFile(__dirname + "/client/index.html");
});

app.use(express.static(__dirname + "/client/"));

app.listen(port);
console.log("Server started on port " + port);
