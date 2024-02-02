const { TODO_SCHEMA } = require("../utils/validation-scheme");

module.exports = async (req, res, next) => {
  try {
    req.body = await TODO_SCHEMA.validate(req.body);
    
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
