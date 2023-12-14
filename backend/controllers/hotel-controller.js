import Hotel from "../models/hotels.js"

export const createHotel  = async (req, res)=> {

    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(201).json({
            message : "Hotel created successfully",
            savedHotel
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure adding hotel"
        })
    }
}

export const updateHotel  = async (req, res)=> {

    const {id} = req.params

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set : req.body}, {new : true})
        
        res.status(200).json({
            message : "Hotel updated successfully",
            updatedHotel
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure updating hotel"
        })
    }
}

export const deleteHotel  = async (req, res)=> {

    const {id} = req.params

    try {
        // This database operation will not return anything back 
        // it'll just delete entry in database

        await Hotel.findByIdAndDelete(id)
        
        res.status(200).json({
            message : "Hotel deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure deleting hotel"
        })
    }
}


export const getHotel  = async (req, res)=> {

    const {id} = req.params

    try {

        const hotel = await Hotel.findById(id)
        
        res.status(200).json({
            message : "Hotel found successfully",
            hotel
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure finding hotel"
        })
    }
}

export const getAllHotels  = async (req, res)=> {


    try {

        const hotels = await Hotel.find()
        
        res.status(200).json({
            message : "All Hotels found successfully",
            hotels
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure finding all hotels"
        })
    }
}