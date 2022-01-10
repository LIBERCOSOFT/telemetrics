import express from 'express'
const router = express.Router()
import { registerMetrics } from '../controllers/carControllers.js'

/**
 * @method - POST
 * @parameter - /api/metrics/reg
 * @description - register a car's telemetrics
 * @type - Public
 */
router.post('/reg', registerMetrics)

export default router
