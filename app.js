const express = require('express');
const mongoose = require('mongoose');
const agentRoutes = require('./routes/agent');
const interventionRoutes = require('./routes/intervention');

mongoose.connect('mongodb+srv://ExtraUser:test@cluster0.eje5cvr.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/api/agent', agentRoutes);
app.use('/api/intervention', interventionRoutes);

module.exports = app;