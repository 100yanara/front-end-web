import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const NavButton = withStyles({
  root: {
    borderRadius: '20px',
  },
})(Button);

export default NavButton;
