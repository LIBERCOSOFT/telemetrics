import mongoose from 'mongoose'

const carSchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    telemetrics: {
      engineTemp: { type: Number },
      speed: { type: Number },
      longitude: { type: Number },
      latitude: { type: Number },
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
