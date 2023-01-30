import {
  StyledHeader,
  HeaderContainer,
  HeaderIcon,
  HeaderMenu,
} from "./headerStyles";
import { HeaderType } from "./headerType";
import Link from "next/link";

const HeaderComponent: React.FC<HeaderType> = (props: HeaderType) => {
  return (
    <StyledHeader {...props}>
      <HeaderContainer>
        <HeaderIcon>
          <Link href="/">Home</Link>
        </HeaderIcon>
        <HeaderMenu>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">temp</Link>
          </li>
        </HeaderMenu>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
