import User from "../models/user.js"



export const updateUser  = async (req, res)=> {

    const {id} = req.params

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set : req.body}, {new : true})
        
        res.status(200).json({
            message : "User updated successfully",
            updatedUser
        })
    } catch (error) {
        res.status(500).json({
            message : "Error : Failure updating user"
        })
    }
}

export const deleteUser  = async (req, res)=> {

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


export const getUser  = async (req, res)=> {

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

export const getAllUsers  = async (req, res)=> {


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