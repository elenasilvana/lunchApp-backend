const express = require('express');
const router = express.Router();

//models
const UsersRate = require('../../models/UsersRate');

router.use(function timeLog(req, res, next){
    console.log('time: ', Date.now());
    next();
});

//show all elements on db
router.get('/', (req, res) => {
    UsersRate.find({}, (err, usersrate)=>{
        if(err) return res.send({
            message: `error al mostrar productos ${err}`
        });
        res.json({usersrate});
       
    })
});

//get element rate info
router.get('/:id', (req, res)=>{
    let id = req.params.id;

    UsersRate.findById(id, (err, usrid)=>{

        if(err) return res.send({
            message: `error ${err}`
        });
        if(!usrid) return res.send({
            message: `The requested information does not exist`
        });
        res.json({usrid});    
    });
});

//add an element to the db
router.post('/', (req, res)=>{
    console.log(req.body);
    
    //user, date, comment, rating
    const userRate = new UsersRate({
        //TODO revisar bien como va a llegar la fecha
        //ahora está como type number
        user: req.body.user,
        date: req.body.date,
        comment: req.body.comment,
        rating: req.body.rating
    });

    userRate.save((err, productstored) =>{
        if(err) res.send('error to save de product');
        res.json({userRate});
    });
});

//modify
router.put('/:id', (req, res)=>{
    let id = req.params.id;

    let update = req.body;
    console.log(update);
    UsersRate.findByIdAndUpdate(id, update, {new: true}, (err, elementUpdated)=>{
        if(err) res.send({message: `error while updating the element ${err}`});
        res.json({element: elementUpdated});
    });
});

router.delete('/:id', (req, res)=>{
    let id = req.params.id;

    UsersRate.findById(id, (err, element)=>{
        if (err) res.send({message: `deletion has not been succesuful`})
        
        element.remove(err => {
            if (err) res.send({
                message: `error deleting item ${err}`
            });
            res.send({
                message: `item has been deleted`
            })
        });
    });
});



module.exports = router;