import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="absolute -top-24 right-1/2 translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-indigo-500/10 via-blue-400/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 text-xs font-medium ring-1 ring-indigo-600/20">
              <Star size={14} /> New: AI-powered flows
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Build, preview, and ship faster with Vibe
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Spin up full-stack apps in minutes. Design beautiful interfaces,
              wire up real APIs, and iterate live — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800">
                Start building
              </a>
              <a href="#about" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">
                Learn more
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              No credit card required • Free developer tier
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-white shadow-xl ring-1 ring-gray-100 p-4">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-xl bg-indigo-500/10 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-cyan-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
