const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenghth: 50,

    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLenghth: 20,
    },
    type: {
        type: String,
        default: "expense",
    },
    date:{
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        
    },
    description: {
        type: String,
        trim: true,
        maxLenghth: 100,
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);