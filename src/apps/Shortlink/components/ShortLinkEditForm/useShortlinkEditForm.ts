import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { shortlinkEditValidation } from 'apps/Shortlink/components/ShortLinkEditForm/shortlinkEditValidation';
import { useCloseModal } from 'apps/Shortlink/components/ShortLinkModal/hooks/useCloseModal';
import { selectShortLinkId } from 'apps/Shortlink/shortLinkSlice';
import {
  useGetShortlinksQuery,
  useUpdateShortlinkMutation,
} from 'apps/Shortlink/shortlinkApi';
import { useAppSelector } from 'store/hooks';
import { errorNotificationCurried } from 'util/notification';

export type ShortlinkEditFromValues = {
  tag: string;
  name: string;
  url: string;
};

export const useShortlinkEditForm = () => {
  const { closeModal } = useCloseModal();
  const shortLinkId = useAppSelector(selectShortLinkId);
  const [updateShortlink, { isLoading }] = useUpdateShortlinkMutation();

  const { shortlink } = useGetShortlinksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      shortlink: data?.find((shortlink) => shortlink.id === shortLinkId),
    }),
  });

  const { control, handleSubmit } = useForm<ShortlinkEditFromValues>({
    resolver: zodResolver(shortlinkEditValidation),
    defaultValues: {
      tag: shortlink?.tag,
      name: shortlink?.name,
      url: shortlink?.url,
    },
  });

  const onSubmit = handleSubmit(
    (data: ShortlinkEditFromValues) =>
      shortLinkId &&
      updateShortlink({ id: shortLinkId, ...data })
        .unwrap()
        .then(closeModal)
        .catch(
          errorNotificationCurried({ title: 'Failed to update shortlink' }),
        ),
  );

  return { isLoading, control, onSubmit, closeModal };
};
