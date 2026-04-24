import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RoadmapSection from "@/components/RoadmapSection";
import ChangelogSection from "@/components/ChangelogSection";
import GrowthSection from "@/components/GrowthSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "AI Guide 导航官网",
        description:
          "程序员鱼皮的 AI 知识库导航站，汇总 Vibe Coding、DeepSeek、提示词大全与 AI 工具测评。",
        inLanguage: "zh-CN",
      },
      {
        "@type": "Organization",
        "@id": "https://github.com/liyupi/ai-guide#organization",
        name: "AI Guide",
        url: "https://github.com/liyupi/ai-guide",
        founder: {
          "@type": "Person",
          name: "liyupi",
        },
        sameAs: [
          "https://github.com/liyupi/ai-guide",
          "https://ai.codefather.cn",
          "https://space.bilibili.com/12890453",
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: "AI Guide 导航官网｜程序员鱼皮的 AI 知识库",
        description:
          "面向开发者、新手、产品经理和创业者的 AI 学习导航页，覆盖 AI 教程、工具测评、提示词、路线图与更新日志。",
        inLanguage: "zh-CN",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: {
          "@id": "https://github.com/liyupi/ai-guide#organization",
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Vibe Coding 零基础教程",
              url: "https://ai.codefather.cn/vibe",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "AI 工具测评大全",
              url: "https://ai.codefather.cn",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Prompt 提示词大全",
              url: "https://ai.codefather.cn",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "AI 编程进阶技巧",
              url: "https://ai.codefather.cn",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "AI 产品变现路径",
              url: "https://ai.codefather.cn",
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        id="main-content"
        className="min-h-screen relative"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <ParticleBackground />
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <RoadmapSection />
          <ChangelogSection />
          <GrowthSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </>
  );
}
