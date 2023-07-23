import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/icons/favicon.png" />
      </Head>

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
