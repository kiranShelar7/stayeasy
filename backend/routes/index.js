import { Router } from 'express'
import authRoutes from './auth.js'
import hotelRoutes from './hotels.js'

const appRouter = Router()


// Using appRouter

// appRouter.use('/users')
appRouter.use('/hotels', hotelRoutes)
// appRouter.use('/rooms')
appRouter.use('/auth', authRoutes)

export default appRouter;

