const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = require(3001);
const app = express();
const router = express.Router();

//this is our mongoose database