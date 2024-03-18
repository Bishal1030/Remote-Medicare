const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    carCategory: String,
    name: String,
    number: String,
    email: String,
    date: Date
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;