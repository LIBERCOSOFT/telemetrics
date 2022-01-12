import express from 'express'
const router = express.Router()
import {
  deleteMetrics,
  getMetrics,
  registerMetrics,
  updateMetrics,
} from '../controllers/carControllers.js'

/**
 * @method - POST
 * @parameter - /api/metrics/reg
 * @description - register a car's data
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

/**
 * @method - PUT
 * @parameter - /api/metrics/edit
 * @description - edit data of a registered car
 * @type - Public
 */
router.put('/edit', updateMetrics)

/**
 * @method - DELETE
 * @parameter - /api/metrics/remove
 * @description - deletes the data of a registered car
 * @type - Public
 */
router.delete('/remove', deleteMetrics)

export default router
