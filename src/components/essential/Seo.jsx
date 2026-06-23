import Head from "next/head";
import {
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
  DEFAULT_OG_IMAGE,
  DEFAULT_KEYWORDS,
} from "@/lib/site";

export default function SEO({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const url = `${SITE_URL}${path}`;
  const image = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content={THEME_COLOR} />

      <link rel="icon" href="/favicon.svg" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/apple-touch-icon.svg" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
