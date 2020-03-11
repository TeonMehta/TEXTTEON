const express = require('express');
const smartContactRouter = express.Router();

const smartContacts = [
    {
        name:"name",
        telephone:1234567,
        email:"email"
    },
    {
        name:"name2",
        telephone:1234567,
        email:"email2"
    }
];
smartContactRouter.route('/')
    .get((req,res) => {
        res.render('smart_contacts_list_view', {
            title:"SMARTCONTACTS",
            smartContacts
        });
    });

smartContactRouter.route('/:id')
    .get((req,res) =>{
        const {id} = req.params;
        res.render(
            'smart_contacts_view',
            {
                title: "SMARTCONTACTS",
                smartContact: smartContacts[id]
            }
        );
    });
console.log(smartContacts);
module.exports = smartContactRouter;