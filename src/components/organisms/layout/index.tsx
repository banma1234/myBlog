import LayoutComponent from "./layout";
import { LayoutType } from "./layoutType";

const Layout: React.FC<LayoutType> = props => <LayoutComponent {...props} />;

export default Layout;
