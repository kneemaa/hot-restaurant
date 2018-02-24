const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let openTables = [
  {name: "tom",
  phone: "1234567890",
  email: "tom@tom.com",
  customerID: 1},
  {name: "matt",
  phone: "1555567890",
  email: "matt@matt.com",
  customerID: 2},
  {name: "tomtom",
  phone: "9999999999",
  email: "tomtom@tomtom.com",
  customerID: 3},
  {name: "tom2",
  phone: "1234567890",
  email: "tom@tom.com",
  customerID: 4},
  {name: "matt2",
  phone: "1555567890",
  email: "matt@matt.com",
  customerID: 5},
  {name: "tomtom2",
  phone: "9999999999",
  email: "tomtom@tomtom.com",
  customerID: 6}
  ];

let waitList = [{

}];

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,"home.html"));
});

app.get('/view-tables', (req,res) => {
	res.sendFile(path.join(__dirname,"view-tables.html"));
});

app.get('/api/tables', (req,res) => {
	res.json(openTables);
});

app.get('/api/waitlist', (req,res) => {
	res.json(waitList);
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
