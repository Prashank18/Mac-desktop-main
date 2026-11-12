import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'S Prashank | Mac Desktop',
  description: "S Prashank's personal portfolio, built as an interactive macOS desktop experience.",
  authors: [{ name: 'S Prashank' }],
  keywords: ['portfolio', 'developer', 'macOS', 'interactive', 'S Prashank'],
  openGraph: {
    title: 'S Prashank | Mac Desktop',
    description: "An interactive macOS-style personal portfolio.",
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/background.jpg" as="image" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
