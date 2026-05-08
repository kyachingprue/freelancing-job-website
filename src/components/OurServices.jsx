import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import AnimatedButton from './AnimatedButton'

const services = [
  {
    title: 'Digital PR',
    image: 'https://i.ibb.co.com/ynm2sY6V/shutterstock-1171378096-540x304-1.jpg'
  },
  {
    title: 'Search & Growth Strategy',
    image:
      'https://i.ibb.co.com/jv5LYQ88/digital-marketing-trends-2026-ai-search-customer-journey.jpg'
  },
  {
    title: 'Data & Insights',
    image: 'https://i.ibb.co.com/GfYbGD7M/Data-Analytics-770x400.jpg'
  },
  {
    title: 'Organic Social & Content',
    image: 'https://i.ibb.co.com/Z1JVfRvY/Managing-Organic-Social-Banner.jpg'
  },
  {
    title: 'Content Experience',
    image: 'https://i.ibb.co.com/M5Ww0H4f/levels-of-experience-levels.png'
  },
  {
    title: 'Onsite SEO',
    image: 'https://i.ibb.co.com/CKNTyqXF/image-1.png'
  }
]

export default function OurServices() {
  const [hovered, setHovered] = useState(null)
  const [isServicesHover, setIsServicesHover] = useState(false)

  return (
    <section className="w-full py-16 px-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-gray-400">
        <h2 className="text-3xl lg:text-7xl font-semibold flex items-center gap-4">
          <span>Our</span>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="w-12 h-12 md:w-20 md:h-20 rounded-2xl object-cover"
          />
          <span>Services</span>
        </h2>

        <motion.button
          onHoverStart={() => setIsServicesHover(true)}
          onHoverEnd={() => setIsServicesHover(false)}
          animate={{
            borderRadius: isServicesHover ? '12px' : '9999px'
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="px-5 py-3 text-sm md:text-base font-medium rounded-full mt-8 bg-white shadow"
        >
          <AnimatedButton text="View All Services" />
        </motion.button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
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
                hovered === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between">
              <h3
                className={`text-2xl md:text-5xl flex items-center gap-2 font-medium transition-all duration-300 ${
                  hovered === index ? 'text-white px-3' : 'text-black'
                }`}
              >
                <ArrowUpRight
                  size={38}
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
