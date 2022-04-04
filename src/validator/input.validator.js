import Joi from "joi";

export const InputValidator = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.empty": 'Field "Name" cannot be empty!',
    "string.min": 'Field "Name" must contain at least 3 Latin characters',
  }),
  description: Joi.string().min(20).max(1000).required().messages({
    "string.empty": 'Field "Description" cannot be empty!',
    "string.min":
      'Field "Description" must contain at least 20 Latin characters',
    "string.max": 'Field "Description" may contain up to 1000 Latin characters',
  }),
});
