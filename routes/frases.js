var express = require('express');
var router = express.Router({ mergeParams: true });
var FrasesModel = require('../model/FrasesModel');
var FrasesController = require('../controller/FrasesController');

var frases = [{
  id: 1,
  txt: 'Para sucesso de uns, tristeza de muitos.'
}, {
  id: 2,
  txt: 'Uns com tanto e outros com nada.'
}];

router.get('/', FrasesController.findAll.bind(FrasesController));

router.get('/:id', FrasesController.findOne.bind(FrasesController));

router.delete('/:id', FrasesController.delete.bind(FrasesController));

router.post('/', FrasesController.create.bind(FrasesController));

module.exports = router;
