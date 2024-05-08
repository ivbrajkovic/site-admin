import { useForm } from 'react-hook-form';

import { selectShortLinkId } from 'apps/Shortlink/shortLinkSlice';
import { useGetShortlinksQuery } from 'apps/Shortlink/shortlinkApi';
import { useAppSelector } from 'store/hooks';

export type ShortlinkEditFromValues = {
  tag: string;
  name: string;
  url: string;
};

export const useShortlinkEditForm = () => {
  const shortLinkId = useAppSelector(selectShortLinkId);

  const { shortlink } = useGetShortlinksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      shortlink: data?.find((shortlink) => shortlink.id === shortLinkId),
    }),
  });

  const { control, handleSubmit } = useForm<ShortlinkEditFromValues>({
    // resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      tag: shortlink?.tag,
      name: shortlink?.name,
      url: shortlink?.url,
    },
  });

  const onSubmit = (data: ShortlinkEditFromValues) => {
    console.log({ data });

    // TODO: Implement edit shortlink logic
  };

  return { control, onSubmit: handleSubmit(onSubmit) };
};
