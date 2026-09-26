"use client";

import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function TemplateShowcase() {
  return (
    <section className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-main mb-4">Featured Templates</h2>
            <p className="text-muted max-w-2xl">
              Start with our beautiful, purpose-built templates and let AI handle the formatting.
            </p>
          </div>
          <Button as={Link} href="/templates" className="font-medium bg-white text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary/30">
            View All Templates
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.slice(0, 4).map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
