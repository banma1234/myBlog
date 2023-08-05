import React from "react";
import SEO from "seo.config.js";
import { Metadata } from "next";

import { Footer, Header } from "./components";

export const metadata: Metadata = SEO;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <header>
        <Header theme="dark" />
      </header>
      <body>{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
