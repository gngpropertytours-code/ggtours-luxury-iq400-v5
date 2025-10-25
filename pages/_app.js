/* -----------------------------------------------------
   🖤  G & G Luxury – IQ400 V5 Application Wrapper
   -----------------------------------------------------
   Handles:
   • Global CSS injection
   • Viewport optimization for all devices
   • Smooth safe-area compatibility
------------------------------------------------------ */

import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="G & G Luxury Tours – Maryland living, redefined through cinematic design and seamless touring experiences."
        />
        <title>G & G Luxury Tours</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
