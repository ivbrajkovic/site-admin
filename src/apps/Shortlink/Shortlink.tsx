import { Container } from 'semantic-ui-react';

import classes from './Shortlink.module.css';

import { ShortLinkCreateModal } from 'apps/Shortlink/components/ShortLinkCreateModal';
import { ShortLinkCreateTrigger } from 'apps/Shortlink/components/ShortLinkCreateTrigger';
import { ShortLinkEditModal } from 'apps/Shortlink/components/ShortLinkEditModal';
import { ShortlinkTable } from 'apps/Shortlink/components/ShortlinkTable';

export const Shortlink = () => (
  <Container className={classes.container}>
    <div>
      <ShortLinkCreateTrigger />
    </div>
    <div>
      <ShortlinkTable />
    </div>
    <ShortLinkCreateModal />
    <ShortLinkEditModal />
  </Container>
);
