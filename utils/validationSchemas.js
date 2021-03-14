const yup = require('yup')

module.exports.VALID_TODO = yup.object({
  body: Yup.string()
    .matches(/^.{2,}$/, 'Сannot create an empty list')
    .trim()
    .required(),
  isDone: yup.boolean()
})
