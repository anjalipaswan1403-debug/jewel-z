
import React from "react";

export default function JewelZSite() {
  return (
    <div className="min-h-screen font-sans text-gray-800" style={{ background: "linear-gradient(to bottom, #FFF8EE, #FFF0F2)" }}>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div aria-hidden className="w-12 h-12 flex items-center justify-center rounded-full shadow-sm" style={{ background: "#FFF0D9" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 2,9 12,22 22,9" stroke="#C49A6C" strokeWidth="1.4" fill="#FFEFD9" />
              <line x1="2" y1="9" x2="22" y2="9" stroke="#B07B45" strokeWidth="1.2" />
              <line x1="12" y1="2" x2="12" y2="22" stroke="#B07B45" strokeWidth="1.2" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">Jewel-Z</h1>
            <p className="text-xs text-gray-600">Because every girl deserves a jewel</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#collections" className="hover:underline">Collections</a>
          <a href="#custom" className="hover:underline">Custom Design</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="bg-white px-4 py-2 rounded-md shadow text-sm">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-white shadow">Menu</button>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Timeless jewelry, crafted with love.</h2>
          <p className="mt-4 text-gray-700 max-w-xl">Jewel-Z offers beautifully designed, handcrafted jewelry — from minimalist everyday wear to bold statement pieces. Every design celebrates individuality and elegance.</p>
          <div className="mt-6 flex gap-4">
            <a href="#collections" className="px-5 py-3 rounded-md shadow bg-[#FFDFAF] hover:opacity-95">Shop Now</a>
            <a href="#custom" className="px-5 py-3 rounded-md border border-gray-300">Custom Orders</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-40 rounded-lg shadow bg-white flex items-center justify-center">Necklace</div>
            <div className="h-40 rounded-lg shadow bg-white flex items-center justify-center">Earrings</div>
            <div className="h-40 rounded-lg shadow bg-white flex items-center justify-center">Bracelet</div>
            <div className="h-40 rounded-lg shadow bg-white flex items-center justify-center">Ring</div>
          </div>
        </div>
      </section>
    </div>
  );
}
