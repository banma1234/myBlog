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
            <Link href="https://github.com/banma1234">About</Link>
          </li>
          <li>
            <Link href="/admin">Login</Link>
          </li>
        </HeaderMenu>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
