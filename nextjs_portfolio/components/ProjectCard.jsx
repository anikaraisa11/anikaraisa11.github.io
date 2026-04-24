export default function ProjectCard({ title, tag }) {
  return (
    <div className="p-6 bg-white/5 rounded-xl backdrop-blur-md">
      <h3 className="text-xl">{title}</h3>
      <span className="text-sm text-blue-400">{tag}</span>
    </div>
  );
}
