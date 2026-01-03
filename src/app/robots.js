// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ankitchoubey.vercel.app/sitemap.xml",
  };
}
