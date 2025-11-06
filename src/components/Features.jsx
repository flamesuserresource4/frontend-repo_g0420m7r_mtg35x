import { Code, Zap, Shield, Layout } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-indigo-600" size={18} />,
    title: 'Instant setup',
    desc: 'Start with a ready-to-code stack — no config, no hassle.',
  },
  {
    icon: <Layout className="text-indigo-600" size={18} />,
    title: 'Beautiful UI',
    desc: 'Tailwind-first components and animations out of the box.',
  },
  {
    icon: <Code className="text-indigo-600" size={18} />,
    title: 'Full-stack',
    desc: 'React on the front, FastAPI on the back — production ready.',
  },
  {
    icon: <Shield className="text-indigo-600" size={18} />,
    title: 'Secure by default',
    desc: 'Best practices baked in for auth, validation, and APIs.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-50/60 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why developers choose Vibe</h2>
          <p className="mt-3 text-gray-600">Everything you need to go from idea to live preview in minutes.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl bg-white ring-1 ring-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <div className="h-9 w-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
