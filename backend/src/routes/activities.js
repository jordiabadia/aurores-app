const express = require('express');
const router = express.Router();
const { Activity } = require('../models');
const authMiddleware = require('../middleware/auth');

// Ruta para obtener todas las actividades
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching activities' });
  }
});

// Ruta para crear una nueva actividad
router.post('/', authMiddleware, async (req, res) => {
  try {
    const newActivity = await Activity.create(req.body);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: 'Error creating activity' });
  }
});

// Ruta para actualizar una actividad existente
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedActivity = await Activity.update(req.body, {
      where: { activity_id: id }
    });
    if (updatedActivity[0] === 0) return res.status(404).json({ error: 'Activity not found' });
    const activity = await Activity.findByPk(id);
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: 'Error updating activity' });
  }
});

// Ruta para eliminar una actividad
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Activity.destroy({
      where: { activity_id: id }
    });
    if (deleted === 0) return res.status(404).json({ error: 'Activity not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting activity' });
  }
});

module.exports = router;
