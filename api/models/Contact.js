const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true },
        email: { type: String, required: true},
        subject: { type: String, required: false},
        message: { type: String, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', ContactSchema);
