const yup = require("yup");

module.exports.TASK_CREATE_SCHEMA = yup.object({
    body: yup
      .string()
      .trim()
      .min(2, "Task body must be at least 2 characters long")
      .max(500, "Task body must not exceed 500 characters")
      .required("Task body is required"),
    isDone: yup.boolean().default(false),
  })
  .noUnknown(true, "Cannot include unknown fields");

module.exports.TASK_UPDATE_SCHEMA = yup.object({
    body: yup
      .string()
      .trim()
      .min(2, "Task body must be at least 2 characters long")
      .max(500, "Task body must not exceed 500 characters"),
    isDone: yup.boolean(),
  })
  .noUnknown(true, "Cannot include unknown fields")
  .strict(true);
