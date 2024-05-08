import { closeModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch } from 'store/hooks';

export const useCloseModal = () => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => dispatch(closeModal());
  return { closeModal: handleCloseModal };
};
