'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center gap-6 p-4 bg-white/5 backdrop-blur-md z-50">
      <Link href="/">Home</Link>
      <Link href="/why-me">Why Me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/education">Education</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
