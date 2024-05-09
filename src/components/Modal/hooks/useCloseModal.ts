import { closeModal } from 'components/Modal/modalSlice';
import { useAppDispatch } from 'store/hooks';

export const useCloseModal = () => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => dispatch(closeModal());
  return { closeModal: handleCloseModal };
};
