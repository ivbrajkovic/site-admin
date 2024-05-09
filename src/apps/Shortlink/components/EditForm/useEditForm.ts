import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { editFormValidation } from 'apps/Shortlink/components/EditForm/editFormValidation';
import {
  useGetShortlinksQuery,
  useUpdateShortlinkMutation,
} from 'apps/Shortlink/shortlinkApi';
import { useCloseModal } from 'components/Modal/hooks/useCloseModal';
import { errorNotificationCurried } from 'util/notification';

export type ShortlinkEditFromValues = {
  tag: string;
  name: string;
  url: string;
};

export const useEditForm = (shortlinkId: string) => {
  const { closeModal } = useCloseModal();
  const [updateShortlink, { isLoading }] = useUpdateShortlinkMutation();

  const { shortlink } = useGetShortlinksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      shortlink: data?.find((shortlink) => shortlink.id === shortlinkId),
    }),
  });

  const { control, handleSubmit } = useForm<ShortlinkEditFromValues>({
    resolver: zodResolver(editFormValidation),
    defaultValues: {
      tag: shortlink?.tag,
      name: shortlink?.name,
      url: shortlink?.url,
    },
  });

  const onSubmit = handleSubmit(
    (data: ShortlinkEditFromValues) =>
      shortlinkId &&
      updateShortlink({ id: shortlinkId, ...data })
        .unwrap()
        .then(closeModal)
        .catch(
          errorNotificationCurried({ title: 'Failed to update shortlink' }),
        ),
  );

  return { isLoading, control, onSubmit, closeModal };
};
