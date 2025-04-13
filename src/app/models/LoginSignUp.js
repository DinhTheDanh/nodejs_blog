const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSingUp = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('LoginSignUp', LoginSingUp);
