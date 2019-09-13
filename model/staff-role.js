const mongoose = require("mongoose");

const staffRoleSchema = new mongoose.Schema({
    staffrole: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staff-role', staffRoleSchema);
