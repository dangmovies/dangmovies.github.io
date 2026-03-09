"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [showcaseOpen, setShowcaseOpen] = useState(false)

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] flex flex-col items-center px-6 py-4 border-b border-[#222] gap-3">
        <Link href="https://dangmovies.ca" className="flex-shrink-0">
          <img 
            src="https://dangmovies.ca/logo-sm.webp" 
            alt="dang movies logo" 
            className="h-8 w-auto"
          />
        </Link>
        
        <ul className="flex items-center gap-6 text-sm">
          <li 
            className="relative"
            onMouseEnter={() => setShowcaseOpen(true)}
            onMouseLeave={() => setShowcaseOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-[#888] hover:text-[#e5e5e5] transition-colors tracking-wide"
            >
              showcase
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {showcaseOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <ul className="bg-[#0a0a0a] border border-[#222] rounded-md py-2 min-w-[100px] text-center">
                  <li>
                    <Link 
                      href="https://dangmovies.ca/link_2025_showcase.html" 
                      className="block px-4 py-2 text-[#888] hover:text-[#e5e5e5] hover:bg-[#1a1a1a] transition-colors"
                    >
                      2025
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://dangmovies.ca/link_2024_showcase.html" 
                      className="block px-4 py-2 text-[#888] hover:text-[#e5e5e5] hover:bg-[#1a1a1a] transition-colors"
                    >
                      2024
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://dangmovies.ca/link_2023_showcase.html" 
                      className="block px-4 py-2 text-[#888] hover:text-[#e5e5e5] hover:bg-[#1a1a1a] transition-colors"
                    >
                      2023
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://dangmovies.ca/link_2022_showcase.html" 
                      className="block px-4 py-2 text-[#888] hover:text-[#e5e5e5] hover:bg-[#1a1a1a] transition-colors"
                    >
                      {'2022 \u2193'}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link 
              href="https://dangmovies.ca/link_about_resume.html" 
              className="text-[#888] hover:text-[#e5e5e5] transition-colors tracking-wide"
            >
              about/resume
            </Link>
          </li>
          <li>
            <Link 
              href="https://dangmovies.ca/link_dev.html" 
              className="text-[#888] hover:text-[#e5e5e5] transition-colors tracking-wide"
            >
              development
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pt-28 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-7xl md:text-8xl font-light tracking-tight text-[#e5e5e5]">
            2025
          </h1>
          <div className="mt-4 w-16 h-px bg-[#333] mx-auto" />
        </motion.div>
      </div>
    </header>
  )
}
