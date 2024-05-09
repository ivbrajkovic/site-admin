import { Button, Group, Stack } from '@mantine/core';

import { useEditForm } from 'apps/Shortlink/components/EditForm/useEditForm';
import { FormDevTools } from 'components/FormDevTools';
import { FormTextInput } from 'components/FormTextInput';

export type EditFormModalPayload = {
  shortlinkId: string;
};

export const EditForm = (props: EditFormModalPayload) => {
  const { isLoading, control, onSubmit, closeModal } = useEditForm(
    props.shortlinkId,
  );
  return (
    <>
      <FormDevTools control={control} />
      <form onSubmit={onSubmit}>
        <Stack>
          <FormTextInput disabled control={control} name="tag" label="Tag" />
          <FormTextInput control={control} name="name" label="Name" />
          <FormTextInput control={control} name="url" label="URL" />
          <Group mt="xs" justify="flex-end">
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
