import { Container, Section, Article, Aside } from "./layoutStyle";
import { LayoutType } from "./layoutType";
import { Header, Footer, NavBar } from "../../molecules";

const LayoutComponent: React.FC<LayoutType> = (props: LayoutType) => {
  return (
    <Section>
      <header>
        <Header onToggle={props.onToggle} theme={props.theme} />
      </header>
      <main>
        <Container>
          <nav>
            <Aside>
              <NavBar series={props.series} />
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
