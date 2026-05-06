import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const cards = [
  {
    id: 1,
    title: 'Pioneers',
    desc: 'We’re dedicated to creating the industry narrative...',
    bg: '#000'
  },
  {
    id: 2,
    title: 'Creators',
    desc: 'We build modern digital experiences...',
    bg: '#111'
  },
  {
    id: 3,
    title: 'Innovators',
    desc: 'We push boundaries with design...',
    bg: '#222'
  },
  {
    id: 4,
    title: 'Leaders',
    desc: 'We lead the future of technology...',
    bg: '#333'
  }
]

export default function StackedCards() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#eaeaea]">
      {cards.map((card, i) => {
        const start = i / cards.length
        const end = (i + 1) / cards.length

        const y = useTransform(scrollYProgress, [start, end], [0, -300])

        const scale = useTransform(scrollYProgress, [start, end], [1, 0.85])

        const opacity = useTransform(scrollYProgress, [start, end], [1, 0])

        return (
          <motion.div
            key={card.id}
            style={{
              y,
              scale,
              opacity,
              zIndex: cards.length - i
            }}
            className="sticky top-0 flex items-center justify-center h-screen"
          >
            <div
              className="w-105 h-130 rounded-3xl shadow-2xl text-white flex flex-col items-center justify-center p-6"
              style={{
                background: card.bg,
                transform: `rotate(${i % 2 === 0 ? '-6deg' : '6deg'})`
              }}
            >
              <div className="w-24 h-24 bg-gray-400 rounded-xl mb-6" />
              <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
              <p className="text-center text-sm opacity-80">{card.desc}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
