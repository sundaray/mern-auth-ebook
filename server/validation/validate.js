const Joi = require("joi");

const registrationValidation = (formData) => {
  const schema = Joi.object({
    firstName: Joi.string().required().max(20),
    lastName: Joi.string().required().max(20),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  });

  return schema.validate(formData);
};

const loginValidation = (formData) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  });

  return schema.validate(formData);
};

const passwordResetFormEmailValidation = (formData) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
  });

  return schema.validate(formData);
};

const passwordResetFormPasswordValidation = (formData) => {
  const schema = Joi.object({
    password: Joi.string().required().min(5),
  });

  return schema.validate(formData);
};

module.exports = {
  registrationValidation,
  loginValidation,
  passwordResetFormEmailValidation,
  passwordResetFormPasswordValidation,
};
