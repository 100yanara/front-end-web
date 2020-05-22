import * as Yup from 'yup';
import {
  cantBeEmptyConfirmPassword,
  cantBeEmptyEmail,
  cantBeShortName,
  invalidEmail,
  cantBeEmptyName,
  cantBeShortPassword,
  cantBeVariousPassword,
  isSamePassword,
  cantBeEmptyPassword,
} from 'constants/validations';

//SignUp Email Validations Schema
const validationSchemaSignUpEmail = Yup.object().shape({
  name: Yup.string()
    .min(2, cantBeShortName)
    .required(cantBeEmptyName),
  email: Yup.string()
    .email(invalidEmail)
    .required(cantBeEmptyEmail),
  password: Yup.string()
    .min(6, cantBeShortPassword)
    .matches(
      /^.*(?=.{6,15})(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
      cantBeVariousPassword
    )
    .required(cantBeEmptyPassword),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), undefined], isSamePassword)
    .required(cantBeEmptyConfirmPassword),
});

//SignIn Email Validations Schema
const validationSchemaSignInEmail = Yup.object().shape({
  email: Yup.string()
    .email(invalidEmail)
    .required(cantBeEmptyEmail),
  password: Yup.string()
    .min(6, cantBeShortPassword)
    .required(cantBeEmptyPassword),
});

export { validationSchemaSignUpEmail, validationSchemaSignInEmail };
