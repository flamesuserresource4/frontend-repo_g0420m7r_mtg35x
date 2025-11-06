export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
