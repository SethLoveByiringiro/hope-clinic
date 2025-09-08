import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Hope Integrated Clinic - Mental Wellness & Substance Abuse Services",
  description: "At Hope Integrated Clinic, we are dedicated to fostering and promoting mental wellbeing through proven, culturally relevant, and client-centered approaches.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/favicon-32x32.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    apple: '/logo.jpg',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-sans antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
