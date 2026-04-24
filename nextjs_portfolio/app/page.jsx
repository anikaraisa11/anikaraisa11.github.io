'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center">
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
          Hi, I'm AI Developer 🚀
        </motion.h1>
        <p className="mt-4 text-gray-400">AI Agents • Data • Frontend</p>
      </section>
    </main>
  );
}
