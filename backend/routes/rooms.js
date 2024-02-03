import { Router } from "express";
import { createRoom, updateRoom, getAllRooms, deleteRoom, getRoom } from "../controllers/room-controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomRoutes = Router()

roomRoutes.post('/:hotelId',verifyAdmin,createRoom)
roomRoutes.put('/:id',verifyAdmin,updateRoom)
roomRoutes.delete('/:id/:hotelId',verifyAdmin,deleteRoom)
roomRoutes.get('/:id',getRoom)
roomRoutes.get('/',getAllRooms)


export default roomRoutes;