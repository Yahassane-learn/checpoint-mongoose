const mongoose = require('mongoose') ;
//cration model person with attributes 
const personSchema = mongoose.Schema({
        name : {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50
        },
        age : {
        type : Number,
        required: true
        },
        favoriteFoods:{
            type:[String]
        },
        phone : {
            type : Number,
            required: true
        }    
    }
)
module.exports = mongoose.model(Person , personSchema) ;