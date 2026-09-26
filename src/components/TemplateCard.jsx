"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function TemplateCard({ template, showActions = false }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group">
      {/* Poster Preview */}
      <div className={`w-full aspect-[3/4] bg-gradient-to-br ${template.poster.bgFrom} ${template.poster.bgTo} relative flex flex-col items-center justify-between p-5 overflow-hidden`}>
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10"></div>

        {/* Poster content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
          {/* Top bar */}
          <div className="w-full flex justify-between items-start">
            <div className={`w-8 h-8 rounded-full ${template.poster.accentColor} opacity-80`}></div>
            <p className={`text-[9px] ${template.poster.textColor} opacity-70 uppercase tracking-widest font-semibold`}>
              {template.poster.org}
            </p>
          </div>

          {/* Center headline */}
          <div className="text-center my-auto py-4">
            <h3 className={`text-2xl font-black ${template.poster.textColor} leading-tight drop-shadow-md`}>
              {template.poster.headline}
            </h3>
            <div className={`w-10 h-0.5 ${template.poster.accentColor} mx-auto rounded-full my-2.5`}></div>
            <p className={`text-xs ${template.poster.textColor} opacity-80 font-medium`}>
              {template.poster.subheadline}
            </p>
          </div>

          {/* Bottom photo placeholders */}
          <div className="flex gap-2 items-end">
            <div className="w-10 h-12 bg-white/20 rounded-md"></div>
            <div className="w-12 h-14 bg-white/25 rounded-md border border-white/30"></div>
            <div className="w-10 h-12 bg-white/20 rounded-md"></div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Info */}
      <div className="px-6 py-5">
        <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
          {template.category}
        </span>
        <h4 className="font-bold text-primary text-lg leading-snug mt-1.5">{template.title}</h4>
        <p className="text-sm text-muted mt-2 line-clamp-2 leading-relaxed">{template.description}</p>

        {showActions && (
          <div className="flex gap-3 mt-5">
            <Button
              as={Link}
              href={`/create?template=${template.id}`}
              size="sm"
              className="bg-primary text-white font-semibold hover:bg-primary/90 flex-1"
            >
              Use Template
            </Button>
            <Button
              size="sm"
              variant="bordered"
              className="border-primary/20 text-primary font-semibold hover:bg-primary/5 flex-1"
              onPress={() => {}}
            >
              Preview
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
