import express from 'express'
const router = express.Router()
import { getMetrics, registerMetrics } from '../controllers/carControllers.js'

/**
 * @method - POST
 * @parameter - /api/metrics/reg
 * @description - register a car's telemetrics
 * @type - Public
 */
router.post('/reg', registerMetrics)

/**
 * @method - GET
 * @parameter - /api/metrics/cars
 * @description - retrieves all list of cars registered
 * @type - Public
 */
router.get('/cars', getMetrics)

export default router
