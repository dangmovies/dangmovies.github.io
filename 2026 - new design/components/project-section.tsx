"use client"

import { motion } from "framer-motion"

interface ProjectSectionProps {
  status: string
  title: string
  subtitle: string
  badge?: string
  description: string
  credits?: string[]
  acknowledgement: string
  posterUrl?: string
}

export function ProjectSection({
  status,
  title,
  subtitle,
  badge,
  description,
  credits,
  acknowledgement,
  posterUrl
}: ProjectSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-[#222] pt-12"
    >
      <p className="text-[#666] text-xs tracking-[0.2em] uppercase mb-6">
        {status}
      </p>

      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#e5e5e5] mb-2 tracking-tight">
              {title}
            </h2>
            <p className="text-[#888] text-sm tracking-wide">
              {subtitle}
            </p>
          </div>

          {badge && (
            <span className="inline-block text-xs tracking-[0.15em] uppercase px-3 py-1.5 border border-[#333] text-[#888] mb-4">
              {badge}
            </span>
          )}

          <p className="text-[#aaa] leading-relaxed text-base mb-6">
            {description}
          </p>

          {credits && credits.length > 0 && (
            <div className="space-y-1 mb-6">
              {credits.map((credit, index) => (
                <p key={index} className="text-[#777] text-sm">
                  {credit}
                </p>
              ))}
            </div>
          )}

          <p className="text-[#555] text-xs italic leading-relaxed">
            {acknowledgement}
          </p>
        </div>

        {posterUrl && (
          <div className="flex-shrink-0 order-first md:order-last">
            <img
              src={posterUrl}
              alt={`${title} poster`}
              className="w-full md:w-88 h-auto object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </motion.section>
  )
}
