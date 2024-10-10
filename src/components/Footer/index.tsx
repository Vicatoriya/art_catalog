import { ICONS } from '@constants/Icons';

import { FooterWrapper } from './styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <img src={ICONS.logoDark} alt="Museum logo" />
      <img src={ICONS.modsen} alt="Modsen logo" />
    </FooterWrapper>
  );
}
