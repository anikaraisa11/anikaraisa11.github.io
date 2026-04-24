'use client';
import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <main className="p-20">
      <Navbar />
      <h1 className="text-4xl mb-6">Contact</h1>

      <form className="max-w-md">
        <input className="w-full p-2 mb-4 bg-white/10" placeholder="Name" />
        <input className="w-full p-2 mb-4 bg-white/10" placeholder="Email" />
        <textarea className="w-full p-2 mb-4 bg-white/10" placeholder="Message" />
        <button className="bg-blue-500 px-4 py-2 rounded">Send</button>
      </form>
    </main>
  );
}
