import { Button, Group, Stack } from '@mantine/core';

import { useShortlinkEditForm } from 'apps/Shortlink/components/ShortLinkEditForm/useShortlinkEditForm1';
import { FormTextInput } from 'components/FormTextInput';

export const ShortLinkEditForm = () => {
  const { control, onSubmit } = useShortlinkEditForm();
  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <FormTextInput control={control} name="tag" label="Tag" />
        <FormTextInput control={control} name="name" label="Name" />
        <FormTextInput control={control} name="url" label="URL" />
        <Group justify="flex-end">
          <Button type="submit">Edit Shortlink</Button>
        </Group>
      </Stack>
    </form>
  );
};
