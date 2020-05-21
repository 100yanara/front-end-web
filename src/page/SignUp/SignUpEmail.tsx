import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//validation
import { Formik } from 'formik';
import { validationSchemaSignUpEmail } from 'utils/validations';
// custom UI
import Layout from 'components/layout';
//TYPE
import { Position } from 'components/Header/type';
import Firebase from 'components/Firebase/firebase';
import * as ROUTES from 'constants/routes';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'recompose';
const useStyles = makeStyles((theme: Theme) => ({
  'sign-up-email-box': {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    width: '100%',
  },
  'sign-up-email-box__sign-up': {
    padding: '1rem 1rem 3rem 1rem',
    color: 'grey',
    border: `1px solid ${theme.palette.grey[300]}`,
    width: '430px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '4px',
  },
  formControl: {
    width: '332px',
  },
  inputBox: {
    height: '40px',
    fontSize: '.9em',
  },
  label: {
    color: 'black',
    fontWeight: 300,
    marginBottom: '5px',
    fontSize: '.9em',
  },
  SignUpButton: {
    width: '332px',
    height: '48px',
    marginTop: '2.5rem',
    background: '#fe7224',
    color: 'white',
    '&:hover': {
      background: '#fe8e4f',
      boxShadow: theme.shadows[1],
    },
  },
  formHelper: {
    color: '#fe8e4f',
  },
}));
interface SignUpEmailProps extends RouteComponentProps<any> {
  firebase: Firebase | null;
}
const SignUpEmail: React.FunctionComponent<SignUpEmailProps> = props => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  const [errors, setError] = React.useState('');
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box component="div" className={classes['sign-up-email-box']}>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirm: '' }}
          onSubmit={(values, { setSubmitting }) => {
            props.firebase
              ?.doCreateUserWithEmailAndPassword(values.email, values.password)
              .then(authUser => {
                console.log(authUser);
                props.history.push(ROUTES.HOME);
              })
              .catch(error => {
                setError(error);
              });
            setSubmitting(false);
          }}
          validationSchema={validationSchemaSignUpEmail}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isValid,
            } = props;
            return (
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className={classes['sign-up-email-box__sign-up']}
              >
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  component="div"
                  margin="normal"
                >
                  <label className={classes.label} htmlFor="sign-up-email-name">
                    이름 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-up-email-name"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.inputBox}
                    placeholder="이름을 입력해주세요."
                  />
                  <FormHelperText margin="dense" className={classes.formHelper}>
                    {errors.name && touched.name && errors.name}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  component="div"
                  margin="normal"
                >
                  <label
                    className={classes.label}
                    htmlFor="sign-up-email-email"
                  >
                    이메일 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-up-email-email"
                    value={values.email}
                    name="email"
                    placeholder="ID@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.inputBox}
                  />
                  <FormHelperText margin="dense" className={classes.formHelper}>
                    {errors.email && touched.email && errors.email}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  component="div"
                  margin="normal"
                >
                  <label
                    className={classes.label}
                    htmlFor="sign-up-email-password"
                  >
                    비밀번호 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-up-email-password"
                    placeholder="영문,숫자,특수문자 2가지 조합 6~15자"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.inputBox}
                  />
                  <FormHelperText margin="dense" className={classes.formHelper}>
                    {errors.password && touched.password && errors.password}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  component="div"
                  margin="normal"
                >
                  <label
                    className={classes.label}
                    htmlFor="sign-up-email-password-confirm"
                  >
                    비밀번호 확인 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-up-email-password-confirm"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    name="confirm"
                    type="password"
                    value={values.confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.inputBox}
                  />
                  <FormHelperText margin="dense" className={classes.formHelper}>
                    {errors.confirm && touched.confirm && errors.confirm}
                  </FormHelperText>
                </FormControl>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.SignUpButton}
                  disabled={!isValid}
                >
                  회원가입
                </Button>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Layout>
  );
};

export default withRouter(SignUpEmail);
