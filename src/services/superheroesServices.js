import { Superhero } from '../db/models/superheroesModel.js'
import calcPaginationData from '../utils/calcPaginationData.js'

export const getAllSuperheroes = async ({ page, perPage }) => {
  const skipPage = (page - 1) * perPage
  const request = Superhero.find()

  const superheroes = await request.skip(skipPage).limit(perPage)
  const totalItems = await Superhero.find().merge(request).countDocuments()
  const { totalPages, hasNextPage, hasPreviousPage } = calcPaginationData({
    total: totalItems,
    page,
    perPage,
  })
  return {
    superheroes,
    page,
    perPage,
    totalItems,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  }
}

export const getSuperhero = async (filter) => {
  const superhero = await Superhero.findOne(filter)
  return superhero
}

export const createSuperhero = async (payload) => {
  const superhero = await Superhero.create(payload)
  return superhero
}

export const deleteSuperhero = async (_id) => {
  const superhero = await Superhero.findOneAndDelete({ _id })
  return superhero
}

export const updateSuperhero = async (_id, payload) => {
  const superhero = await Superhero.findOneAndUpdate(
    { _id },
    { $set: payload },
    { new: true },
  )
  return superhero
}
