const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
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
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return /^\d{5}-\d{4}$/
                },
                message: 'invalid zip'
            }        
        },
        geo: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
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
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
            },
            message: 'invalid url'
        }
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }

});

module.exports = mongoose.model('user', userSchema);