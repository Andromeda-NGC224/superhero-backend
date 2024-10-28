import express from 'express'
import ctrlWrapper from '../utils/ctrlWrapper.js'
import {
  createSuperheroController,
  deleteSuperheroController,
  getAllSuperheroesController,
  getSuperheroByIdController,
  updateSuperheroController,
} from '../controllers/superheroesController.js'
import isValidId from '../middlewares/isValidId.js'
import validateBody from '../middlewares/validateBody.js'
import {
  superheroesAddJoiValid,
  superheroesPatchJoiValid,
} from '../validationJoi/superheroesJoiValid.js'
import { upload } from '../middlewares/upload.js'

const superheroesRouter = express.Router()

superheroesRouter.get('/', ctrlWrapper(getAllSuperheroesController))

superheroesRouter.get(
  '/:id',
  isValidId,
  ctrlWrapper(getSuperheroByIdController),
)

superheroesRouter.post(
  '/',
  upload.array('Images', 5),
  validateBody(superheroesAddJoiValid),
  ctrlWrapper(createSuperheroController),
)

superheroesRouter.patch(
  '/:id',
  upload.array('Images', 5),
  isValidId,
  validateBody(superheroesPatchJoiValid),
  ctrlWrapper(updateSuperheroController),
)

superheroesRouter.delete(
  '/:id',
  isValidId,
  ctrlWrapper(deleteSuperheroController),
)

export default superheroesRouter
