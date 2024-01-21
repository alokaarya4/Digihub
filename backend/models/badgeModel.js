const { model, Schema } = require ("../connection");

const myschema = new Schema({
     badgeId: String,
     title: String,
     category: String,
     description: String,
     image: {type : String, default: "myfile"},
     createdAt: Date
     
})

module.exports = model('badge', myschema);

