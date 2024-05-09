import { CreateModal } from 'apps/Shortlink/modals/CreateModal';
import { EditModal } from 'apps/Shortlink/modals/EditModal';

const modals = {
  edit: EditModal,
  create: CreateModal,
};

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}

export { modals };
