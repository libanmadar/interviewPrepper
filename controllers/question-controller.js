const Question = require('../models/question-model.js');


exports.create = (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can't be empty, please fill it in"
        });
    }

    
    const question = new Question({
        title: req.body.title || "The Question has not title", 
        content: req.body.content
    });

   
    question.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Question."
        });
    });
};


exports.findAll = (req, res) => {
    Question.find()
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error has occurred while retrieving questions."
        });
    });
};


    


