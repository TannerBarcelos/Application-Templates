const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db/connectDB');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(require('./routes/routes.js'));

const PORT = process.env.PORT || 5151;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
