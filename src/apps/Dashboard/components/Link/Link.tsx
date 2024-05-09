import { Anchor } from '@mantine/core';
import { Link as RouterLink, type To } from 'react-router-dom';

import classes from './Link.module.css';

type LinkProps = {
  to: To;
  children: React.ReactNode;
};

export const Link = (props: LinkProps) => (
  <Anchor
    underline="never"
    component={RouterLink}
    to={props.to}
    className={classes.link}
  >
    {props.children}
  </Anchor>
);
