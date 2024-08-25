const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Require the Routes 
const Cookie = require('./routes/Cookie.cjs');
const GetUser = require('./routes/GetUser.cjs');

// Setup the Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

app.use(cookieParser());

app.use('/', Cookie);
app.use('/', GetUser);

const port = process.env.port || 3000;

app.listen(port, () => console.log('App is running on port 3000'));
