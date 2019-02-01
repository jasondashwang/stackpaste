const Joi = require('joi');

const NotesSchema = Joi.object().keys({
  _id: Joi.string().allow(''),
  body: Joi.string().required().allow(''),
});


const FileSchema = Joi.object().keys({
  _id: Joi.string().allow(''),
  title: Joi.string().required(),
  body: Joi.string().required().allow(''),
  syntax: Joi.string().required().allow(''),
});

const PasteSchema = Joi.object().keys({
  title: Joi.string().required().allow(''),
  description: Joi.string().required().allow(''),
  files: Joi.array().items(FileSchema.required()),
  notes: NotesSchema.required(),
});

const validatePayload = (req, res, next) => {
  const result = Joi.validate(req.body, PasteSchema);
  if (result.error) {
    const err = new Error(`Malformed request ${JSON.stringify(req.body)}`);
    err.status = 400;
    next(err);
  } else {
    next();
  }
};

module.exports = validatePayload;
