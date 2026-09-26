"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateFilters from "@/components/TemplateFilters";
import TemplateCard from "@/components/TemplateCard";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-base text-main">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
              Choose a Template
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              Start with a professionally designed template and customize it with your own information.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="mb-10">
            <TemplateFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Results count */}
          <p className="text-sm text-muted mb-6">
            Showing{" "}
            <span className="font-semibold text-main">
              {filteredTemplates.length}
            </span>{" "}
            {filteredTemplates.length === 1 ? "template" : "templates"}
            {activeCategory !== "All" && (
              <> in <span className="font-semibold text-primary">{activeCategory}</span></>
            )}
          </p>

          {/* Template Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                showActions
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl font-semibold text-muted">
                No templates found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
              >
                View all templates
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
