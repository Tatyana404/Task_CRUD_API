const { TASK_CREATE_SCHEMA, TASK_UPDATE_SCHEMA } = require("../utils/validation-scheme");

module.exports.createValidator = async (req, res, next) => {
  try {
    req.body = await TASK_CREATE_SCHEMA.validate(req.body);

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.updateValidator = async (req, res, next) => {
  try {
    req.body = await TASK_UPDATE_SCHEMA.validate(req.body);

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
