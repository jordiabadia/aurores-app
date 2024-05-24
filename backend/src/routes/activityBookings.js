const express = require('express');
const router = express.Router();
const { ActivityBooking } = require('../models');

// Ruta para obtener todas las reservas de actividades
router.get('/', async (req, res) => {
    try {
        const bookings = await ActivityBooking.findAll();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching activity bookings' });
    }
});

module.exports = router;
