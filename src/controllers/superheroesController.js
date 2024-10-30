import {
  createSuperhero,
  deleteSuperhero,
  getAllSuperheroes,
  getSuperhero,
  updateSuperhero,
} from '../services/superheroesServices.js'
import parsePaginationParams from '../utils/parsePaginationParams.js'
import createHttpError from 'http-errors'
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js'

export const getAllSuperheroesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query)

  const superheroes = await getAllSuperheroes({ page, perPage })

  res.status(200).json({
    status: res.statusCode,
    message: 'Successfully found superheroes!',
    data: superheroes,
  })
}

export const getSuperheroByIdController = async (req, res) => {
  const { id } = req.params
  const superhero = await getSuperhero({ _id: id })
  if (!superhero) {
    throw createHttpError(404, 'There is no such superhero, unfortunately')
  }
  res.status(200).json({
    status: res.statusCode,
    message: 'Successfully found superhero!',
    data: superhero,
  })
}

export const createSuperheroController = async (req, res) => {
  const superheroData = {
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
    Images: [],
  }

  if (req.files) {
    try {
      for (const file of req.files) {
        const imageUrl = await saveFileToCloudinary(file, 'superheroes')
        superheroData.Images.push(imageUrl)
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error uploading images', error })
    }
  }

  const superhero = await createSuperhero(superheroData)

  res.status(201).json({
    status: res.statusCode,
    message: `Successfully created superhero!`,
    data: superhero,
  })
}

export const updateSuperheroController = async (req, res) => {
  const { id } = req.params
  const updateData = { ...req.body }

  const existingSuperhero = await getSuperhero({ _id: id })
  if (!existingSuperhero) {
    throw createHttpError(404, 'There is no such superhero, unfortunately')
  }

  if (req.files && req.files.length > 0) {
    try {
      const newImageUrls = []
      for (const file of req.files) {
        const imageUrl = await saveFileToCloudinary(file, 'superheroes')
        newImageUrls.push(imageUrl)
      }

      updateData.Images = existingSuperhero.Images
        ? [...existingSuperhero.Images, ...newImageUrls]
        : newImageUrls
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading images',
        error: error.message,
      })
    }
  }

  const superhero = await updateSuperhero(id, updateData)

  res.status(200).json({
    status: res.statusCode,
    message: `Successfully patched superhero!`,
    data: superhero,
  })
}

export const deleteSuperheroController = async (req, res) => {
  const { id } = req.params
  const superhero = await deleteSuperhero({ _id: id })
  if (!superhero) {
    throw createHttpError(404, 'There is no such superhero, unfortunately.')
  }
  res.status(200).json({
    status: res.statusCode,
    message: `Successfully deleted superhero!`,
    data: superhero,
  })
}
