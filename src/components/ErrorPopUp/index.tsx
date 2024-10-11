import ErrorPopUpProps from '@mytypes/ErrorPopUpProps';

import { CloseButton, ErrorTitle,PopupWrapper } from './styled';

export default function ErrorPopUp({
  error,
  visible,
  onClose,
}: ErrorPopUpProps) {
  return (
    <PopupWrapper $visible={visible}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ErrorTitle>Error(s) occurred:</ErrorTitle>
      {error}
    </PopupWrapper>
  );
}
