import { Router } from 'express'
import authRoutes from './auth.js'
import hotelRoutes from './hotels.js'
import userRoutes from './users.js'

const appRouter = Router()


// Using appRouter

appRouter.use('/users', userRoutes)
appRouter.use('/hotels', hotelRoutes)
// appRouter.use('/rooms')
appRouter.use('/auth', authRoutes)

export default appRouter;

