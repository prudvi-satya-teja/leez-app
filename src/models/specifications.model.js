const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema({
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
    name: { type: String, required: true },
});

const Specifications = mongoose.model("specifications", specificationSchema);

module.exports = Specifications;


