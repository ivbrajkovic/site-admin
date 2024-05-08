import { Container, Stack } from '@mantine/core';

import { ShortLinkCreateModal } from 'apps/Shortlink/components/ShortLinkCreateModal';
import { ShortLinkCreateTrigger } from 'apps/Shortlink/components/ShortLinkCreateTrigger';
import { ShortLinkEditModal } from 'apps/Shortlink/components/ShortLinkEditModal';
import { ShortlinkTable } from 'apps/Shortlink/components/ShortlinkTable';

export const Shortlink = () => (
  <Container size="lg">
    <Stack mt="xl" gap="lg">
      <div>
        <ShortLinkCreateTrigger />
      </div>
      <div>
        <ShortlinkTable />
      </div>
    </Stack>
    <ShortLinkCreateModal />
    <ShortLinkEditModal />
  </Container>
);
