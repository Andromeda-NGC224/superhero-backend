import { Schema, model } from 'mongoose'

const superheroesSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
    Images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

superheroesSchema.post('save', (error, data, next) => {
  // Для виправлення помилки 500 при невірних даних щодо схеми та првацює лише саме при помилці, якщо операція успішна, колбек не запуститься
  error.status = 400
  next()
})

superheroesSchema.pre('findOneAndUpdate', function (next) {
  // options.new = true - повернення нового об'єкта у `res`
  this.options.new = true
  this.options.runValidators = true
  next()
})

superheroesSchema.post('findOneAndUpdate', (error, data, next) => {
  error.status = 400
  next()
})

export const Superhero = model('superheroes', superheroesSchema)
