import mongoose from 'mongoose'

const carSchema = mongoose.Schema(
  {
    carOwner: {
      type: String,
      required: true,
    },
    carName: {
      type: String,
      required: true,
    },
    carLicenseNumber: {
      type: String,
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    carTelemetrics: {
      engineTemperature: { type: Number },
      carSpeed: { type: Number },
      carLongitude: { type: Number },
      carLatitude: { type: Number },
      fuelConsumption: { type: Number },
      brakeOilLevel: { type: Number },
      sharpAcceleration: { type: Number },
    },
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model('Car', carSchema)

export default Car
