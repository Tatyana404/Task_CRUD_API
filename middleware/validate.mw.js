const { VALID_TODO } = require('../utils/validationSchemas')

module.exports = async (req, res, next) => {
  try {
    req.body = await VALID_TODO.validate(req.body)
    next()
  } catch (error) {
    res.status(400).send(error.message)
  }
}
