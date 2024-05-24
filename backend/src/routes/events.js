const express = require('express');
const router = express.Router();
const { Event } = require('../models');
const authMiddleware = require('../middleware/auth');

// Ruta para obtener todos los eventos
router.get('/', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Error fetching events' });
    }
});

// Ruta para crear un nuevo evento
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, description, start, end } = req.body;

        if (!title || !description || !start || !end) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verifica que las fechas sean válidas
        if (isNaN(new Date(start)) || isNaN(new Date(end))) {
            return res.status(400).json({ error: 'Invalid date format' });
        }

        const newEvent = await Event.create({ title, description, start, end });
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error); // Agrega un log de error
        res.status(500).json({ error: 'Error creating event' });
    }
});


module.exports = router;
