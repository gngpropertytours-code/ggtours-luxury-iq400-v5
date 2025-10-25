/* -----------------------------------------------------
   🖤  G & G Luxury – IQ400 V5 Application Wrapper
   -----------------------------------------------------
   Purpose:
   • Ensures global CSS imports resolve across all build environments
   • Provides viewport + meta structure for perfect scaling
   • Prevents Vercel “module not found” during SSR build
------------------------------------------------------ */

import Head from "next/head";
import "../styles/globals.css"; // ✅ keep relative import for now — alias activates after first successful build

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

/* -----------------------------------------------------
   🧩  Developer Notes – If Vercel still fails:
   -----------------------------------------------------
   1. Run these commands locally:
        git add styles/globals.css
        git commit -m "Ensure globals.css is tracked"
        git push
      ✅ Confirms the file is uploaded to the build repo.

   2. If error persists:
        npm install
        git add package-lock.json
        git commit -m "Rebuild lockfile"
        git push
      ✅ Regenerates SWC & Next.js build dependencies.

   3. After your next successful build:
        Switch this line → import "@styles/globals.css"
      ✅ Uses the path alias from next.config.js once the repo is stable.
------------------------------------------------------ */
