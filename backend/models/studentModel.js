
const { model, Schema } = require ("../connection");

const myschema = new Schema({
    fullName: {type : String, require: true},
    emailAddress: {type : String, require: true},
    address: {type : String, require: true},
    city: {type : String, require: true},
    country: {type : String, require: true},
    state: {type : String, require: true},
    pinCode: {type : Number, require: true},
    registrationNumber: {type : String, require: true},
    createdAt: Date

})

module.exports = model('student', myschema);