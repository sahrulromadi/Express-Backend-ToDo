const { body, validationResult } = require("express-validator");

const validateRequest = [
  body("title")
    .isString()
    .isLength({ min: 3 })
    .withMessage("title harus berupa string dan lebih dari 3 karakter"),
  body("completed").isBoolean().withMessage("completed harus berupa boolean"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "validasi gagal",
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = validateRequest;
