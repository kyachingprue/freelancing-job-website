import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Digital PR',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Search & Growth Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    title: 'Data & Insights',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    title: 'Organic Social & Content',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
  },
  {
    title: 'Content Experience',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    title: 'Onsite SEO',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40'
  }
]

export default function OurServices() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="w-full py-16 px-6 md:px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-5xl font-semibold flex items-center gap-4">
          <span>Our</span>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="w-14 h-14 rounded-xl object-cover"
          />
          <span>Services</span>
        </h2>

        <button className="px-5 py-2 rounded-full bg-white shadow hover:bg-black hover:text-white transition">
          View All Services ↗
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {services.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative border-b border-gray-300 py-6 cursor-pointer overflow-hidden group"
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                hovered === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between">
              <h3
                className={`text-3xl flex items-center gap-4 font-medium transition-all duration-300 ${
                  hovered === index ? 'text-white px-6' : 'text-black'
                }`}
              >
                <ArrowUpRight size={38}
                  className={`transition-all duration-300 ${
                    hovered === index
                      ? 'opacity-100 translate-x-0 text-white'
                      : 'opacity-0 -translate-x-4 text-black'
                  }`}
                />{' '}
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
