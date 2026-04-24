"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const updates = [
  {
    date: "2026-04",
    version: "v4.x",
    tag: "重磅更新",
    tagColor: "#f59e0b",
    title: "GPT-5 & Claude 4 深度测评上线",
    desc: "完整评测两款革命性大模型，对比分析编程、创作、推理等核心能力，帮你做出最优选择。",
    items: ["GPT-5 首发深度体验", "Claude 4 编程能力实测", "3大模型横向对比测试", "Cursor 2.0 更新解析"],
    icon: "🆕",
  },
  {
    date: "2026-03",
    version: "v3.8",
    tag: "内容扩充",
    tagColor: "#6366f1",
    title: "Vibe Coding 产品变现专题",
    desc: "新增产品变现完整路径，从需求分析到 SEO 优化，手把手教你让 AI 产品赚钱。",
    items: ["产品需求分析方法论", "盈利模式设计指南", "SEO 优化实战手册", "自媒体变现案例"],
    icon: "💰",
  },
  {
    date: "2026-02",
    version: "v3.5",
    tag: "功能增强",
    tagColor: "#8b5cf6",
    title: "Claude Code 神级技巧 & MCP 开发",
    desc: "深度解析 Claude Code 高级用法，以及 MCP 服务开发完整教程，让 AI 辅助编程能力再上新台阶。",
    items: ["Claude Code 神级使用技巧", "MCP 服务从零开发", "AI 智能体项目实战", "上下文管理高级技巧"],
    icon: "⚡",
  },
  {
    date: "2026-01",
    version: "v3.0",
    tag: "重大里程碑",
    tagColor: "#10b981",
    title: "Vibe Coding 零基础教程正式发布",
    desc: "鱼皮一人爆肝创作，上千张图、几十万字，完整的 Vibe Coding 学习体系正式上线。",
    items: ["完整教程体系发布", "支持英文/繁中翻译", "多类型项目实战案例", "B站视频配套上线"],
    icon: "🔥",
  },
  {
    date: "2025-12",
    version: "v2.5",
    tag: "生态扩展",
    tagColor: "#06b6d4",
    title: "AI 工具测评体系建立",
    desc: "系统化 AI 工具测评框架上线，覆盖主流 AI 编程、写作、办公工具，持续更新。",
    items: ["AI 编程工具横向对比", "Gemini CLI 首测", "AI 零代码平台盘点", "工具评测标准化"],
    icon: "🛠️",
  },
  {
    date: "2025-02",
    version: "v1.0",
    tag: "项目启动",
    tagColor: "#94a3b8",
    title: "AI Guide 正式开源",
    desc: "liyupi/ai-guide 仓库正式开源，汇总 DeepSeek 相关资源，开启免费 AI 知识共享之旅。",
    items: ["DeepSeek 使用指南", "AI 基础概念科普", "学习资源导航", "社区建设启动"],
    icon: "🚀",
  },
];

export default function ChangelogSection() {
  return (
    <section id="changelog" className="relative py-24 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(139,92,246,0.07) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
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
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              color: "#a78bfa",
            }}
          >
            📋 更新日志
          </div>
          <h2 className="section-heading text-white mb-4">
            持续迭代，<span className="gradient-text">不断完善</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            跟踪每次重要更新，确保你获得最新、最实用的 AI 知识
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, #8b5cf6, rgba(139,92,246,0.1))",
            }}
          />

          <div className="space-y-8">
            {updates.map((update, i) => (
              <motion.div key={i} variants={fadeUp} className="relative flex gap-6 sm:gap-8">
                {/* Dot */}
                <div
                  className="relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl z-10"
                  style={{
                    background: `${update.tagColor}22`,
                    border: `2px solid ${update.tagColor}66`,
                    boxShadow: `0 0 20px ${update.tagColor}33`,
                  }}
                >
                  {update.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs text-slate-500 font-mono">{update.date}</span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded font-mono"
                      style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}
                    >
                      {update.version}
                    </span>
                    <span
                      className="tag-badge"
                      style={{
                        borderColor: `${update.tagColor}44`,
                        color: update.tagColor,
                        background: `${update.tagColor}11`,
                      }}
                    >
                      {update.tag}
                    </span>
                  </div>

                  <div className="glass-card p-5">
                    <h3 className="text-base font-bold text-white mb-2">{update.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{update.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {update.items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2 text-sm text-slate-400">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: update.tagColor }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all */}
        <motion.div variants={fadeUp} className="text-center mt-10">
          <a
            href="https://github.com/liyupi/ai-guide/commits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white glass-card transition-all duration-200"
            style={{ border: "1px solid rgba(99,102,241,0.2)" }}
          >
            查看完整提交历史
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
