import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteName = "AI Guide 导航官网";
const siteTitle = "AI Guide 导航官网｜程序员鱼皮的 AI 知识库";
const siteDescription =
  "AI Guide 导航官网汇总程序员鱼皮的 AI 知识库、Vibe Coding 教程、DeepSeek 指南、提示词大全与 AI 工具测评，帮助开发者和新手系统化学习 AI。";
const siteUrl = "https://jasonkang2026.github.io/github-claw";

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonkang2026.github.io"),
  title: {
    default: siteTitle,
    template: `%s｜${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "AI Guide",
    "AI知识库",
    "程序员鱼皮",
    "Vibe Coding",
    "DeepSeek",
    "AI编程",
    "AI工具",
    "提示词大全",
    "AI学习路线图",
    "免费AI教程",
  ],
  authors: [{ name: "liyupi" }],
  creator: "liyupi",
  publisher: "AI Guide",
  category: "technology",
  alternates: {
    canonical: "/github-claw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    creator: "@liyupi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          跳到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
