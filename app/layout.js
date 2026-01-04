import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ScamSmart - Think Before You Click",
  description: "Master scam detection with AI-powered lessons. Learn to spot phishing, fake websites, romance scams, and more.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ScamSmart - Think Before You Click',
    description: 'Master scam detection with AI-powered lessons',
    url: 'https://scamsmart.click',
    siteName: 'ScamSmart',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScamSmart - Think Before You Click',
    description: 'Master scam detection with AI-powered lessons',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}