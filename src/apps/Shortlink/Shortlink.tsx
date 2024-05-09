import { Container, Stack } from '@mantine/core';

import { CreateButton } from 'apps/Shortlink/components/CreateButton';
import { LinkListTable } from 'apps/Shortlink/components/LinkListTable/LinkListTable';

export const Shortlink = () => (
  <Container size="md" w="100%">
    <Stack mt="xl" gap="lg">
      <CreateButton />
      <LinkListTable />
    </Stack>
  </Container>
);
