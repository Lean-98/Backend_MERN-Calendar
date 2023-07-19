/*
    Rutas de Usuarios / Auth
    host = + /api/auth
*/

const { Router } = require('express');
const { check, } = require('express-validator');
const { fileValidator } = require('../middlewares/file-validator');
const { validatorJWT } = require('../middlewares/validator-jwt');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');

const router = Router();


router.post(
    '/register', 
    [ // Middlewares
        check('name', 'El Nombre es obligatorio!').not().isEmpty(),
        check('email', 'El Mail es obligatorio!').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres!').isLength({ min: 6 }),
        fileValidator
    ],
    createUser 
);

router.post(
    '/', 
    [ // Middlewares
        check('email', 'El Mail es obligatorio!').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres!').isLength({ min: 6 }),
        fileValidator
    ],
    loginUser 
);

router.get(
    '/renew_token', 
    [ // Middlewares
        validatorJWT
    ], 
    revalidateToken 
);



module.exports = router;