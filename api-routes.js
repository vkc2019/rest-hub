//initialize the express router

// this is great learning with node and jenkins along with git
let router =  require('express').Router();

var contactController = require('./contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);   

router.get('/',function(req,res){
    res.json(
        {
            status:'API its working',
            message: 'welcome to resthub crafted with love'
        }
    )
});

module.exports = router;
