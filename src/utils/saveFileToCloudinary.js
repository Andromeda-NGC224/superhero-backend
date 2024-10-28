import { v2 as cloudinary } from 'cloudinary'
import { env } from '../utils/env.js'

const cloud_name = env('CLOUDINARY_CLOUD_NAME')
const api_key = env('CLOUDINARY_API_KEY')
const api_secret = env('CLOUDINARY_API_SECRET')

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
})

export const saveFileToCloudinary = async (file, folder) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        },
      )
      uploadStream.end(file.buffer)
    })

    return result.secure_url
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    throw new Error('Could not upload file to Cloudinary')
  }
}
