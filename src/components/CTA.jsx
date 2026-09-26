"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/80 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/40 rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to create your poster?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Join hundreds of organizers using PosterAI to generate professional, ready-to-print materials in minutes.
        </p>
        <Button as={Link} href="/create" size="lg" className="bg-white text-primary font-bold hover:bg-slate-50 shadow-xl px-8 py-6 text-lg border border-transparent">
          Create Your Poster
        </Button>
      </div>
    </section>
  );
}
