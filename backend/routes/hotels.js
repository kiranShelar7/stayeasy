
import { Router } from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel-controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelRoutes = Router()

hotelRoutes.post('/',verifyAdmin,createHotel)
hotelRoutes.put('/:id',verifyAdmin,updateHotel)
hotelRoutes.delete('/:id',verifyAdmin,deleteHotel)
hotelRoutes.get('/:id',getHotel)
hotelRoutes.get('/',getAllHotels)


export default hotelRoutes;