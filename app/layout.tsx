import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import cl from "classnames";
import "./globals.css";
import StructuredData from '@/components/StructuredData'
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
  title: "Achuth Hadnoor - Designer, Engineer & Creator | Portfolio",
  description: "Achuth Hadnoor is a designer, developer, and creator based in India specializing in UI/UX design, web development, and digital products. Explore my work in app development, design systems, and solopreneurship.",
  keywords: ["UI/UX design", "web development", "app development", "designer", "engineer", "solopreneur", "India"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://achuth.dev",
    title: "Achuth Hadnoor - Designer, Engineer & Creator",
    description: "Designer and Engineer crafting innovative digital products and experiences",
    siteName: "Achuth Hadnoor Portfolio",
    images: [{
      url: 'https://achuth.dev/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Achuth Hadnoor Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@achuth_hadnoor',
    creator: '@achuth_hadnoor',
    title: 'Achuth Hadnoor - Designer, Engineer & Creator',
    description: 'Designer and Engineer crafting innovative digital products and experiences',
    images: ['https://achuth.dev/og-image.jpg'],
  }
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
        <link rel="canonical" href="https://achuth.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="dark:bg-neutral-900 dark:text-neutral-400 bg-neutral-100 text-neutral-600  font-[family-name:var(--font-inter-sans)] ">
        <StructuredData
          name="Achuth Hadnoor"
          jobTitle="Designer & Engineer"
          sameAs={[
            "https://github.com/achuthhadnoor",
            "https://linkedin.com/in/achuth-hadnoor",
            "https://twitter.com/achuth_hadnoor"
          ]}
        />
        <main className="flex flex-col gap-4 flex-1 py-10 max-w-md mx-auto px-4 font-mono text-sm text-neutral-900 dark:text-neutral-200 leading-loose">
          {children}
        </main>
        <Analytics />
      </body>
    </html >
  );
}
