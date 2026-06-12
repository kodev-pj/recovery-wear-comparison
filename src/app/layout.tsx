import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://recovery-wear-comparison.vercel.app";
const title =
  "リカバリーウェア3社をシンプル比較｜TENTIAL・VENEX・ReD";
const description =
  "TENTIAL、VENEX、ReDのリカバリーウェア3社を、価格・一般医療機器区分・独自技術・サイズ・特徴・店舗情報でわかりやすく比較します。";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "RId-_Hmhfm9FqvPJkYoWPDA7OvYIsIGVJBCCIxxixt8",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "リカバリーウェア比較",
    title,
    description,
    images: [
      {
        url: "/recovery-hero-generated-v2.png",
        width: 1536,
        height: 1024,
        alt: "リカバリーウェアを着てくつろぐ人物",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/recovery-hero-generated-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
