import Head from "next/head";
import { useRouter } from "next/router";
import {
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
  DEFAULT_OG_IMAGE,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@/lib/site";

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const router = useRouter();

  const currentPath = path !== undefined ? path : router.asPath;
  const cleanPath = currentPath.split("?")[0].split("#")[0];
  const url = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const image = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content={THEME_COLOR} />

      {/* SEO & Crawling */}
      <link rel="canonical" href={url} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicons & Manifest */}
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        type="image/png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}