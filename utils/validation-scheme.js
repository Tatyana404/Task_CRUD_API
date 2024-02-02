const yup = require("yup");

module.exports.TODO_SCHEMA = yup.object({
  body: yup
    .string()
    .matches(/^.{2,}$/, "Cannot create an empty list")
    .trim()
    .required(),
  isDone: yup.boolean(),
});
