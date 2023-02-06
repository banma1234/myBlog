import StyledNavBar from "./navBar";
import { NavBarType } from "./navBarType";

const NavBar: React.FC<NavBarType> = props => <StyledNavBar {...props} />;

export default NavBar;
