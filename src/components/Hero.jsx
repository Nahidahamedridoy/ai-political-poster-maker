"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-base pt-16 md:pt-24 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-main mb-6">
            Create Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Posters with AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed">
            Design polished Bangla posters for celebrations, tributes, community events, and announcements with AI-assisted layouts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button as={Link} href="/create" size="lg" className="bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90">
              Create Your Poster
            </Button>
            <Button as={Link} href="/templates" variant="bordered" size="lg" className="font-semibold bg-white border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30">
              Explore Templates
            </Button>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative mx-auto w-full max-w-[400px] aspect-[4/5] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
          {/* Mockup Poster Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-red-50 flex flex-col p-6">
            
            {/* Top decorative header */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs border border-green-200">
                Logo
              </div>
              <div className="text-right">
                <p className="text-[10px] text-green-800 font-semibold tracking-wider uppercase">Annual Event</p>
                <p className="text-xs text-slate-500">Community Organization</p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-green-900 leading-tight mb-2">
                সাংস্কৃতিক <br />
                <span className="text-red-600">সন্ধ্যা ২০২৬</span>
              </h2>
              <div className="w-12 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

            {/* Photo placeholders */}
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-20 h-24 bg-slate-200 rounded-lg shadow-inner overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-300 to-transparent opacity-50"></div>
                 <div className="absolute bottom-1 left-0 w-full text-center text-[8px] font-bold text-slate-600">Chief Guest</div>
              </div>
              <div className="w-24 h-28 bg-slate-200 rounded-lg shadow-inner overflow-hidden relative border-2 border-white -mt-2">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-300 to-transparent opacity-50"></div>
                 <div className="absolute bottom-1 left-0 w-full text-center text-[9px] font-bold text-slate-600">Speaker</div>
              </div>
              <div className="w-20 h-24 bg-slate-200 rounded-lg shadow-inner overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-300 to-transparent opacity-50"></div>
                 <div className="absolute bottom-1 left-0 w-full text-center text-[8px] font-bold text-slate-600">Special Guest</div>
              </div>
            </div>

            {/* Event Details */}
            <div className="mt-auto bg-green-900 text-white p-4 rounded-xl shadow-md text-center">
              <p className="text-sm font-semibold mb-1">Date: 26 March, 2026</p>
              <p className="text-xs text-green-100 opacity-90">Venue: Central Auditorium</p>
            </div>
            
            {/* Footer Credit */}
            <div className="text-center mt-3">
              <p className="text-[9px] text-slate-400">Organized by Community Welfare Society</p>
            </div>
          </div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
