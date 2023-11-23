
const { model, Schema } = require ("../connection");

const myschema = new Schema({
    name: String,
    contect: String, 
    email: String,
    image: String,
    refID: String,
    course: String,
    createdAt: Date
})