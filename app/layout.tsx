import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TheSaleSpot - Empower Sales, Delight Prospects, Close Quick',
  description: 'Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.',
  keywords: ['sales platform', 'AI sales', 'meeting analytics', 'sales collaboration', 'sales insights'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesalespot.com',
    title: 'TheSaleSpot - Empower Sales, Delight Prospects, Close Quick',
    description: 'Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.',
    siteName: 'TheSaleSpot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheSaleSpot - Empower Sales, Delight Prospects, Close Quick',
    description: 'Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        
      </body>
    </html>
  );
}