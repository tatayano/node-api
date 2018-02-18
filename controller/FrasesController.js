var FrasesModel = require('../model/FrasesModel');
var Promise = require('bluebird');

function FrasesController(Model) {
  this.Model = Promise.promisifyAll(Model);
};

FrasesController.prototype.findAll = function(req, res) {
  console.log(req);
  this.Model.findAllAsync()
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).send();
    });
};

FrasesController.prototype.findOne = function(req, res) {
  this.Model.findOneAsync(req.params.id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).send();
    });
};

FrasesController.prototype.create = function(req, res) {
  this.Model.createAsync(req.body.txt)
    .then(function(result) {
      res.status(201).send();
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).send();
    });
};

FrasesController.prototype.delete = function(req, res) {
  this.Model.deleteAsync(req.params.id)
    .then(function(result) {
      res.status(204).send();
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).send();
    });
};

module.exports = new FrasesController(FrasesModel);
