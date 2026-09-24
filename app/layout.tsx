import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tsbportfolio.vercel.app/"
  ),

  title: "Tanish Singh Bisht | Portfolio",

  description:
    "Tanish Singh Bisht is a Class XII student and aspiring AI/ML specialist interested in artificial intelligence, machine learning, software development, and creative technology.",

  keywords: [
    "Tanish Singh Bisht",
    "Tanish Singh Bisht portfolio",
    "AI/ML",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Software Development",
    "Student Programmer",
    "Web Development",
    "Technology",
		"xsxsxsxs"
  ],

  authors: [{ name: "Tanish Singh Bisht" }],
  creator: "Tanish Singh Bisht",
  publisher: "Tanish Singh Bisht",

  verification: {
    google: "prSG7Nlia4OdwfkBCwSFbT9iA-5U3pZEaOxUbqahBuA",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Tanish Singh Bisht | Portfolio",
    description:
      "Class XII student and aspiring AI/ML specialist exploring artificial intelligence, machine learning, software development, and creative technology.",
    siteName: "Tanish Singh Bisht | Portfolio",
    locale: "en_US",
    type: "website",
    url: "https://tsbportfolio.vercel.app/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tanish Singh Bisht | Portfolio",
    description:
      "Class XII student and aspiring AI/ML specialist exploring AI, machine learning, software development, and creative technology.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tanish Singh Bisht",
            url: "https://tsbportfolio.vercel.app/",
            jobTitle: "Student and Aspiring AI/ML Specialist",
            description:
              "Tanish Singh Bisht is a Class XII student and aspiring AI/ML specialist interested in artificial intelligence, machine learning, software development, and creative technology.",
          }),
        }}
      />

      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_ID || ""}
      />
    </html>
  );
}
