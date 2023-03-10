const Intervention = require("../models/Intervention");

exports.createIntervention = (req, res, next) => {

    const intervention = new Intervention({
        ...req.body,
        numAgent: req.auth.numAgent
    });

    intervention.save()
        .then(() => {
            res.status(201).json({success: 'Intervention enregistrée !'})
        })
        .catch(error => {
            res.status(400).json({error})
        })
};

exports.getInterventionByAgent = (req, res, next) => {
    Intervention.find({numAgent: req.auth.numAgent})
        .then(interventions => res.status(200).json(interventions))
        .catch(error => res.status(400).json({error}));
}

exports.getInterventions = (req, res, next) => {
    Intervention.find()
        .then(interventions => res.status(200).json(interventions))
        .catch(error => res.status(400).json({error}));
}

exports.deleteIntervention = (req, res, next) => {

    Intervention.findOne({_id: req.params.id})
        .then((intervention) => {
            if (intervention.numAgent !== req.auth.numAgent) {
                res.status(401).json({message: 'Ce n\'est pas votre intervention'});
            } else {
                Intervention.deleteOne({_id: req.params.id})
                    .then(() => res.status(200).json({success: 'Intervention supprimée !'}))
                    .catch(error => res.status(400).json({error}));
            }
        })
        .catch((error) => {
            res.status(400).json({error});
        });
}