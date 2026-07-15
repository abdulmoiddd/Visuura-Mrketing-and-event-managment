import { SITE_URL } from "@/lib/site";

function generateSiteMap() {
  // Generate the URLs for your 12 service pages dynamically
  const servicesUrls = Array.from({ length: 12 }, (_, i) => {
    return `
     <url>
       <loc>${SITE_URL}/Services/Services-${i}</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
   `;
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}/</loc>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/portfolio</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${SITE_URL}/contact</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${SITE_URL}/vcard</loc>
       <changefreq>yearly</changefreq>
       <priority>0.5</priority>
     </url>
     <url>
       <loc>${SITE_URL}/sitemap</loc>
       <changefreq>monthly</changefreq>
       <priority>0.3</priority>
     </url>
     ${servicesUrls}
   </urlset>
 `;
}

export default function SiteMap() {
  // getServerSideProps will handle the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // Avoid caching stale host variants after deploy
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
