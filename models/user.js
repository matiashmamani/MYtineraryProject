const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String
});

module.exports = mongoose.model('User', UserSchema);