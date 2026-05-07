import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const cards = [
  {
    title: 'Pioneers',
    color: '#0A0301',
    textColor: '#ffffff',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    desc: 'We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.'
  },
  {
    title: 'Award Winning',
    color: '#0AA8A8',
    textColor: '#000000',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    desc: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards."
  },
  {
    title: 'Speed',
    color: '#F2FAF8',
    textColor: '#000000',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    desc: 'Authoritatively conceptualize orthogonal strategic theme areas for turnkey metrics. Authoritatively disseminate compelling users for one-to-one solutions. Authoritatively transform web-enabled intellectual capital rather than focused.'
  }
]

function Card({ card, i, scrollYProgress, total }) {
  const segment = 1 / total
  const start = i * segment
  const end = start + segment * 0.8 // ছোট range = smoother control

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [0, -400] // 🔥 more upward lift
  )

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9])

  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [0, -40] 
  )

  return (
    <motion.div
      style={{ y, scale, rotate, zIndex: total - i }}
      className="absolute"
    >
      <div
        style={{ backgroundColor: card.color }}
        className="w-140 h-140 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center px-4"
      >
        {/* Image */}
        <img
          src={card.img}
          className="w-50 h-52 rounded-xl object-cover mb-8"
        />

        {/* Title */}
        <h2
          className="text-3xl md:text-6xl font-bold mb-4"
          style={{ color: card.textColor }}
        >
          {card.title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base font-semibold max-w-md" style={{ color: card.textColor }}>
          {card.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function CardScroll() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={ref} className="relative h-[300vh] bg-gray-200">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            i={i}
            total={cards.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
