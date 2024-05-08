import { Link, type To } from 'react-router-dom';

import classes from './AppLink.module.css';

type AppLinkProps = {
  to: To;
  children: React.ReactNode;
};

export const AppLink = (props: AppLinkProps) => (
  <Link to={props.to} className={classes.link}>
    {props.children}
  </Link>
);
