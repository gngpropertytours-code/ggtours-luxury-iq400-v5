/* -----------------------------------------------------
   🖤  G & G Luxury – IQ400 V5 SEO Component
   -----------------------------------------------------
   Purpose:
   • Automates meta & social preview tags
   • Creates unified brand presence for every page
   • Boosts discoverability and CTR on all platforms
------------------------------------------------------ */

import Head from "next/head";

export default function SEO({
  title = "G & G Luxury Tours | Maryland Living, Redefined",
  description = "Experience cinematic property marketing powered by AI and modern design. Explore luxury listings and seamless tenant journeys with G & G Tours.",
  url = "https://www.gandgluxury.com",
  image = "/og-default.jpg",
}) {
  const fullTitle = title.includes("G & G Luxury") ? title : `${title} | G & G Luxury`;

  return (
    <Head>
      {/* 🧩 Primary SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

      {/* 🔗 Canonical */}
      <link rel="canonical" href={url} />

      {/* 🪞 Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="G & G Luxury Tours" />

      {/* 🕊️ Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@GandGLuxury" />

      {/* 🧠 Brand Identity */}
      <meta name="author" content="G & G Luxury" />
    </Head>
  );
}
