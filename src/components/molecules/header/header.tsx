import {
  StyledHeader,
  HeaderContainer,
  HeaderIcon,
  HeaderMenu,
} from "./headerStyles";
import Link from "next/link";

const HeaderComponent: React.FC = () => {
  return (
    <StyledHeader>
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
