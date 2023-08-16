const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9998;

app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT))

const mongoURI = process.env.MONGO_URI;

if(!mongoURI) {
  console.log('No environment variable found')
} else {
  mongoose.connect(mongoURI)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))
}