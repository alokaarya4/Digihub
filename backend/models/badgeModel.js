const { model, Schema } = require ("../connection");

const myschema = new Schema({
     studentName: String,
     companyName: String,
     emailAddress: String,
     badgeId: String,
     title: String,
     image: {type: String, default: "file"},
     createdAt: Date,
     
})

module.exports = model('badge', myschema);

