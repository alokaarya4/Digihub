const { model, Schema } = require ("../connection");

const myschema = new Schema({
     title: String,
     technolodgy: String,
     badgeID: String,
     image: String, default: "",
     createdAt: Date,
     description: String
})

module.exports = model('badge', myschema);

