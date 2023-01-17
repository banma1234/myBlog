import HeaderComponent from './header';
import { HeaderType } from './headerType';

const Header: React.FC<HeaderType> = props => <HeaderComponent {...props}/>;

export default Header;