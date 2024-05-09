import { Button, Group, Stack } from '@mantine/core';

import { useCreateForm } from 'apps/Shortlink/components/CreateForm/useCreateForm';
import { FormDevTools } from 'components/FormDevTools';
import { FormTextInput } from 'components/FormTextInput';

export const CreateForm = () => {
  const { isLoading, control, onSubmit, closeModal } = useCreateForm();
  return (
    <>
      <FormDevTools control={control} />
      <form onSubmit={onSubmit}>
        <Stack>
          <FormTextInput control={control} name="tag" label="Tag" />
          <FormTextInput control={control} name="name" label="Name" />
          <FormTextInput control={control} name="url" label="URL" />
          <Group justify="flex-end">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button loading={isLoading} type="submit">
              Add Shortlink
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
};
