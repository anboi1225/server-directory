// Back-end service
// get: server --> browser(get html page from server); post: browser --> server(send data to server[backend])
var express = require("express");
var router = express.Router();

router.get("/add/:x/:y", function(req, resp){
	console.log(req.params);
	console.log(req.body);
	var x = req.params.x;
	var y = req.params.y;
	resp.send(x * 1 + y * 1 + "");//everything in frontend is in json format which is string
});

router.post("/add", function(req,resp){
	//console.log("add");
	var x = req.body.x;
	var y = req.body.y;
	console.log(x);
	console.log(y);
	setTimeout(function(){
		resp.send(x*1 + y*1 + "");
	}, 1100)

});

router.get("/multiply", function(req, resp){
	var x = req.params.x;
	var y = req.params.y;
	resp.send(x*y + "");
});

router.post("/multiply", function(req,resp){
	var x = req.body.x;
	var y = req.body.y;
	setTimeout(function(){
		resp.send(x*y + "");
	}, 1000)

});

//router is like naming space by using this way
module.exports = router;