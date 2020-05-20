import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// custom UI
import Layout from 'components/layout';
//TYPE
import { Position } from 'components/Header/type';

const useStyles = makeStyles((theme: Theme) => ({
  'sign-up-email-box': {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    width: '100%',
  },
  'sign-up-email-box__sign-up': {
    padding: '0 1rem',
    color: 'grey',
    border: `1px solid ${theme.palette.grey[300]}`,
    width: '430px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '490px',
    borderRadius: '4px',
  },
  formControl: {
    width: '332px',
  },
  inputBox: {
    height: '40px',
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
}));

const SignUpEmail: React.FunctionComponent = () => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(
    '영문,숫자,특수문자 2가지 조합 6~15자'
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box component="div" className={classes['sign-up-email-box']}>
        <form
          noValidate
          autoComplete="off"
          className={classes['sign-up-email-box__sign-up']}
        >
          <FormControl
            variant="outlined"
            className={classes.formControl}
            component="div"
            margin="normal"
          >
            <label className={classes.label}>이름 *</label>
            <OutlinedInput
              required={true}
              id="component-outlined"
              value={name}
              type="text"
              onChange={handleChange}
              className={classes.inputBox}
              placeholder="이름을 입력해주세요."
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            component="div"
            margin="normal"
          >
            <label className={classes.label}>이메일 *</label>
            <OutlinedInput
              required={true}
              id="component-outlined"
              value={email}
              type="email"
              placeholder="ID@example.com"
              onChange={handleChange}
              className={classes.inputBox}
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            component="div"
            margin="normal"
          >
            <label className={classes.label}>비밀번호 *</label>
            <OutlinedInput
              required={true}
              id="component-outlined"
              placeholder="영문,숫자,특수문자 2가지 조합 6~15자"
              type="password"
              onChange={handleChange}
              className={classes.inputBox}
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            component="div"
            margin="normal"
          >
            <label className={classes.label}>비밀번호 확인 *</label>
            <OutlinedInput
              required={true}
              id="component-outlined"
              placeholder="비밀번호를 한번 더 입력해주세요."
              type="password"
              onChange={handleChange}
              className={classes.inputBox}
            />
          </FormControl>
          <Button
            variant="contained"
            disableElevation
            className={classes.SignUpButton}
            disabled={true}
          >
            회원가입
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default SignUpEmail;
