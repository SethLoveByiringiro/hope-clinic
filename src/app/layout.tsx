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
