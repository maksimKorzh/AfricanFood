const express = require('express');
const path = require('path');
const members = require('./Members');


const app = express();

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

// Init middleware
app.use(logger);

// Gets all members
app.get('/api/members', (reg, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));