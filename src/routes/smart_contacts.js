const router = require('express').Router();
const SmartContact = require('../models/smart_contact_model');

router.route('/').get((req, res) => {
    SmartContact.find()
        .then(smartcontacts => res.json(smartcontacts))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
   const name = req.body.name;
   const number = req.body.number;

   const newSmartContact = new SmartContact({
      name,
      number
   });

   newSmartContact.save()
       .then(() => res.json('SMC Added.'))
       .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').get((req, res) => {
   SmartContact.findById(req.params.id)
       .then(smartcontacts => res.json(smartcontacts))
       .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').delete((req, res) => {
   SmartContact.findByIdAndDelete(req.params.id)
       .then(() => res.json(`Deleted ID: ${req.params.id}`))
       .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('update/:id').post((req, res) => {
   SmartContact.findByIdAndUpdate(req.params.id)
       .then(smartcontact => {
         smartcontact.name = req.body.name;
         smartcontact.number = req.body.number;

         smartcontact.save()
             .then(() => res.json(`${req.params.id} has been updated.`))
             .catch(err => res.status(400).json('ERROR: ' + err));
       })
       .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;