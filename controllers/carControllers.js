import asyncHandler from 'express-async-handler'
import CarModel from '../models/carModel.js'

/**
 * @method - POST
 * @description - register a new car's telemetrics
 * @route - /api/metrics/reg
 * @access - public
 */

const registerMetrics = asyncHandler(async (req, res) => {
  const { carOwner, carName, carLicenseNumber, carModel } = req.body
  const {
    engineTemperature,
    carSpeed,
    carLongitude,
    carLatitude,
    fuelConsumption,
    brakeOilLevel,
    sharpAcceleration,
  } = req.body.carTelemetrics

  let carExists = await CarModel.findOne({
    carLicenseNumber,
  })

  if (carExists) {
    res.status(400)
    throw new Error('Car already registered, Updates can only be done!')
  }

  const newCar = new CarModel({
    carOwner,
    carName,
    carLicenseNumber,
    carModel,
    carTelemetrics: {
      engineTemperature,
      carSpeed,
      carLongitude,
      carLatitude,
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

export { registerMetrics }
