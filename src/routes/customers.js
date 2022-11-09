const router = require('express').Router();

const customersControllers = require('../controller/customercontroller');

// TODO: RUTAS 
router.get('/'. customersControllers.list)
router.post('/add', customersControllers.save)
router.get('/update/:id',customersControllers.edit)