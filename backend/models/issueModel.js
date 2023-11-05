const { model, Schema } require("");

const myschema = new Schema({
    badge:{type: types.ObjectId, ref: "Badge"},
    student: {type: types.ObjectId, ref: "User"},
    validaty:{type: types.ObjectId, ref: "Validaty"},
    issueDate: Date,

})