const express = require('express');

const teams = require('../routes/teams');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/teams', teams);
}