const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            },
            message: 'invalid email'
        }
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z ]+$/
            },
            message: 'invalid city'
        }
    },
    url: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
            },
            message: 'invalid url'
        }
    },
    zip: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^\d{5}-\d{4}$/
            },
            message: 'invalid zip'
        }        
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^\d{1}-\d{3}-\d{3}-\d{4}/
            },
            message: 'invalid zip'
        }    
    }
});

module.exports = mongoose.model('user', userSchema);