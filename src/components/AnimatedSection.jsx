import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent
} from 'motion/react'
import { ArrowUpRight, Search } from 'lucide-react'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    year: '[2023-2025]',
    title: 'SIXT',
    subtitle: 'Car rental',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    year: '[2021-2025]',
    title: 'Dojo - B2B',
    subtitle: 'Card Machines',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    year: '[2023-2024]',
    title: 'Magnet',
    subtitle: 'Trade Platform',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 4,
    year: '[2022-2024]',
    title: 'Moonshot',
    subtitle: 'Creative Agency',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'
  }
]

function ProjectTextItem({ item, i, scrollYProgress, total }) {
  const segment = 1 / total

  const start = i * segment
  const end = (i + 1) * segment

  const local = useTransform(scrollYProgress, [start, end], [0, 1])

  const y = useTransform(local, [0, 0.5, 1], [240, 0, -240])

  const opacity = useTransform(local, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const blur = useTransform(local, [0, 0.5, 1], [12, 0, 12])

  const scale = useTransform(local, [0, 0.5, 1], [0.92, 1, 0.92])

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        filter: `blur(${blur}px)`
      }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="flex items-start gap-3">
        <div>
          <h2 className="text-white font-black text-[90px] leading-[0.82] tracking-[-5px]">
            {item.title}
          </h2>

          <h3 className="text-white/35 font-black text-[80px] leading-[0.82] tracking-[-5px] -mt-2">
            {item.subtitle}
          </h3>
        </div>

        <span className="text-white/70 text-sm mt-5">{item.year}</span>
      </div>

      <div className="mt-5 h-16 w-[75%] bg-white/10 blur-3xl rounded-full" />
    </motion.div>
  )
}

export default function AnimatedSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const total = projects.length
    const current = Math.min(total - 1, Math.floor(latest * total))

    setActiveIndex(current)
  })


  return (
    <section className="bg-[#efefef] py-8 md:py-12">
      {/* BIG SCROLL AREA */}
      <section ref={sectionRef} className="relative h-[500vh]">
        {/* FIXED / STICKY SECTION */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full rounded-[30px] bg-black overflow-hidden">
            <div className="grid lg:grid-cols-2 h-full">
              {/* LEFT TEXT */}
              <div className="relative h-full flex items-center px-5 md:px-10 lg:px-14 overflow-hidden bg-black">
                {/* FEATURED WORK */}
                <div className="absolute top-16 left-5 md:left-10 lg:left-14 z-50">
                  <p className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                    Featured Work
                  </p>
                </div>

                {/* TEXT AREA */}
                <div className="relative w-full h-105 overflow-hidden">
                  {projects.map((item, i) => (
                    <ProjectTextItem
                      key={item.id}
                      item={item}
                      i={i}
                      scrollYProgress={scrollYProgress}
                      total={projects.length}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="relative h-full overflow-hidden px-4 md:px-6 lg:px-8 py-5">
                {/* IMAGE COLUMN */}
                <motion.div
                  style={{
                    y: useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
                  }}
                  className="flex flex-col gap-7"
                >
                  {projects.map((item, i) => (
                    <ImageCard
                      key={item.id}
                      item={item}
                      active={activeIndex === i}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

/* ================================================= */
/* IMAGE CARD */
/* ================================================= */

function ImageCard({ item, active }) {
  const [hovered, setHovered] = useState(false)

  /* DYNAMIC CURSOR POSITION */
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  /* MOUSE MOVE */
  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.45
      }}
      transition={{
        duration: 0.5
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="
      group
      relative
      h-80
      sm:h-90
      md:h-105
      lg:h-107.5
      rounded-[26px]
      overflow-hidden
      cursor-none
      "
    >
      {/* IMAGE */}
      <img src={item.image} alt="" className="w-full h-full object-cover" />

      {/* HOVER COLOR */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{
          y: hovered ? '0%' : '100%'
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute inset-0 bg-[#dcc0b0]"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 p-5 md:p-7 flex flex-col justify-between">
        {/* TOP TEXT */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{
              y: 120,
              opacity: 0
            }}
            animate={{
              y: hovered ? 0 : 120,
              opacity: hovered ? 1 : 0
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="
            max-w-130
            text-black
            font-black
            leading-[0.9]
            tracking-[-3px]
            text-[34px]
            md:text-[48px]
            lg:text-[62px]
          "
          >
            A B2B success story for {item.subtitle}
          </motion.h2>
        </div>

        {/* BOTTOM TAG */}
        <motion.div
          initial={{
            y: 80,
            opacity: 0
          }}
          animate={{
            y: hovered ? 0 : 80,
            opacity: hovered ? 1 : 0
          }}
          transition={{
            duration: 0.55,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex justify-end"
        >
          <div
            className="
            flex
            items-center
            gap-2
            bg-white/40
            backdrop-blur-xl
            px-4
            py-2
            rounded-full
            text-black
          "
          >
            <Search size={18} />

            <span className="text-sm md:text-base">{item.subtitle}</span>
          </div>
        </motion.div>
      </div>

      {/* DYNAMIC CURSOR */}
      <motion.div
        animate={{
          x: mousePosition.x - 55,
          y: mousePosition.y - 55,
          scale: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        className="
        absolute
        top-0
        left-0
        z-100
        pointer-events-none
        "
      >
        <div
          className="
          w-27.5
          h-27.5
          rounded-full
          bg-[#a8e7db]
          flex
          items-center
          justify-center
          shadow-2xl
        "
        >
          <ArrowUpRight size={42} className="text-black" />
        </div>
      </motion.div>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
    </motion.div>
  )
}
