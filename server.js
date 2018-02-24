const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;



app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,"home.html"));
});

app.get('/view-tables', (req,res) => {
	res.sendFile(path.join(__dirname,"view-tables.html"));
});



app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
