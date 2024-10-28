import multer from 'multer'
import createHttpError from 'http-errors'

const storage = multer.memoryStorage()

const fileFilter = (req, file, callback) => {
  const extension = file.originalname.split('.').pop()
  if (extension === 'exe') {
    return callback(createHttpError(400, '.exe file not allowed'))
  }
  callback(null, true)
}

export const upload = multer({
  storage,
  fileFilter,
})
