"use client";

import { categories } from "@/data/templates";

export default function TemplateFilters({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer
              ${isActive
                ? "bg-primary text-white border-primary shadow-md shadow-primary/15"
                : "bg-white text-muted border-slate-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              }
            `}
          >
            {category === "All" ? "All Templates" : category}
          </button>
        );
      })}
    </div>
  );
}
