import { Button, Group, Stack } from '@mantine/core';

import { useShortlinkCreateForm } from 'apps/Shortlink/components/ShortLinkCreateForm/useShortlinkCreateForm';
import { FormDevTools } from 'components/FormDevTools';
import { FormTextInput } from 'components/FormTextInput';

export const ShortLinkCreateForm = () => {
  const { isLoading, control, onSubmit } = useShortlinkCreateForm();
  return (
    <>
      <FormDevTools control={control} />
      <form onSubmit={onSubmit}>
        <Stack>
          <FormTextInput control={control} name="tag" label="Tag" />
          <FormTextInput control={control} name="name" label="Name" />
          <FormTextInput control={control} name="url" label="URL" />
          <Group justify="flex-end">
            <Button loading={isLoading} type="submit">
              Add Shortlink
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
};
