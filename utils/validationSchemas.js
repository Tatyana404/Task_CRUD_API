const yup = require('yup')

module.exports.VALID_TODO = yup.object({
  body: yup
    .string()
    .matches(/^[\w][\w\W]{2,}$/, 'Сannot create an empty list')
    .trim()
    .required(),
  isDone: yup.boolean()
})
