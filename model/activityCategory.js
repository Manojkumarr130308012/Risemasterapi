const mongoose = require("mongoose");

const activityCategorySchema = new mongoose.Schema({
    activityCategory: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('activityCategory', activityCategorySchema);
