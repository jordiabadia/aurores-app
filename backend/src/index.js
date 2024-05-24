const express = require('express');
const cors = require('cors'); // Importa cors
const sequelize = require('./config/database');
const app = express();
const port = 3000;

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const activityRoutes = require('./routes/activities');
const userRoutes = require('./routes/users');
const activityCategoryRoutes = require('./routes/activityCategories');
const activityBookingRoutes = require('./routes/activityBookings');
const eventRoutes = require('./routes/events');

app.use('/api/activities', activityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/activityCategories', activityCategoryRoutes);
app.use('/api/activityBookings', activityBookingRoutes);
app.use('/api/events', eventRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
