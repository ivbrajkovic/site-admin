import { ActionIcon, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconEdit } from '@tabler/icons-react';

type ShortlinkTableActionProps = {
  url: string;
  onEdit: () => void;
};

export const ShortlinkTableAction = (props: ShortlinkTableActionProps) => {
  const clipboard = useClipboard();
  const copyUrl = () => clipboard.copy(props.url);

  return (
    <div>
      <Tooltip withArrow label="Edit modal">
        <ActionIcon variant="transparent" onClick={props.onEdit}>
          <IconEdit />
        </ActionIcon>
      </Tooltip>
      <Tooltip withArrow label={clipboard.copied ? 'Copied' : 'Copy'}>
        <ActionIcon variant="transparent" onClick={copyUrl}>
          <IconCopy />
        </ActionIcon>
      </Tooltip>
    </div>
  );
};
