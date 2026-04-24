"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 28000,
    suffix: "+",
    label: "GitHub Stars",
    icon: "⭐",
    color: "#f59e0b",
  },
  {
    value: 3000,
    suffix: "+",
    label: "仓库 Forks",
    icon: "🔱",
    color: "#6366f1",
  },
  {
    value: 50,
    suffix: "+",
    label: "精选教程",
    icon: "📚",
    color: "#06b6d4",
  },
  {
    value: 100,
    suffix: "+",
    label: "AI工具收录",
    icon: "🤖",
    color: "#8b5cf6",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden animated-gradient grid-bg"
    >
      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none float-animation"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          top: "20%",
          left: "10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full pointer-events-none float-animation"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          bottom: "25%",
          right: "12%",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute w-32 h-32 rounded-full pointer-events-none float-animation"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "60%",
          left: "70%",
          animationDelay: "0.8s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
        {/* Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 glass-card neon-border">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-slate-300">完全免费开放 · 持续更新中</span>
          <span className="tag-badge" style={{ borderColor: "#f59e0b44", color: "#fbbf24", background: "rgba(245,158,11,0.1)" }}>
            🔥 HOT
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={fadeUp} className="section-heading text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
          程序员鱼皮的
          <br />
          <span className="gradient-text">AI 知识库</span>
        </motion.h1>

        {/* Sub heading */}
        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          汇总整合热门 AI 工具与教程，包括
          <span className="text-indigo-400 font-medium"> Vibe Coding</span>、
          <span className="text-purple-400 font-medium"> DeepSeek</span>、
          <span className="text-cyan-400 font-medium"> 提示词大全</span>等
        </motion.p>
        <motion.p variants={fadeUp} className="text-base text-slate-500 max-w-2xl mx-auto mb-12">
          减少信息差，让每个人都能享受 AI 技术红利。彻底免费 · 社区共建 · 持续更新
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://ai.codefather.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-glow"
          >
            🚀 立即探索知识库
          </a>
          <a
            href="https://github.com/liyupi/ai-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold glass-card"
            style={{ color: "#94a3b8", border: "1px solid rgba(99,102,241,0.3)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Star on GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-slate-500">向下滚动探索</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-center justify-center">
          <div
            className="w-1 h-2 rounded-full bg-slate-400"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
