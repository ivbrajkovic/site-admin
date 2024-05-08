import { Button, Group, Stack } from '@mantine/core';

import { useShortlinkCreateForm } from 'apps/Shortlink/components/ShortLinkCreateForm/useShortlinkCreateForm';
import { FormTextInput } from 'components/FormTextInput';

export const ShortLinkCreateForm = () => {
  const { control, onSubmit } = useShortlinkCreateForm();
  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <FormTextInput control={control} name="tag" label="Tag" />
        <FormTextInput control={control} name="name" label="Name" />
        <FormTextInput control={control} name="url" label="URL" />
        <Group justify="flex-end">
          <Button type="submit">Create Shortlink</Button>
        </Group>
      </Stack>
    </form>
  );
};
