import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1800&auto=format&fit=crop"
                alt="Dashboard preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Design, code, and preview in one place</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                This playground brings your ideas to life quickly. Build beautiful interfaces with
                modern components, connect them to real APIs, and share live previews instantly.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> Rapid iteration with instant reloads</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> Production-ready stack out of the box</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> Clean, accessible UI patterns</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
