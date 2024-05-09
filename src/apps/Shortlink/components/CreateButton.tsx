import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

const openCreateModal = () =>
  modals.openContextModal({
    modal: 'create',
    title: 'New Shortlink',
    innerProps: {},
  });

export const CreateButton = () => (
  <Button w="fit-content" onClick={openCreateModal}>
    Add Shortlink
  </Button>
);
