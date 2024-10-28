import Joi from 'joi'

export const superheroesAddJoiValid = Joi.object({
  nickname: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Nick повиннен бути рядком',
    'string.min': 'Nick повиннен мати не менше 3 символів',
    'string.max': 'Nick повиннен мати не більше 20 символів',
    'any.required': 'Поле nickname - обовязкове',
  }),
  real_name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Імя повинно бути рядком',
    'string.min': 'Імя повинно повинно мати не менше 3 символів',
    'string.max': 'Імя повинно повинно мати не більше 20 символів',
    'any.required': 'Поле з імям - обовязкове',
  }),
  origin_description: Joi.string().required().min(3),
  superpowers: Joi.string().required().min(3),
  catch_phrase: Joi.string().required().min(3),
  Images: Joi.array().items(Joi.string()),
})

export const superheroesPatchJoiValid = Joi.object({
  nickname: Joi.string().min(3).max(20).messages({
    'string.base': 'Nick повиннен бути рядком',
    'string.min': 'Nick повиннен мати не менше 3 символів',
    'string.max': 'Nick повиннен мати не більше 20 символів',
  }),
  real_name: Joi.string().min(3).max(20).messages({
    'string.base': 'Імя повинно бути рядком',
    'string.min': 'Імя повинно повинно мати не менше 3 символів',
    'string.max': 'Імя повинно повинно мати не більше 20 символів',
  }),
  origin_description: Joi.string().min(3),
  superpowers: Joi.string().min(3),
  catch_phrase: Joi.string().min(3),
  Images: Joi.array().items(Joi.string()),
})
