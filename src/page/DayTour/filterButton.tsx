import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const FilterButton = withStyles({
  root: {
    borderRadius: '20px',
  },
})(Button);

export default FilterButton;
