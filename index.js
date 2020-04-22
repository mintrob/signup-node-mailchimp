const express = require('express');
const path = require('path');
const pug = require('pug');

const bodyParser = require('body-parser');

const keys = require('./config/keys');

// App Declaration
const app = express();
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Static Files in Public Directory
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require('./routes/signup')(app);

const PORT = process.env.PORT || 8050;
app.listen(PORT, function() {
	console.log('Successfully started Node Server running on Port: ' + PORT);
});