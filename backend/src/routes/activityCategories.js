const express = require('express');
const router = express.Router();
const { ActivityCategory } = require('../models');

// Ruta para obtener todas las categorías de actividades
router.get('/', async (req, res) => {
    try {
        const categories = await ActivityCategory.findAll();
        res.json(castegories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching activity categories' });
    }
});

module.exports = router;
