// 🚀 NEXT.JS PREMIUM PORTFOLIO (APP ROUTER)
// Install:
// npx create-next-app@latest portfolio
// cd portfolio
// npm install framer-motion

// ---------------- app/layout.tsx ----------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

// ---------------- app/page.tsx ----------------
'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-30" />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          AI Developer Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-400"
        >
          AI Agents • Data • Frontend
        </motion.p>
      </section>

      {/* PROJECTS */}
      <Projects />

    </main>
  );
}

// ---------------- components/Projects.tsx ----------------
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  { title: 'AI SaaS', type: 'AI' },
  { title: 'Dashboard', type: 'Data' },
  { title: 'Landing Page', type: 'Frontend' },
];

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? data : data.filter(p => p.type === filter);

  return (
    <section className="p-20">
      <h2 className="text-3xl mb-6">Projects</h2>

      <div className="flex gap-4 mb-6">
        {['All','AI','Data','Frontend'].map(f => (
          <button key={f} onClick={()=>setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p,i)=>(
          <motion.div
            key={i}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            className="p-6 bg-white/5 rounded-xl backdrop-blur-lg"
          >
            {p.title}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------------- app/blog/page.tsx ----------------
export default function Blog() {
  return (
    <div className="p-20">
      <h1 className="text-4xl">Blog / Case Studies</h1>
      <p className="mt-4 text-gray-400">Write about your AI projects...</p>
    </div>
  );
}

// ---------------- tailwind.config.js ----------------
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

// ---------------- styles/globals.css ----------------
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: radial-gradient(circle at top, #1e293b, #020617);
}
