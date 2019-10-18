const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('time: ', Date.now());
    next();
});

//models
const UsersRate = require('../models/UsersRate');

router.get('/usersrate', (req, res) => {
    res.json('hola mundo');
});

router.post('/usersrate', (req, res)=>{
    let userRate = new UsersRate();
    console.log(req.body);

    //user, date, comment, rating
    userRate.user=req.body.user
    userRate.date=req.body.date
    userRate.commet=req.body.comment
    userRate.rating=req.body.rating

    userRate.save((err, productstored) =>{
        if(err) res.send('error al registrar el producto');
        res.json({userRate});
    });
});

module.exports = router;