var express = require("express");
var router = express.Router();

var person = {
	records: [
		{name: "Alice", city: "Princeton", country: "USA"},
		{name: "Steven", city: "Berlin", country: "Germany"},
		{name: "Bob", city: "Tokyo", country: "Japan"},
		{name: "Linda", city: "Beijing", country: "China"},
		{name: "Alex", city: "Paris", country: "France"},
		{name: "Frank", city: "London", country: "UK"},
		{name: "Tommy", city: "Shanghai", country: "China"}
	]
};

router.get("/", function(req,resp){ //hardcoded
	var data = {
		name: "Alice",
		age: 78
	};
	resp.json(data);
});

// router.post("/", function(req,resp){ //hardcoded
// 	var data = {
// 		name: "Alice",
// 		age: 78
// 	};
// 	resp.json(data);
// });

router.post("/", function(req, resp){
	resp.json(person);
});

router.get("/:id", function(req, resp){
	resp.json(person.records[req.params.id]);
});

module.exports = router;