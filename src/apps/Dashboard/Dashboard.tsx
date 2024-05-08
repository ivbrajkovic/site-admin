import { Container } from 'semantic-ui-react';

import classes from './Dashboard.module.css';

import { AppLinkList } from 'apps/Dashboard/components/AppLinkList';
import { Version } from 'apps/Dashboard/components/Version/Version';

export const Dashboard = () => (
  <Container className={classes.container}>
    <div className={classes.main}>
      <AppLinkList />
    </div>
    <div className={classes.footer}>
      <Version />
    </div>
  </Container>
);
