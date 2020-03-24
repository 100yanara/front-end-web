import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) => ({
  'sign-up-box': {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    width: '100%',
  },
  'sign-up-box__sign-up': {
    padding: '1rem',
    color: 'grey',
    border: '1px solid gray',
    borderRadius: '3px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '150px',
  },
  'sign-up-box--margin-bottom': {
    marginBottom: '10px',
  },
  'sign-up-box--margin-top': {
    marginTop: '10px',
  },
}));

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <Box component="div" className={classes['sign-up-box']}>
      <Box component="div" className={classes['sign-up-box__sign-up']}>
        <Button
          variant="contained"
          disableElevation
          className={classes['sign-up-box--margin-bottom']}
        >
          Facebook sign up
        </Button>
        <Button
          variant="contained"
          disableElevation
          className={classes['sign-up-box--margin-bottom']}
        >
          Google sign up
        </Button>
        <Divider className={classes['sign-up-box--margin-bottom']} />
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          className={classes['sign-up-box--margin-bottom']}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          className={classes['sign-up-box--margin-bottom']}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          className={classes['sign-up-box--margin-bottom']}
          size="small"
        />
        <Typography
          component="p"
          variant="body2"
          className={classes['sign-up-box--margin-bottom']}
        >
          회원가입을 하면 백야나라의 개인정보 취급방침, 이용약관에
          동의하게됩니다
        </Typography>
        <Button
          variant="contained"
          className={classes['sign-up-box--margin-bottom']}
          disableElevation
        >
          Sign up
        </Button>
        <Divider className={classes['sign-up-box--margin-bottom']} />
        <Typography
          component="p"
          variant="body2"
          align="center"
          className={classes['sign-up-box--margin-bottom']}
        >
          이미 백야나라 회원인가요? 로그인
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
