"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useIcons } from "util/hooks";
import { HeaderType } from "../types";
import "../styles/layoutStyles.scss";

const Header: React.FC<HeaderType> = (props: HeaderType) => {
  const [isDark, setIsDark] = useState<string | null>("light");
  useEffect(() => {
    setIsDark(window.localStorage.getItem("darkmode"));
  }, [isDark]);

  const handleIcon = () => {
    setIsDark(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <Link href="/">Home</Link>
        </div>
        <ul>
          <li>
            <Link href="https://github.com/banma1234">About</Link>
          </li>
          <li>
            <Link href="/admin">Login</Link>
          </li>
          <button className="header_icon" onClick={handleIcon}>
            {isDark === "dark" ? useIcons("moon", "22") : useIcons("sun", "22")}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
