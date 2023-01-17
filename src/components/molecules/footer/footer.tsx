import StyledFooter from "./footerStyles";
import { Footertype } from "./footerType";

const FooterComponent: React.FC<Footertype> = (props: Footertype) => {
  return <StyledFooter {...props}>{props.children}</StyledFooter>;
};

export default FooterComponent;
