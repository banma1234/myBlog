import StyledHeader from './headerStyles';
import { HeaderType } from './headerType';

const HeaderComponent: React.FC<HeaderType> = (props: HeaderType) => {
    return (
        <StyledHeader {...props}>
            {props.children}
        </StyledHeader>
    );
};

export default HeaderComponent;