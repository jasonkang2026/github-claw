"use client";

import { useEffect, useRef, useState } from "react";

// Simulated star growth data
const starData = [
  { month: "2025-02", stars: 200, label: "Feb" },
  { month: "2025-03", stars: 800, label: "Mar" },
  { month: "2025-04", stars: 2500, label: "Apr" },
  { month: "2025-05", stars: 5000, label: "May" },
  { month: "2025-06", stars: 7800, label: "Jun" },
  { month: "2025-07", stars: 10200, label: "Jul" },
  { month: "2025-08", stars: 12800, label: "Aug" },
  { month: "2025-09", stars: 15500, label: "Sep" },
  { month: "2025-10", stars: 17900, label: "Oct" },
  { month: "2025-11", stars: 20400, label: "Nov" },
  { month: "2025-12", stars: 22800, label: "Dec" },
  { month: "2026-01", stars: 25200, label: "Jan" },
  { month: "2026-02", stars: 26500, label: "Feb" },
  { month: "2026-03", stars: 27200, label: "Mar" },
  { month: "2026-04", stars: 28000, label: "Apr" },
];

function StarChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animated, setAnimated] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const padding = { top: 20, right: 20, bottom: 40, left: 55 };
  const width = 800;
  const height = 260;
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxStars = Math.max(...starData.map((d) => d.stars));
  const xs = starData.map((_, i) => (i / (starData.length - 1)) * chartW);
  const ys = starData.map((d) => chartH - (d.stars / maxStars) * chartH);

  const pathD = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${x},${ys[i]}`)
    .join(" ");

  const areaD =
    `M ${xs[0]},${chartH} ` +
    xs.map((x, i) => `L ${x},${ys[i]}`).join(" ") +
    ` L ${xs[xs.length - 1]},${chartH} Z`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  const formatNum = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
    return n.toString();
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        style={{ minWidth: "400px" }}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="chartClip">
            <rect x="0" y="0" width={animated ? chartW : 0} height={chartH}>
              {animated && (
                <animate
                  attributeName="width"
                  from="0"
                  to={chartW}
                  dur="2s"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
              )}
            </rect>
          </clipPath>
        </defs>

        <g transform={`translate(${padding.left},${padding.top})`}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = chartH * (1 - ratio);
            return (
              <g key={i}>
                <line
                  x1={0}
                  y1={y}
                  x2={chartW}
                  y2={y}
                  stroke="rgba(99,102,241,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
                <text
                  x={-8}
                  y={y + 4}
                  textAnchor="end"
                  fill="#64748b"
                  fontSize="11"
                >
                  {formatNum(Math.round(maxStars * ratio))}
                </text>
              </g>
            );
          })}

          {/* Area */}
          <path
            d={areaD}
            fill="url(#areaGrad)"
            clipPath="url(#chartClip)"
          />

          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            clipPath="url(#chartClip)"
          />

          {/* X-axis labels */}
          {starData.map((d, i) => {
            if (i % 2 !== 0 && i !== starData.length - 1) return null;
            return (
              <text
                key={i}
                x={xs[i]}
                y={chartH + 25}
                textAnchor="middle"
                fill="#64748b"
                fontSize="10"
              >
                {d.label}
              </text>
            );
          })}

          {/* Points */}
          {starData.map((d, i) => (
            <g key={i}>
              <circle
                cx={xs[i]}
                cy={ys[i]}
                r={hoveredPoint === i ? 6 : 4}
                fill={hoveredPoint === i ? "#22d3ee" : "#818cf8"}
                stroke={hoveredPoint === i ? "rgba(34,211,238,0.4)" : "rgba(129,140,248,0.3)"}
                strokeWidth={hoveredPoint === i ? 4 : 2}
                style={{ cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />

              {/* Tooltip */}
              {hoveredPoint === i && (
                <g>
                  <rect
                    x={xs[i] - 40}
                    y={ys[i] - 36}
                    width="80"
                    height="28"
                    rx="6"
                    fill="rgba(10,15,46,0.95)"
                    stroke="rgba(99,102,241,0.4)"
                    strokeWidth="1"
                  />
                  <text
                    x={xs[i]}
                    y={ys[i] - 18}
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ⭐ {d.stars.toLocaleString()}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* Latest star marker */}
          <g>
            <circle
              cx={xs[xs.length - 1]}
              cy={ys[ys.length - 1]}
              r="8"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              opacity="0.6"
            >
              <animate
                attributeName="r"
                from="8"
                to="16"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.6"
                to="0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
}

const achievements = [
  {
    icon: "🌟",
    value: "28k+",
    label: "GitHub Stars",
    sub: "持续增长中",
    color: "#f59e0b",
  },
  {
    icon: "👥",
    value: "3k+",
    label: "Forks",
    sub: "社区共建",
    color: "#6366f1",
  },
  {
    icon: "📈",
    value: "Top 0.1%",
    label: "仓库排名",
    sub: "全平台热度",
    color: "#10b981",
  },
  {
    icon: "💎",
    value: "100+",
    label: "贡献者",
    sub: "持续增长",
    color: "#8b5cf6",
  },
];

export default function GrowthSection() {
  return (
    <section id="growth" className="relative py-24 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.3)",
              color: "#22d3ee",
            }}
          >
            📈 增长趋势
          </div>
          <h2 className="section-heading text-white mb-4">
            数字见证，<span className="gradient-text">影响力爆发</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从零起步，用数据证明 AI Guide 的价值与影响力
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="glass-card p-5 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: `${a.color}08`,
                borderColor: `${a.color}22`,
              }}
            >
              <div className="text-2xl mb-2">{a.icon}</div>
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: a.color }}
              >
                {a.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">{a.label}</div>
              <div className="text-xs text-slate-500">{a.sub}</div>
            </div>
          ))}
        </div>

        {/* Star history chart */}
        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">⭐ GitHub Stars 增长历史</h3>
              <p className="text-sm text-slate-400">liyupi/ai-guide · 2025年2月至今</p>
            </div>
            <a
              href="https://star-history.com/#liyupi/ai-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 underline"
            >
              查看完整历史 →
            </a>
          </div>
          <StarChart />
        </div>

        {/* Trending badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "🔥",
              title: "GitHub Trending",
              desc: "多次登上 GitHub Trending 榜单",
              color: "#f59e0b",
            },
            {
              icon: "📱",
              title: "全网热议",
              desc: "B站、微信、知乎等平台持续传播",
              color: "#6366f1",
            },
            {
              icon: "🌍",
              title: "国际影响",
              desc: "支持中英文双语，海外开发者关注",
              color: "#10b981",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-5 flex items-start gap-4"
              style={{
                borderColor: `${item.color}22`,
                background: `${item.color}06`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${item.color}22` }}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
