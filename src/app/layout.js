import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ankitchoubey.vercel.app/"),
  title: {
    default: "Ankit Choubey | Full Stack Developer",
    template: "%s | Ankit Choubey",
  },
  description:
    "Ankit Choubey is a Full Stack Developer specializing in React, Next.js, Node.js, and Django. I build fast, scalable, and user-friendly web applications.",
  keywords: [
    "Ankit Choubey",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Developer",
    "Django Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Ankit Choubey" }],
  creator: "Ankit Choubey",
  openGraph: {
    title: "Ankit Choubey | Full Stack Developer",
    description:
      "Portfolio of Ankit Choubey — Full Stack Developer building high-performance web applications.",
    url: "https://ankitchoubey.vercel.app/",
    siteName: "Ankit Choubey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Choubey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Choubey | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and Django.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </body>
  </html>
);
}
