const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
   username :{
     type: String,
     required: true,
     min:4,
     max:20,
    unique: true
   },
   email :{
    type: String,
     required: true,
     max:50,
    unique: true
   },
   password :{
    type: String,
     required: true,
     max:30,
    unique: true
   }, 
}, 
   {timestamps: true}
);

module.exports =  mongoose.model("User", UserSchema);