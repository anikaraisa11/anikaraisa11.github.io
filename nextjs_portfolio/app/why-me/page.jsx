'use client';
import Navbar from '../../components/Navbar';

export default function WhyMe() {
  return (
    <main className="p-20">
      <Navbar />
      <h1 className="text-4xl mb-6">Why Me</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 rounded-xl">AI Agent Building</div>
        <div className="p-6 bg-white/5 rounded-xl">Data Analysis</div>
        <div className="p-6 bg-white/5 rounded-xl">Frontend Development</div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl">Future Goals</h2>
        <p className="text-gray-400 mt-2">Build scalable AI SaaS and impactful products.</p>
      </div>
    </main>
  );
}
