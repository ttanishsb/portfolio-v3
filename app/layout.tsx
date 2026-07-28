import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "tsbporfolio <3",
  description: "Class XII student, aspiring AI/ML specialist, curious at heart.",
  keywords: "Tanish Singh Bisht, AI/ML, Machine Learning, Python Developer, Student Programmer, Prompt Design, Web Development, JavaScript, Portfolio",
  authors: [{ name: "Tanish Singh Bisht" }],
  creator: "Tanish Singh Bisht",
  publisher: "Tanish Singh Bisht",
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
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tanish Singh Bisht - Aspiring AI/ML Specialist",
    description: "Class XII student exploring AI/ML, prompt design, and software development.",
    siteName: "Tanish Singh Bisht's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanish Singh Bisht - Aspiring AI/ML Specialist",
    description: "Class XII student exploring AI/ML, prompt design, and software development.",
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
