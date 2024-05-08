import { useForm } from 'react-hook-form';

export type ShortlinkCreateFromValues = {
  tag: string;
  name: string;
  url: string;
};

export const useShortlinkCreateForm = () => {
  const { control, handleSubmit } = useForm<ShortlinkCreateFromValues>({
    // resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      tag: '',
      name: '',
      url: '',
    },
  });

  const onSubmit = (data: ShortlinkCreateFromValues) => {
    console.log({ data });

    // TODO: Implement edit shortlink logic
  };

  return { control, onSubmit: handleSubmit(onSubmit) };
};
