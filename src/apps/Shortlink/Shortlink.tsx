import { Container, Stack } from '@mantine/core';

import { CreateButton } from 'apps/Shortlink/components/CreateButton';
import { CreateForm } from 'apps/Shortlink/components/CreateForm/CreateForm';
import { EditForm } from 'apps/Shortlink/components/EditForm/EditForm';
import { LinkListTable } from 'apps/Shortlink/components/LinkListTable/LinkListTable';
import { Modal } from 'components/Modal/Modal';

export const Shortlink = () => (
  <Container size="md" w="100%">
    <Stack mt="xl" gap="lg">
      <CreateButton />
      <LinkListTable />
    </Stack>
    <Modal name="create" title="New Shortlink">
      <CreateForm />
    </Modal>
    <Modal name="edit" title="Edit Shortlink">
      <EditForm />
    </Modal>
  </Container>
);
