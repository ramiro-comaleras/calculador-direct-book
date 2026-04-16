import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/ports-of-call-bocas-del-toro.webp')`, backgroundPosition: 'center 40%' }}
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#062e1e]/80 via-[#062e1e]/70 to-[#04140e]/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 lg:py-56 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-[#e0ab45] rounded-full animate-pulse" />
            <span className="text-body-sm text-teal-50 uppercase tracking-widest font-semibold">
              Servicio de reservas directas en {siteConfig.contact.city}, {siteConfig.contact.country}
            </span>
          </div>

          <h1 className="font-heading text-display-md sm:text-display-lg md:text-display-xl lg:text-display-2xl text-white mb-6 leading-tight drop-shadow-2xl">
            {hero.headline}
          </h1>
          <p className="text-body-md sm:text-body-lg md:text-body-xl text-teal-100 mb-12 max-w-3xl leading-relaxed drop-shadow-md">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              href={hero.ctaHref}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#e0ab45] to-[#c9973a] hover:from-[#c9973a] hover:to-[#b38531] text-white font-bold text-body-md px-10 py-5 rounded-lg transition-transform hover:scale-105 shadow-xl uppercase tracking-widest border-none"
            >
              {hero.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
