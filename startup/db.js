const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  //const db = config.get('db');
  mongoose.connect('mongodb+srv://divya:divya506@cluster0.1z97m.mongodb.net/test')
    .then(() => winston.info(`Connected to ${db}...`));
}