import { body, param } from "express-validator";

export const validateEmail = body("email")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("Empty email")
  .isEmail()
  .withMessage("Invalid Email");

export const validatePassword = body("userpassword")
  .isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  .withMessage("Weak Password");

export const validateId = param("id").notEmpty().withMessage("Empty").isJWT().withMessage("Not a valid id");

export const validateString = (field: string, optional: boolean = true) =>
  optional
    ? body(field)
      .trim()
      .escape()
      .isString()
      .withMessage("Invalid String")
      .isEmpty()
      .withMessage("Empty String")
      .optional()
    : body(field)
      .trim()
      .escape()
      .isString()
      .withMessage("Invalid String")
      .notEmpty()
      .withMessage("Empty String");

export const validateRollNo = body("rollno")
  .matches(/^21\d{5}$/)
  .withMessage("Invalid Rollno")
  .optional();

// =============================================================================
//													 derived validation
// =============================================================================

export const validateClass = validateString("userclass")
  .matches(/^\d[A-Z]\d$/)
  .withMessage("Invalid class");

export const validateName = validateString("username", false)
  .isLength({
    min: 3,
    max: 30,
  })
  .withMessage("Chota hai");

export const validatePhoneno = validateString("phoneNo").matches(/^\d{10}$/);
