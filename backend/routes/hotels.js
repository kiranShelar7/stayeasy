
import { Router } from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel-controller.js";

const hotelRoutes = Router()

hotelRoutes.post('/',createHotel)
hotelRoutes.put('/:id',updateHotel)
hotelRoutes.delete('/:id',deleteHotel)
hotelRoutes.get('/:id',getHotel)
hotelRoutes.get('/',getAllHotels)


export default hotelRoutes;