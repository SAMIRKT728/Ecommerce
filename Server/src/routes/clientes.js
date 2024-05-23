const express = require('express');
const respuesta = require('../red/respuestas');

const router = express.Router();

router.get('/', function(req, res){
    respuesta.succes(req, res, 'Todo Ok', 200)
}) 

module.exports = router;