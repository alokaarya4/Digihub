const { model, Schema, Types } = require ("../connection");

const myschema = new Schema({
    badge:{type: Types.ObjectId, ref: "badge"},
    student: {type: Types.ObjectId, ref: "users"},
    validaty:{type: String, default: "No Expiry"},
    issueDate: Date,

})

module.exports = model('issue', myschema);