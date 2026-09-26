import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Or hardcode 2026 as requested

  return (
    <footer className="bg-main text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
              PosterAI
            </Link>
            <p className="text-slate-400 max-w-sm">
              Design polished Bangla posters for celebrations, tributes, community events, and announcements with AI-assisted layouts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/templates" className="hover:text-accent transition-colors">Templates</Link></li>
              <li><Link href="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-3">
              <li><Link href="/login" className="hover:text-accent transition-colors">Login</Link></li>
              <li><Link href="/create" className="hover:text-accent transition-colors font-medium">Create Poster</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 PosterAI. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
