
var mongoose = require('mongoose');


var contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        gender:String,
        phone:String,
        created_date:{
            type:Date,
            default:Date.now
        }
    }
);


// set mongoose model 
var Contact = module.exports = mongoose.model('contact',contactSchema);

module.exports.get = function( callback, limit){
    Contact.find(callback).limit(limit);
}