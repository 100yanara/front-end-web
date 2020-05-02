import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {
  window?: () => Window;
  headerDefaultElevation?: number;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window, headerDefaultElevation } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 1 : headerDefaultElevation,
  });
}

export default ElevationScroll;
