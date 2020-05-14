import { withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const NavButton = withStyles({
//   root: {
//     borderRadius: '20px',
//   },
// })(Button);

// export default NavButton;

export interface StyleProps {
  background?: string;
}

const NavButton = (theme: Theme) => ({
  root: {
    borderRadius: '20px',
  },
});

export default withStyles(NavButton)(Button);
