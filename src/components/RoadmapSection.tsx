"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "新手入门",
    status: "done",
    desc: "AI 基础概念、DeepSeek 使用入门、提问技巧、清华大学 DeepSeek 指南",
    icon: "🌱",
    items: ["动画解释大模型", "DeepSeek 快速上手", "AI 提问技巧", "免费学习资源导航"],
  },
  {
    phase: "Phase 2",
    title: "Vibe Coding",
    status: "done",
    desc: "完整的 Vibe Coding 零基础教程，从认知到上手，从工具到实战，再到产品变现",
    icon: "🔥",
    items: [
      "Vibe Coding 简介与快速上手",
      "AI 编程工具选型指南",
      "多类型项目实战演练",
      "经验技巧与上下文管理",
      "产品变现全流程",
    ],
  },
  {
    phase: "Phase 3",
    title: "AI 编程进阶",
    status: "done",
    desc: "Cursor、Claude Code、MCP 开发、Spring AI 等进阶技术，全面提升 AI 编程能力",
    icon: "⚡",
    items: [
      "Cursor 高效使用技巧",
      "Claude Code 神级用法",
      "MCP 服务开发",
      "Spring AI 框架实战",
      "AI 智能体项目",
    ],
  },
  {
    phase: "Phase 4",
    title: "AI 工具生态",
    status: "in-progress",
    desc: "持续更新 AI 工具测评，覆盖主流模型与效率工具",
    icon: "🤖",
    items: [
      "GPT-5 / Claude 4 测评",
      "AI 零代码平台对比",
      "AI 办公效率工具",
      "视频创作 AI 工具",
      "Gemini CLI 等新工具",
    ],
  },
  {
    phase: "Phase 5",
    title: "社区共建",
    status: "planned",
    desc: "扩大社区共建规模，引入更多贡献者，完善知识库内容",
    icon: "🌐",
    items: [
      "多语言内容支持",
      "社区贡献指南完善",
      "内容质量评审机制",
      "专题系列文章",
    ],
  },
];

const statusConfig = {
  done: { label: "已完成", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)" },
  "in-progress": { label: "进行中", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
  planned: { label: "计划中", color: "#6366f1", bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.3)" },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(99,102,241,0.07) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
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
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#34d399",
            }}
          >
            🗺️ 内容路线图
          </div>
          <h2 className="section-heading text-white mb-4">
            系统化的 <span className="gradient-text">学习路径</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从零基础到 AI 变现，完整覆盖每个学习阶段
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5"
            style={{
              background:
                "linear-gradient(to bottom, #6366f1, #8b5cf6, rgba(99,102,241,0.2))",
            }}
          />

          <div className="space-y-8">
            {roadmapItems.map((item, i) => {
              const status = statusConfig[item.status as keyof typeof statusConfig];
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 flex-shrink-0"
                    style={{
                      background: status.bg,
                      border: `2px solid ${status.color}`,
                      boxShadow: `0 0 15px ${status.color}44`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      isRight ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{ background: "rgba(99,102,241,0.2)", color: "#818cf8" }}
                        >
                          {item.phase}
                        </span>
                        <span
                          className="tag-badge"
                          style={{
                            borderColor: status.border,
                            color: status.color,
                            background: status.bg,
                          }}
                        >
                          {status.label}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

                      <ul className="space-y-1">
                        {item.items.map((subItem, si) => (
                          <li
                            key={si}
                            className="flex items-center gap-2 text-sm text-slate-400"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: status.color }}
                            />
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
