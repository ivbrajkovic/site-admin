import { zodResolver } from '@hookform/resolvers/zod';
import { modals } from '@mantine/modals';
import { useForm } from 'react-hook-form';

import { createFormValidation } from 'apps/Shortlink/components/CreateForm/createFormValidation';
import {
  Shortlink,
  useCreateShortlinkMutation,
  useGetShortlinksQuery,
} from 'apps/Shortlink/shortlinkApi';
import { errorNotificationCurried } from 'util/notification';

export type ShortlinkCreateFromValues = {
  tag: string;
  name: string;
  url: string;
};

const START_TAG = 2000;

const findMaxTagValue = (shortlinks: Shortlink[]) => {
  let tag = shortlinks.reduce((max, shortlink) => {
    const tag = Number(shortlink.tag);
    return tag > max ? tag : max;
  }, 0);
  return tag ? ++tag : START_TAG;
};

export const useCreateForm = () => {
  const [createShortlink, { isLoading }] = useCreateShortlinkMutation();

  const { tag } = useGetShortlinksQuery(undefined, {
    selectFromResult: ({ data = [] }) => ({
      tag: findMaxTagValue(data).toString(),
    }),
  });

  const { control, handleSubmit } = useForm<ShortlinkCreateFromValues>({
    resolver: zodResolver(createFormValidation),
    defaultValues: {
      tag,
      name: '',
      url: '',
    },
  });

  const onSubmit = handleSubmit((data: ShortlinkCreateFromValues) =>
    createShortlink(data)
      .unwrap()
      .then(modals.closeAll)
      .catch(errorNotificationCurried({ title: 'Failed to create shortlink' })),
  );

  return { isLoading, control, onSubmit, closeModal: modals.closeAll };
};
