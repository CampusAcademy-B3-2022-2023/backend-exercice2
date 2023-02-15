const express = require('express');
const agentCtrl = require('../controllers/agent');
const auth = require('../middleware/auth');
const router = express.Router();

// POST
// Enregistre un nouvel agent
router.post('/register', agentCtrl.signup);

// POST
// Log un agent
router.post('/login', agentCtrl.login);

router.post('/update', auth, agentCtrl.updateAgent);

module.exports = router;