import { Router } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user-controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRoutes = Router()

userRoutes.put('/:id',verifyUser,updateUser)
userRoutes.delete('/:id',verifyUser,deleteUser)
userRoutes.get('/:id',verifyUser,getUser)
userRoutes.get('/',verifyAdmin,getAllUsers)


export default userRoutes;