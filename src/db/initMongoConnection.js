import mongoose from 'mongoose'
import { env } from '../utils/env.js'

const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER')
    const password = env('MONGODB_PASSWORD')
    const url = env('MONGODB_URL')
    const db = env('MONGODB_DB')

    await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${db}`)
    console.log('MongoDB connection established')
  } catch (error) {
    console.log('Error while setting up mongo connection', error)
    throw error
  }
}
export default initMongoConnection
