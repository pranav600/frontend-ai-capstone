import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#F5F3FF] via-[#EEF2FF] to-[#E0E7FF] flex items-center justify-center px-4"
      style={{ fontFamily: "'Poppins', 'Open Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');`}</style>

      <div className="text-center max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse inline-block" />
          FE-03 · AI Frontend Capstone
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#1E1B4B] leading-tight mb-4">
          Vague vs.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Spec-Driven
          </span>
          <br />AI Workflow
        </h1>

        <p className="text-slate-500 text-base leading-relaxed mb-10">
          A side-by-side comparison of what happens when you give an AI a vague
          prompt versus a structured, detailed specification. Built with{" "}
          <span className="text-indigo-500 font-medium">Next.js</span>,{" "}
          <span className="text-indigo-500 font-medium">TypeScript</span> &{" "}
          <span className="text-indigo-500 font-medium">Tailwind CSS</span>.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          {/* Vague Card */}
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Vague Prompt</span>
            </div>
            <p className="text-slate-700 text-sm font-medium mb-1">"Create a settings form."</p>
            <p className="text-slate-400 text-xs">No context. No structure. Minimal output.</p>
          </div>

          {/* Spec-Driven Card */}
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-indigo-200 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">Spec-Driven</span>
            </div>
            <p className="text-slate-700 text-sm font-medium mb-1">"Responsive. TypeScript. Validation. Toast. Dark mode."</p>
            <p className="text-slate-400 text-xs">Detailed spec. Premium, production-ready output.</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/settings"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          View the Settings Form
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          Branch:{" "}
          <code className="bg-slate-100 text-indigo-500 px-1.5 py-0.5 rounded font-mono">
            feature/spec-driven-ai
          </code>
        </p>
      </div>
    </div>
  );
}
