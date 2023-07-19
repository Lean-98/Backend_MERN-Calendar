const { response } = require('express');
const Event = require('../models/Event');
const User = require('../models/User');

const getEvents = async( req, res = response ) => {

    const user = await User.findById(req.uid); 
    const events = await Event.find({ user })
                              .populate('user', 'name');

    res.json({
            ok: true,
            events
    });
}

const createEvent = async( req, res = response ) => {

    // Verificar que tenga el evento
    // console.log(req.body)

    const event = new Event( req.body );

    try {

        event.user = req.uid;

       const eventSaved = await event.save();

       res.json({
            ok: true,
            evento: eventSaved
       })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const updateEvent = async( req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );
        
        if( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un evento con ese id'                
            });
        }

        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento!'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        res.json({
            ok: true,
            event: updatedEvent
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
}

const deleteEvent = async(req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );
        
        if( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un evento con ese id'                
            });
        }

        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio para eliminar este evento!'
            });
        }

         await Event.findByIdAndDelete( eventId );

        res.json({
            ok: true,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
}



module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

