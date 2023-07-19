const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res = response ) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email })
        
        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            });
        }

         user = new User( req.body );

         // Encriptar Password
         const salt = bcrypt.genSaltSync(10);
         user.password = bcrypt.hashSync( password, salt );

        await user.save();

        // Generar JWT
        const token = await generateJWT( user.id, user.name );
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}


const loginUser = async(req, res = response ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })
        
        if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }
        
        // Confirmar los Passwords
        const validPasswords = bcrypt.compareSync( password, user.password );

        if( !validPasswords ) {
            return res.status(400).json({
            ok: "false",
            msg: "Password Incorrecto"
          });
        }

        // Generar JWT
        const token = await generateJWT( user.id, user.name );

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}


const revalidateToken = async(req, res = response ) => {

    const { uid, name } = req;

    const token = await generateJWT( uid, name );

    res.json({
        ok: true,
        token 
    })
}


module.exports = {
    createUser,
    loginUser,
    revalidateToken
}