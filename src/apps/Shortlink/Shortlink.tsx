import { Container, Stack } from '@mantine/core';

import { ShortLinkCreateForm } from 'apps/Shortlink/components/ShortLinkCreateForm/ShortLinkCreateForm';
import { ShortLinkCreateTrigger } from 'apps/Shortlink/components/ShortLinkCreateTrigger';
import { ShortLinkEditForm } from 'apps/Shortlink/components/ShortLinkEditForm/ShortLinkEditForm';
import { ShortLinkModal } from 'apps/Shortlink/components/ShortLinkModal/ShortLinkModal';
import { ShortlinkTable } from 'apps/Shortlink/components/ShortlinkTable/ShortlinkTable';

export const Shortlink = () => (
  <Container size="md" w="100%">
    <Stack mt="xl" h="100vh" gap="lg">
      <ShortLinkCreateTrigger />
      <ShortlinkTable />
    </Stack>
    <ShortLinkModal modal="create" title="New Shortlink">
      <ShortLinkCreateForm />
    </ShortLinkModal>
    <ShortLinkModal modal="edit" title="Edit Shortlink">
      <ShortLinkEditForm />
    </ShortLinkModal>
  </Container>
);
