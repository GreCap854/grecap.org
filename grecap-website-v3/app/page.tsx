
"use client";
import React, { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1a14] text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded">Skip to content</a>

      <header className="sticky top-0 z-40 backdrop-blur bg-[#0f1a14]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3" aria-label="GRECAP home">
              <img src="/logo-grecap.svg" alt="GRECAP Logo" className="h-9 w-9" />
              <div>
                <p className="text-xl font-bold leading-none">GRECAP</p>
                <p className="text-xs text-white/70 leading-none">Green Capital Region Alliance</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              {["Mission","Sites","Programs","Impact","News","Donate"].map((label) => (
                <a key={label} className={label==="Donate" ? "rounded-xl bg-[#2fbf71] text-[#0f1a14] px-4 py-2 font-semibold hover:opacity-90" : "hover:text-[#2fbf71]"} href={`#${label.toLowerCase()}`}>{label}</a>
              ))}
            </nav>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#2fbf71]"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M3.75 6.75h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Z"/></svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-white/10 px-4 py-3 space-y-1">
            {["Mission","Sites","Programs","Impact","News","Donate"].map(label => (
              <a key={label} href={`#${label.toLowerCase()}`} className={label==="Donate" ? "block px-3 py-2 rounded-lg bg-[#2fbf71] text-[#0f1a14] font-semibold" : "block px-3 py-2 rounded-lg hover:bg-white/10"}>{label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="main" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Building Prosperity <span className="text-[#2fbf71]">the Sustainable Way</span>.</h1>
            <p className="mt-6 text-lg text-white/80">GRECAP leads the transformation of the Capital Region’s historic industrial sites into engines of green growth, sustainable jobs, and healthier communities.</p>
            <div className="mt-8 flex gap-4">
              <a href="#programs" className="rounded-xl bg-[#2fbf71] text-[#0f1a14] px-5 py-3 font-semibold">Our Programs</a>
              <a href="#sites" className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:border-white/40">See Sites</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#14231b] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form action="https://formspree.io/f/yourformid" method="POST" className="grid gap-4" aria-label="Contact form">
            <label className="grid gap-1">
              <span className="text-sm text-white/80">Name</span>
              <input type="text" name="name" placeholder="Your Name" required className="rounded-lg bg-white/5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2fbf71]" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-white/80">Email</span>
              <input type="email" name="email" placeholder="Your Email" required className="rounded-lg bg-white/5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2fbf71]" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-white/80">Message</span>
              <textarea name="message" rows={5} placeholder="Your Message" required className="rounded-lg bg-white/5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2fbf71]" />
            </label>
            <button type="submit" className="rounded-xl bg-[#2fbf71] text-[#0f1a14] px-5 py-3 font-semibold">Send</button>
            <p className="text-xs text-white/60">On Vercel, Formspree handles submissions. Replace <code>yourformid</code> with your real ID.</p>
          </form>
        </div>
      </section>

      <section id="donate" className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
          <p className="mb-4 text-white/80">Your contribution helps fund site redevelopment, community planning, and green job creation in the Capital Region.</p>
          <a href="https://www.givebutter.com/yourcampaign" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#2fbf71] text-[#0f1a14] px-5 py-3 font-semibold">Donate via GiveButter</a>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-white/60">
        © {new Date().getFullYear()} GRECAP. All rights reserved.
      </footer>
    </div>
  );
}
