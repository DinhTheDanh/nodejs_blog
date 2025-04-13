const mongoose = require('mongoose');
async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/f9_education_dev', {});
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect false');
    }
}

module.exports = { connect };
