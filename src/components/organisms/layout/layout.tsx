import { Container, Section, Article, Aside } from "./layoutStyle";
import { LayoutType } from "./layoutType";
import { Header, Footer } from "../../molecules";

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
  return (
    <Section>
      <Container>
        <header>
          <Header>hello</Header>
        </header>
        <nav>
          <Aside />
        </nav>
        <main>
          <Article>{props.children}</Article>
        </main>
        <section>
          <Aside />
        </section>
      </Container>
      <footer>
        <Footer>I'm Footer</Footer>
      </footer>
    </Section>
  );
};

export default LayoutComponent;
