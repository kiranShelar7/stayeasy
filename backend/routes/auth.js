import { Router } from "express";
import { getAuthStatus } from "../controllers/auth-controller.js";

const authRoutes = Router()

authRoutes.get('/',getAuthStatus)

export default authRoutes