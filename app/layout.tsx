import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import cl from "classnames";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://achuth.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: "Achuth Hadnoor - Designer and Engineer",
  description:
    "Achuth Hadnoor is a  designer, developer, and creator based in India. He shares about UI/UX design, Solopreneurship, App Development.",
  openGraph: {
    type: "website",
    url: "https://achuth.dev",
    title: "Achuth Hadnoor",
    description: "Designer and Engineer working on digital products",
    siteName: "Achuth's portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="dark:bg-neutral-900 dark:text-neutral-400 bg-neutral-100 text-neutral-600 overflow-hidden font-[family-name:var(--font-inter-sans)] ">
        {children}
        <Analytics />
      </body>
    </html >
  );
}
