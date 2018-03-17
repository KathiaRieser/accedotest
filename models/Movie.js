const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    id: String,
    title: String,
    url: String, 
    duration: Number,
    cover: String
   
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

var Movie = mongoose.model("Movie", resultSchema);
module.exports = Movie;