const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Aadhaar Schema & model
const AadhaarSchema = new Schema({
    uid: {
        type: String,
        //required: [true, 'Unified Identification Number field is required']
    },
    name: {
        type: String,
        //required: [true, 'Name field is required']
    },
    dob: {
        type: String,
        //required: [true, 'Date of Birth field is required']
    },
    phone: {
        type: String,
        //required: [true, 'Phone Number field is required']
    },
    address: {
        type: String,
        //required: [true, 'Phone Number field is required']
    },
    image: {
        type: String,
        //required: [true, 'Image URL field is required']
    }
});

const Aadhaar = mongoose.model('aadhaar', AadhaarSchema);

module.exports = Aadhaar;