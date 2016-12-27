// Use express.js to create a server
// Jquery is the selector based technology: can select tag, class, id
var express = require("express");//found in the node_moudles: if not found locally then find remotely
var bodyParser = require("body-parser");

// Specify the public folder is the default folder of the frontend files
// In node.js, it has two constant: __dirname:current dir of the current folder, __filename

var app = express();
var service = require("./routes/service");
var cal = require("./routes/cal");

console.log(__dirname);
console.log(__filename);
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/rest/service", service);
app.use("/rest/cal", cal);

app.get("/show/server/directory", function(req, resp){
	resp.send(__dirname);
})

app.get("/:filename", function(req, resp){
	var filename = req.params.filename;
	resp.sendFile(__dirname + "/public/" + filename + ".html");
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is started, listen on port " + port);