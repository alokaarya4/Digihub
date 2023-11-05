const { model, Schema } require("");

const myschema = new Schema({
     title: String,
     technolodgy: String,
     badgeID: String,
     image: String, default: "",
     createdAt: Date,
     description: String
})