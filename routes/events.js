/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { validatorJWT } = require('../middlewares/validator-jwt');
const { check } = require('express-validator');
const { fileValidator } = require('../middlewares/file-validator');
const { createEvent, deleteEvent, updateEvent, getEvents } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validatorJWT );

router.get(
    '/',
    [ // Middlewares

    ], 
    getEvents 
);

router.post(
    '/',
    [ // Middlewares
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de Inicio es obligatoria!').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria!').custom( isDate ),
        fileValidator
    ], 
    createEvent
);

router.put(
    '/:id',
    [ // Middlewares
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de Inicio es obligatoria!').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria!').custom( isDate ),
        fileValidator    
    ], 
    updateEvent 
);

router.delete(
    '/:id', 
    [ // Middlewares
      
    ],
     deleteEvent 
);

module.exports = router;