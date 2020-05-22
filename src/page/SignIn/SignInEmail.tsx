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
import { validationSchemaSignInEmail } from 'utils/validations';
// custom UI
import Layout from 'components/layout';
//TYPE
import { Position } from 'components/Header/type';

const useStyles = makeStyles((theme: Theme) => ({
  'sign-in-email-box': {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    width: '100%',
  },
  'sign-in-email-box__sign-in': {
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
  SignInButton: {
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

const SignInEmail: React.FunctionComponent = props => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  const [errors, setError] = React.useState('');
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box component="div" className={classes['sign-in-email-box']}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
          validationSchema={validationSchemaSignInEmail}
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
                className={classes['sign-in-email-box__sign-in']}
              >
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  component="div"
                  margin="normal"
                >
                  <label
                    className={classes.label}
                    htmlFor="sign-in-email-email"
                  >
                    이메일 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-in-email-email"
                    value={values.email}
                    name="email"
                    type="email"
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
                    htmlFor="sign-in-email-password"
                  >
                    비밀번호 *
                  </label>
                  <OutlinedInput
                    required={true}
                    id="sign-in-email-password"
                    placeholder="비밀번호를 입력해주세요."
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
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.SignInButton}
                  disabled={!isValid}
                  type="submit"
                >
                  이메일로 로그인
                </Button>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Layout>
  );
};

export default SignInEmail;
