
const { model, Schema } = require ("../connection");

const myschema = new Schema({
    fullname: {type : String, require: true},
    refId: {type : String, require: true},
    email: {type : String, require: true},
    year: {type : Number, require: true},
    course: {type : String, require: true},
    avatar: {type : String, require: true},
    createdAt: Date
})

module.exports = model('students', myschema);