import { Button, Group, Stack } from '@mantine/core';

import { useShortlinkEditForm } from 'apps/Shortlink/components/ShortLinkEditForm/useShortlinkEditForm';
import { FormDevTools } from 'components/FormDevTools';
import { FormTextInput } from 'components/FormTextInput';

export const ShortLinkEditForm = () => {
  const { isLoading, control, onSubmit, closeModal } = useShortlinkEditForm();
  return (
    <>
      <FormDevTools control={control} />
      <form onSubmit={onSubmit}>
        <Stack>
          <FormTextInput disabled control={control} name="tag" label="Tag" />
          <FormTextInput control={control} name="name" label="Name" />
          <FormTextInput control={control} name="url" label="URL" />
          <Group justify="flex-end">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button loading={isLoading} type="submit">
              Save
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
};
