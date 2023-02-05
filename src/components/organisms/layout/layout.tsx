import { Container, Section, Article, Aside } from "./layoutStyle";
import { LayoutType } from "./layoutType";
import { Header, Footer, NavBar } from "../../molecules";

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
  return (
    <Section>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <nav>
            <Aside>
              <NavBar />
            </Aside>
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
        <Footer />
      </footer>
    </Section>
  );
};

export default LayoutComponent;
