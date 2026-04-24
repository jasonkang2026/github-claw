import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Guide — 程序员鱼皮的AI知识库",
  description: "完全免费开放的AI知识共享平台，汇总整合热门AI工具、Vibe Coding教程、提示词大全、AI应用场景等内容，让每个人都能享受技术红利。",
  keywords: ["AI知识库", "鱼皮", "Vibe Coding", "DeepSeek", "AI编程", "AI工具", "免费教程"],
  openGraph: {
    title: "AI Guide — 程序员鱼皮的AI知识库",
    description: "完全免费开放的AI知识共享平台",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
