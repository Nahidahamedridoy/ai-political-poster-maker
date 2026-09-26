export default function TemplateCard({ template }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 overflow-hidden group cursor-pointer">
      <div className={`w-full aspect-[3/4] ${template.imagePlaceholder} relative flex items-center justify-center p-4`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div className="relative z-10 text-center">
          <div className="text-white font-bold text-2xl drop-shadow-md">{template.title}</div>
          <div className="mt-2 w-12 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-start px-6 py-5">
        <span className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">
          {template.category}
        </span>
        <h4 className="font-bold text-slate-900 text-lg leading-snug">{template.title}</h4>
        <p className="text-sm text-slate-500 mt-2 line-clamp-2">{template.description}</p>
      </div>
    </div>
  );
}
