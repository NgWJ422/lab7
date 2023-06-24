const mongoose = require('mongoose')

const hotel_visitor_recordschema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        Mykad:{
            type: String,
            required: true
        },
        ethnicity:{
            type: String,
            required: true
        },
        citizenship:{
            type: String,
            required: true
        },
        hotel_room_number:{
            type: String,
            required: true
        },
        checkin_date:{
            type: String,
            required: true
        },
        checkin_time:{
            type: String,
            required: true
        },
        checkout_date:{
            type: String,
            required: false
        },
        checkout_time:{
            type: String,
            required: false
        }
    },
    {
        versionKey: false 
    }
)

const hotel_visitor_record = mongoose.model('Visitor record', hotel_visitor_recordschema);
module.exports = hotel_visitor_record;