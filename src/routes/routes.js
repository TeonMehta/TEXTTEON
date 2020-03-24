const express = require('express');
const router = express.Router();
const SMC = require('../models/smcModel');


router.get('/',(req, res) => {
    res.send('home');
});


router.get('/smc', async (req, res) => {
   try {
       const smc = await SMC.find();
       res.json(smc);
   } catch (e) {
       res.json(e)
   }
});


router.post('/smc',  async (req, res) => {
   const smc = new SMC({
        name: req.body.name,
       phone: req.body.phone,
       email: req.body.email,
       industry: req.body.industry,
       occupation:req.body.occupation
   });
   try{
       const savedSMC = await smc.save();
       res.json(savedSMC);
   } catch (err) {
       res.json(err)
   }

    // console.log(req.body);
});

module.exports = router;