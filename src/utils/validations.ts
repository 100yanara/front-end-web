import * as Yup from 'yup';

//SignUpEmail Validations constants
const cantBeEmptyName = '멋진 이름이 있으시잖아요';
const cantBeShortName = '이름은 두글자 이상 입력해주세요';
const cantBeEmptyEmail = '꼭 필요해요';
const invalidEmail = '이메일 주소가 맞나요?';
const cantBeEmptyPassword = '비밀번호를 입력해주세요.';
const cantBeShortPassword = '비밀번호가 너무 짧습니다. (6글자 이상)';
const cantBeVariousPassword =
  '영문, 숫자, 특수문자를 2가지 이상 조합해 주세요.';
const cantBeEmptyConfirmPassword = '비밀번호를 다시 한번 입력해주세요.';
const isSamePassword = '비밀번호가 일치하지 않습니다.';

//SignUpEmail Validations Schema
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

export { validationSchemaSignUpEmail };
