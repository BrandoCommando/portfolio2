import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Bowles — Senior Programmer",
  description:
    "Portfolio of Brandon Bowles, a veteran full-stack architect specializing in Node.js, PHP, Shopify apps, and headless commerce.",
  openGraph: {
    title: "Brandon Bowles — Senior Programmer",
    description:
      "Veteran full-stack architect specializing in Node.js, PHP, Shopify apps, and headless commerce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Bowles — Senior Programmer",
    description:
      "Veteran full-stack architect specializing in Node.js, PHP, Shopify apps, and headless commerce.",
    creator: "@brandocommando",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-grid">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
