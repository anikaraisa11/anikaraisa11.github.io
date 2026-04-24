'use client';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <main className="p-20">
      <Navbar />
      <h1 className="text-4xl mb-6">Projects</h1>

      <h2 className="text-2xl mt-6">Frontend</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <ProjectCard title="Landing Page" tag="Frontend" />
      </div>

      <h2 className="text-2xl mt-6">Data Analysis</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <ProjectCard title="Dashboard" tag="Data" />
      </div>

      <h2 className="text-2xl mt-6">AI Agents</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <ProjectCard title="AI Automation" tag="AI" />
      </div>
    </main>
  );
}
