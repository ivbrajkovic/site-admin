import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { shortlinkCreateValidation } from 'apps/Shortlink/components/ShortLinkCreateForm/shortlinkCreateValidation';
import { useCloseModal } from 'apps/Shortlink/components/ShortLinkModal/hooks/useCloseModal';
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

export const useShortlinkCreateForm = () => {
  const { closeModal } = useCloseModal();
  const [createShortlink, { isLoading }] = useCreateShortlinkMutation();

  const { tag } = useGetShortlinksQuery(undefined, {
    selectFromResult: ({ data = [] }) => ({
      tag: findMaxTagValue(data).toString(),
    }),
  });

  const { control, handleSubmit } = useForm<ShortlinkCreateFromValues>({
    resolver: zodResolver(shortlinkCreateValidation),
    defaultValues: {
      tag,
      name: 'My Github Profile',
      url: 'https://github.com/ivbrajkovic',
    },
  });

  const onSubmit = handleSubmit((data: ShortlinkCreateFromValues) =>
    createShortlink(data)
      .unwrap()
      .then(closeModal)
      .catch(errorNotificationCurried({ title: 'Failed to create shortlink' })),
  );

  return { isLoading, control, onSubmit };
};
