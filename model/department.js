const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const departmentSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    department: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('department', departmentSchema);
