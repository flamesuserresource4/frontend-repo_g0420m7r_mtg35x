import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold text-gray-800">Vibe Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#about" className="hover:text-gray-900 transition">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm">Get Started</button>
          </div>

          <button aria-label="Toggle Menu" className="md:hidden p-2" onClick={() => setOpen((s) => !s)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2 text-gray-700">
              <a href="#features" className="px-2 py-2 rounded-md hover:bg-gray-50">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded-md hover:bg-gray-50">Pricing</a>
              <a href="#about" className="px-2 py-2 rounded-md hover:bg-gray-50">About</a>
              <div className="flex items-center gap-2 pt-2">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
