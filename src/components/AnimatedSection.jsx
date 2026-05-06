import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const texts = [
  'Creative Strategy',
  'Brand Identity',
  'Digital Marketing',
  'Web Development',
  'UI/UX Design',
  'Growth Scaling'
]

const cards = [
  { id: 1, title: 'Project One', img: 'https://picsum.photos/400/600?1' },
  { id: 2, title: 'Project Two', img: 'https://picsum.photos/400/600?2' },
  { id: 3, title: 'Project Three', img: 'https://picsum.photos/400/600?3' },
  { id: 4, title: 'Project Four', img: 'https://picsum.photos/400/600?4' },
  { id: 5, title: 'Project Five', img: 'https://picsum.photos/400/600?5' },
  { id: 6, title: 'Project Six', img: 'https://picsum.photos/400/600?6' }
]

export default function AnimatedSection() {
  const sectionRef = useRef(null)

  // scroll progress (0 → 1 inside section)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  return (
    <section>
      <section
        ref={sectionRef}
        className="relative h-[300vh] my-14 rounded-3xl bg-black"
      >
        {/* STICKY CONTAINER */}
        <div className="sticky top-0 h-screen flex overflow-hidden">
          {/* LEFT TEXT */}
          <div className="w-1/2 flex flex-col justify-center px-16 space-y-6">
            {texts.map((text, i) => {
              const start = i / texts.length
              const end = (i + 1) / texts.length

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [1, 0.2]
              )

              const y = useTransform(scrollYProgress, [start, end], [0, -100])

              const blur = useTransform(
                scrollYProgress,
                [start, end],
                ['0px', '6px']
              )

              return (
                <motion.h2
                  key={i}
                  style={{
                    opacity,
                    y,
                    filter: blur
                  }}
                  className="text-5xl font-bold text-white"
                >
                  {text}
                </motion.h2>
              )
            })}
          </div>

          {/* RIGHT CARDS */}
          <div className="w-1/2 relative flex items-center justify-center">
            <div className="relative h-[80vh] w-[320px]">
              {cards.map((card, i) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [i * 120, -i * 200]
                )

                const scale = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [1, 1 - i * 0.05]
                )

                return (
                  <motion.div
                    key={card.id}
                    style={{ y, scale }}
                    className="absolute w-full h-105 rounded-xl overflow-hidden group cursor-none"
                  >
                    {/* IMAGE */}
                    <img
                      src={card.img}
                      className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <motion.div
                      initial={{ y: '100%' }}
                      whileHover={{ y: '0%' }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-blue-500"
                    />

                    {/* TEXT */}
                    <motion.div
                      initial={{ y: '100%' }}
                      whileHover={{ y: '0%' }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute bottom-0 p-6 text-white z-10"
                    >
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </motion.div>

                    {/* CUSTOM CURSOR HOVER */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                      >
                        <ArrowUpRight className="text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <button className="bg-white flex items-center justify-center text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Explore Our Work <ArrowUpRight/> </button>
      </div>
    </section>
  )
}
