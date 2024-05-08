import { ActionIcon } from '@mantine/core';
import { IconCopy, IconEdit } from '@tabler/icons-react';

type ShortlinkTableActionProps = {
  onEdit: () => void;
};

export const ShortlinkTableAction = (props: ShortlinkTableActionProps) => {
  return (
    <div>
      <ActionIcon onClick={props.onEdit}>
        <IconEdit />
      </ActionIcon>
      <ActionIcon>
        <IconCopy />
      </ActionIcon>
    </div>
  );
};
