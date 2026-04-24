"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: "🔥",
    title: "Vibe Coding 零基础教程",
    desc: "鱼皮爆肝原创，上千张图、几十万字。帮助任何人快速掌握 AI 编程，哪怕零基础，也能开发上线自己的产品并盈利。",
    tags: ["热门推荐", "零基础", "原创"],
    tagColors: ["#f59e0b", "#6366f1", "#8b5cf6"],
    link: "https://ai.codefather.cn/vibe",
    linkText: "开始学习",
    accent: "#f59e0b",
    bgAccent: "rgba(245,158,11,0.05)",
  },
  {
    icon: "🤖",
    title: "AI 工具测评大全",
    desc: "覆盖 GPT-5、Claude 4、Gemini 3.0、Cursor 2.0、DeepSeek 等主流模型与工具，客观深度测评，帮你做出最佳选择。",
    tags: ["工具推荐", "持续更新"],
    tagColors: ["#6366f1", "#06b6d4"],
    link: "https://ai.codefather.cn",
    linkText: "查看测评",
    accent: "#6366f1",
    bgAccent: "rgba(99,102,241,0.05)",
  },
  {
    icon: "💡",
    title: "Prompt 提示词大全",
    desc: "精心整理的高效提示词模板库，涵盖编程、写作、办公、创意、学习等场景，让你的 AI 对话效率翻倍。",
    tags: ["实用资源", "场景模板"],
    tagColors: ["#10b981", "#06b6d4"],
    link: "https://ai.codefather.cn",
    linkText: "获取模板",
    accent: "#10b981",
    bgAccent: "rgba(16,185,129,0.05)",
  },
  {
    icon: "⚡",
    title: "AI 编程进阶技巧",
    desc: "包括 Cursor 高效使用、Claude Code 神技、MCP 开发、上下文管理、Spring AI 实战等，让你的 AI 编程能力突飞猛进。",
    tags: ["进阶", "实战"],
    tagColors: ["#8b5cf6", "#f59e0b"],
    link: "https://ai.codefather.cn",
    linkText: "立即学习",
    accent: "#8b5cf6",
    bgAccent: "rgba(139,92,246,0.05)",
  },
  {
    icon: "🚀",
    title: "AI 产品变现路径",
    desc: "从需求分析、技术选型到产品上线、SEO优化、自媒体变现的完整路径，手把手带你打造有价值的 AI 产品。",
    tags: ["变现", "产品"],
    tagColors: ["#ef4444", "#f59e0b"],
    link: "https://ai.codefather.cn",
    linkText: "探索变现",
    accent: "#ef4444",
    bgAccent: "rgba(239,68,68,0.05)",
  },
  {
    icon: "📊",
    title: "AI 行业资讯",
    desc: "第一手 AI 行业动态、大模型发布、技术突破、创业案例，让你始终站在 AI 浪潮前沿，不错过任何重要信息。",
    tags: ["资讯", "前沿"],
    tagColors: ["#06b6d4", "#8b5cf6"],
    link: "https://ai.codefather.cn",
    linkText: "查看资讯",
    accent: "#06b6d4",
    bgAccent: "rgba(6,182,212,0.05)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            ✨ 精选内容
          </div>
          <h2 className="section-heading text-white mb-4">
            一站式 <span className="gradient-text">AI 学习</span> 平台
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从入门到变现，覆盖 AI 学习的每个阶段，帮你构建完整的 AI 知识体系
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ background: feature.bgAccent }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${feature.accent}22`,
                  border: `1px solid ${feature.accent}33`,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {feature.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="tag-badge"
                    style={{
                      borderColor: `${feature.tagColors[ti]}44`,
                      color: feature.tagColors[ti],
                      background: `${feature.tagColors[ti]}11`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2"
                style={{ color: feature.accent }}
              >
                {feature.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight banner */}
        <motion.div
          variants={fadeUp}
          className="mt-12 p-6 sm:p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-white mb-2">
            适合所有人学习
          </h3>
          <p className="text-slate-400 mb-4 max-w-lg mx-auto">
            无论你是零基础新手、有开发经验的程序员，还是产品经理、创业者，都能在这里找到适合自己的 AI 学习路径
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["零基础新手", "有开发经验者", "产品经理", "创业者", "自媒体人"].map((label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full text-sm text-slate-300"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
