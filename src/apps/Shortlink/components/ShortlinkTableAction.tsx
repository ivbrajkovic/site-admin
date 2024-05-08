import { Button, Icon } from 'semantic-ui-react';

type ShortlinkTableActionProps = {
  onEdit: () => void;
};

export const ShortlinkTableAction = (props: ShortlinkTableActionProps) => {
  return (
    <div>
      <Button basic icon compact size="tiny" onClick={props.onEdit}>
        <Icon name="edit outline" />
      </Button>
      <Button basic icon compact size="tiny">
        <Icon name="linkify" />
      </Button>
    </div>
  );
};
