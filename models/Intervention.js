const mongoose = require('mongoose');

const interventionSchema = mongoose.Schema({
    numAgent: { type: Number, required: true },
    motif: { type: String, required: true},
    date: {type: Date, required: true},
    lieu: {type: String}
});

module.exports = mongoose.model('Intervention', interventionSchema);