const { model, Schema } = require ("../connection");

const myschema = new Schema({
    badge:{type: types.ObjectId, ref: "Badge"},
    student: {type: types.ObjectId, ref: "User"},
    validaty:{type: types.ObjectId, ref: "Validaty"},
    issueDate: Date,

})

module.exports = model('issue', myschema);