const { model, Schema, types } = require("../connection");

const myschema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},   
    password: {type: String, required: true},   
    avatar: {type: String, default: ""},
    createdAt: Date,
    emailVerified: {type: Boolean, default: false},
});



module.exports = model('users', myschema);