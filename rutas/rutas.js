var express = require('express');
var router = express.Router();

router.get('/', c_inicio);

router.get('/mantenimientos', c_mantenimientos);
router.get('/procesos', c_procesos);
router.get('/reportes', c_reportes);

function c_inicio(req, res){
    res.render('index',{});
}

function c_mantenimientos(req, res){
    res.render('mantenimientos',{});
}

function c_procesos(req, res){
    res.send('procesos');
}

function c_reportes(req, res){
    res.send('reportes');
}

module.exports = router;