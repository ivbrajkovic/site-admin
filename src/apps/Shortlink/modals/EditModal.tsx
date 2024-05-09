import { ContextModalProps } from '@mantine/modals';

import {
  EditForm,
  EditModalProps,
} from 'apps/Shortlink/components/EditForm/EditForm';

export const EditModal = (props: ContextModalProps<EditModalProps>) => (
  <EditForm shortlinkId={props.innerProps.shortlinkId} />
);
