import {
  StyledFooter,
  FooterContainer,
  FooterMenu,
  FooterAsideMenu,
} from "./footerStyles";
import { useIcons } from "util/hooks";
import { ImgWrapper } from "styles/globals";
import Link from "next/link";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";
import { Button } from "src/components/atoms";

const FooterComponent: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <ImgWrapper type="profile">
          <Image src={imgUrl} alt="profile img" priority />
        </ImgWrapper>
        <FooterMenu>
          <h1>Choco Ham</h1>
          <li>{useIcons("mail", "16")} &nbsp; banma1234@gmail.com</li>
          <li>
            <Link href="https://github.com/banma1234">
              {useIcons("github", "16")} &nbsp; github.com/banma1234
            </Link>
          </li>
        </FooterMenu>
        <FooterAsideMenu>
          {/* <Button color="green" ButtonType="small">
            {useIcons("enter", "16")} &nbsp; Go
          </Button> */}
        </FooterAsideMenu>
      </FooterContainer>
    </StyledFooter>
  );
};

export default FooterComponent;
