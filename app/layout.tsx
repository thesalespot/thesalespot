import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "TheSaleSpot - Empower Sales, Delight Prospects, Close Quick",
  description:
    "Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.",
  keywords: [
    "sales platform",
    "AI sales",
    "meeting analytics",
    "sales collaboration",
    "sales insights",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesalespot.com",
    title: "TheSaleSpot - Empower Sales, Delight Prospects, Close Quick",
    description:
      "Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.",
    siteName: "TheSaleSpot",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSaleSpot - Empower Sales, Delight Prospects, Close Quick",
    description:
      "Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="scroll" className={`plus-jakarta-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
