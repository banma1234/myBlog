import { Section, Aside } from "./layoutStyle";
import {LayoutType} from './layoutType';

import { Header, Footer } from '../../molecules';

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
    return(
        <div {...props}>
            <Header>I'm Header</Header>
            <Aside/>
            <Section>{props.article}</Section>
            <Aside/>
            <Footer>I'm Footer</Footer>
        </div>        
    );
}

export default LayoutComponent;