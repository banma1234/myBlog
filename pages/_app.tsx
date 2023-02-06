import "../styles/globals.css";
import { Layout } from "src/components/organisms";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, series }: AppProps | any) {
  return (
    <Layout series={series}>
      <Component {...pageProps} />
    </Layout>
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
