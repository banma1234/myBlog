import {
  StyledHeader,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderIcon,
} from "./headerStyles";
import { HeaderType } from "./headerType";
import Link from "next/link";
import { useIcons } from "util/hooks";
import {useState, useEffect} from 'react'

const HeaderComponent: React.FC<HeaderType> = (props: HeaderType) => {
  const [isDark, setIsDark] = useState<string | null>("light");
  useEffect(() => {
    setIsDark(window.localStorage.getItem("darkmode"));
  }, [isDark])

  const handleIcon = () => {
    props.onToggle();
    setIsDark(prev => prev === "dark" ? "light" : "dark");
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLogo>
          <Link href="/">Home</Link>
        </HeaderLogo>
        <HeaderMenu>
          <li>
            <Link href="https://github.com/banma1234">About</Link>
          </li>
          <li>
            <Link href="/admin">Login</Link>
          </li>
          <HeaderIcon onClick={handleIcon}>
            {isDark === "dark"
              ? useIcons("moon", "22")
              : useIcons("sun", "22")}
          </HeaderIcon>
        </HeaderMenu>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
