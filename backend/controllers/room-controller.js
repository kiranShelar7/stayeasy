import Room from "../models/room.js";
import Hotel from '../models/hotels.js';

export const createRoom = async (req, res,next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save()

        try {
           await Hotel.findByIdAndUpdate(hotelId, {
                $push : {
                    rooms : savedRoom._id,
                }
           }) 
        } catch (error) {
            next(error)
        }

        res.status(200).json(savedRoom)

    } catch (error) {
        next(error)
    }

}

export const updateRoom = async (req, res,next) => {


    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, 
            {$set : req.body}, 
            {new : true}
        )

        res.status(200).json(updatedRoom)

    } catch (error) {
        next(error)
    }

}

export const deleteRoom  = async (req, res)=> {

    const hotelId = req.params.hotelId;

    const {id} = req.params

    try {
        // This database operation will not return anything back 
        // it'll just delete entry in database

        await Room.findByIdAndDelete(id);

        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull : {rooms : req.params.id}
            })
        } catch (error) {
            
        }
        
        res.status(200).json({
            message : "Room deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure deleting Room"
        })
    }
}


export const getRoom  = async (req, res)=> {

    const {id} = req.params

    try {

        const room = await Room.findById(id)
        
        res.status(200).json({
            message : "Room found successfully",
            room
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure finding room"
        })
    }
}

export const getAllRooms  = async (req, res)=> {


    try {

        const rooms = await Hotel.find()
        
        res.status(200).json({
            message : "All Hotels found successfully",
            rooms
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure finding all hotels"
        })
    }
}