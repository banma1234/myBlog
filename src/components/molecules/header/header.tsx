import {
  StyledHeader,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderIcon,
} from "./headerStyles";
import { HeaderType } from "./headerType";
import Link from "next/link";
import localstorage from "util/localstorage";
import { useIcons } from "util/hooks";
import React, { useState, useEffect } from "react";

const HeaderComponent: React.FC<HeaderType> = (props: HeaderType) => {
  const darkmode = localstorage("darkmode");

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
          <HeaderIcon onClick={props.onToggle}>
            {props.theme === "dark"
              ? useIcons("moon", "22")
              : useIcons("sun", "22")}
          </HeaderIcon>
        </HeaderMenu>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
