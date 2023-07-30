import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {(process.env.NODE_ENV === "development" ||
          process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="n4bC0l6V4NowW1OGzgeib5LObk3g89XJlYp0sSVx"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
        <link rel="icon" href="/assets/icons/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
