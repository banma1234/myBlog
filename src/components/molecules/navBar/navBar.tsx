import Link from "next/link";
import { StyledNavBar, NavTitle, NavItem } from "./navBarStyle";
import { NavBarType } from "./navBarType";

const NavBarComponent: React.FC<NavBarType> = (props: NavBarType) => {
  const data = props.series;
  return (
    <StyledNavBar {...props}>
      <NavTitle>
        <h2>시리즈 목록</h2>
      </NavTitle>
      <NavItem>
        <Link href="/view">
          <h3>| 전체보기 |</h3>
        </Link>
        {data &&
          data.map((item: any, i: any) => {
            let menu = item.series + "(" + item.count + ")";
            return (
              <Link href={`/series/detail/${item.series}`} key={i}>
                <h3>{menu}</h3>
              </Link>
            );
          })}
      </NavItem>
    </StyledNavBar>
  );
};

export default NavBarComponent;
