import asyncHandler from 'express-async-handler'
import CarModel from '../models/carModel.js'

/**
 * @method - POST
 * @description - register a new car's telemetrics
 * @route - /api/metrics/reg
 * @access - public
 */

const registerMetrics = asyncHandler(async (req, res) => {
  const { owner, name, licenseNumber, model } = req.body
  const {
    engineTemp,
    speed,
    longitude,
    latitude,
    fuelConsumption,
    brakeOilLevel,
    sharpAcceleration,
  } = req.body.telemetrics

  let carExists = await CarModel.findOne({
    licenseNumber,
  })

  if (carExists) {
    res.status(400)
    throw new Error('car already registered, updates can only be done!')
  }

  const newCar = new CarModel({
    owner,
    name,
    licenseNumber,
    model,
    telemetrics: {
      engineTemp,
      speed,
      longitude,
      latitude,
      fuelConsumption,
      brakeOilLevel,
      sharpAcceleration,
    },
  })

  const saveCar = await newCar.save()

  if (saveCar) {
    res.status(201).json({
      ...saveCar._doc,
    })
  } else {
    res.status(400)
    throw new Error("Invalid User's details")
  }
})

/**
 * @method - GET
 * @description - get list of all car's telemetrics
 * @route - /api/metrics/cars
 * @access - public
 */
const getMetrics = asyncHandler(async (req, res) => {
  try {
    const cars = await CarModel.find({})
    if (cars) {
      res.json(cars)
    } else {
      res.status(404)
      throw new Error('no cars found!')
    }
  } catch (err) {
    res.status(400)
    throw new Error(err.message)
  }
})

/**
 * @method - PUT
 * @description - update the telemetrics or details of a car
 * @route - /api/metrics/edit
 * @access - public
 */
const updateMetrics = asyncHandler(async (req, res) => {
  const { owner, name, licenseNumber, model } = req.body
  const {
    engineTemp,
    speed,
    longitude,
    latitude,
    fuelConsumption,
    brakeOilLevel,
    sharpAcceleration,
  } = req.body.telemetrics

  const car = await CarModel.findById(req.query.id)

  if (car) {
    car.owner = owner || car.owner
    car.name = name || car.name
    car.licenseNumber = licenseNumber || car.licenseNumber
    car.model = model || car.model
    car.telemetrics.engineTemperature = engineTemp || car.telemetrics.engineTemp
    car.telemetrics.speed = speed || car.telemetrics.speed
    car.telemetrics.longitude = longitude || car.telemetrics.longitude
    car.telemetrics.latitude = latitude || car.telemetrics.latitude
    car.telemetrics.fuelConsumption =
      fuelConsumption || car.telemetrics.fuelConsumption
    car.telemetrics.brakeOilLevel =
      brakeOilLevel || car.telemetrics.brakeOilLevel
    car.telemetrics.sharpAcceleration =
      sharpAcceleration || car.telemetrics.sharpAcceleration

    const updatedCar = await car.save()

    res.json({
      updatedCar,
    })
  } else {
    res.status(404)
    throw new Error('car not found!')
  }
})

/**
 * @method - DELETE
 * @description - deletes a car's telemetrics and detials
 * @route - /api/metrics/remove
 * @access - public
 */
const deleteMetrics = asyncHandler(async (req, res) => {
  const car = await CarModel.findById(req.query.id)

  if (car) {
    await car.remove()
    res.json({ message: 'car telemetrics removed' })
  } else {
    res.status(404)
    throw new Error('car not found!!')
  }
})

export { registerMetrics, getMetrics, updateMetrics, deleteMetrics }
