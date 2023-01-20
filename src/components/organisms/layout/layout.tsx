import { Container, Section, Article, Aside } from "./layoutStyle";
import { LayoutType } from "./layoutType";
import { Footer } from "../../molecules";

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
  return (
    <Section>
      <Container>
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
