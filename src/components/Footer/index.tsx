import { images } from '@constants/Images';

import { FooterWrapper } from './styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <img src={images.logo_dark} alt="Museum logo" />
      <img src={images.modsen} alt="Modsen logo" />
    </FooterWrapper>
  );
}
