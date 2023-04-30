import "../styles/globals.css";
import { GlobalStyle } from "styles/globals";
import { DefaultSeo } from "next-seo";
import SEO from "seo.config.js";
import { Layout } from "src/components/organisms";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useTheme } from "util/hooks";
import { default as THEME } from "styles/Theme";

export default function App({ Component, pageProps, series }: AppProps | any) {
  const [theme, onToggle] = useTheme();

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={THEME[theme]}>
        <GlobalStyle theme={THEME[theme]} />
        <Layout series={series} onToggle={onToggle} theme={theme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async () => {
  const DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("viewType", "VIEW_SERIES");

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();

  return {
    series: data["message"],
  };
};
