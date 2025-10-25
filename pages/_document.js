import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Viewport for full mobile compatibility */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* SEO Meta */}
        <meta
          name="description"
          content="G & G Property Tours – Luxury AI-Powered Property Marketing and Tenant Match Platform for Maryland."
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="G & G Property Tours" />
        <meta
          property="og:description"
          content="Luxury AI-Powered Real Estate Marketing and Tenant Match Platform for Maryland."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://ggtours-luxury-iq400-v5.vercel.app/" />

        {/* Fonts and favicon */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Merriweather:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#000" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
