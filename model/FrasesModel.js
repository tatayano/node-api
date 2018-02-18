var mongo = require('../dbs/mongo');

function FrasesModel() {};

function getCollection() {
  return mongo.collection('frases');
};

FrasesModel.prototype.findAll = function(cb) {
  getCollection()
    .find({}, cb);
};

FrasesModel.prototype.findOne = function(id, cb) {
  getCollection()
    .findOne({ _id: mongo.ObjectId(id) }, cb);
};

FrasesModel.prototype.create = function(frase, cb) {
  getCollection()
    .save({ txt: frase }, cb);
};

FrasesModel.prototype.delete = function(id, cb) {
  getCollection()
    .remove({ _id: mongo.ObjectId(id) }, cb);
};

module.exports = new FrasesModel();
