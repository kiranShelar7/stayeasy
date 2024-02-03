import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    maxPeople : {
        type : Number,
        required : true,
    },
    roomNumbers : [{number: Number, unavailableDates: { type : [Date]} }]
     
})

export default mongoose.model('Room', roomSchema)