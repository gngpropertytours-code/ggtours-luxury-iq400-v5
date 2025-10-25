/* -----------------------------------------------------
   🖤  G & G Luxury – IQ400 V5 Custom Document
   -----------------------------------------------------
   Purpose:
   • Preload luxury fonts for zero-flicker rendering
   • Define meta baseline (SEO + color scheme)
   • Maintain perfect viewport handling for iPhone
------------------------------------------------------ */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: "#000" }}>
      <Head>
        {/* 🧠 Preconnect to font providers */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* 🎨 Font Preload – Inter + Playfair Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />

        {/* 🪞 Meta Essentials */}
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="G & G Luxury Tours – Maryland living redefined. Explore cinematic property tours and luxury housing marketing with AI precision."
        />
        <meta name="author" content="G & G Luxury" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* 🔗 Favicon + Touch Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <body>
        {/* Core content + scripts */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
