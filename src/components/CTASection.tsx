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

export default function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15), rgba(6,182,212,0.1))",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 60%)",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <motion.div
            className="relative z-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-6xl mb-6 float-animation">🚀</motion.div>
            <motion.h2 id="cta-title" variants={fadeUp} className="section-heading text-white mb-4">
              加入 <span className="gradient-text">28,000+</span> 开发者
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              一起探索 AI 技术的无限可能，从入门到变现，鱼皮陪你全程走过
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://ai.codefather.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-glow"
                aria-label="访问 AI Guide 在线知识库"
              >
                🌐 访问在线知识库
              </a>
              <a
                href="https://github.com/liyupi/ai-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e2e8f0",
                }}
                aria-label="在 GitHub Star AI Guide 项目"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                ⭐ Star 支持项目
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "📱", label: "关注公众号", sub: "程序员鱼皮", color: "#10b981" },
                { icon: "🎬", label: "B站关注", sub: "@程序员鱼皮", color: "#00b5e2" },
                { icon: "💬", label: "加入交流群", sub: "一起学AI", color: "#f59e0b" },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ background: `${social.color}22` }}
                  >
                    {social.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-white">{social.label}</div>
                    <div className="text-xs text-slate-500">{social.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
