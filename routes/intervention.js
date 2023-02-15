const express = require('express');
const interventionCtrl = require('../controllers/intervention');
const auth = require('../middleware/auth');
const router = express.Router();

// POST
// Ajoute une intervention
router.post('/', auth, interventionCtrl.createIntervention);

// GET
// Liste les interventions d'un agent
router.get('/', auth, interventionCtrl.getInterventionByAgent);

// GET
// Liste toutes les interventions
router.get('/all', interventionCtrl.getInterventions);

// DELETE
// Supprime une intervention
router.delete('/:id', auth, interventionCtrl.deleteIntervention);

module.exports = router;

