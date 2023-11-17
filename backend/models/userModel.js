const { model, Schema } require = ("../connection");

const myschema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},   
    password: {type: String, required: true},   
    avatar: {type: String, default: ""},
    createdAt: Date
})