import { Container, Section, Article, Aside } from "./layoutStyle";
import { LayoutType } from "./layoutType";
import { Header, Footer } from "../../molecules";

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
  return (
    <Section>
      <header>
        <Header>hello</Header>
      </header>
      <main>
        <Container>
          <nav>
            <Aside />
          </nav>
          <article>
            <Article>{props.children}</Article>
          </article>
          <section>
            <Aside />
          </section>
        </Container>
      </main>
      <footer>
        <Footer>I'm Footer</Footer>
      </footer>
    </Section>
  );
};

export default LayoutComponent;
