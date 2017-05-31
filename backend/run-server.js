/**
 * First API code. No patterns, no refactor yet.
 */

"use strict";

(function(){

	const express = require("express"),
	      bodyParser = require("body-parser");

	let application = express();
	    application.use(bodyParser.urlencoded({extended: true}));
	    application.use(bodyParser.json());

	let port = process.env.PORT || 3000;

	let router = express.Router();

	router.get("/", (req, res) => {
		res.json({ message: "Welcome to my world" });
	});

	application.use(router);

	application.listen(port);
	console.log("Server listening on port: " + port);
})();