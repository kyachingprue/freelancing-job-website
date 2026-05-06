import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const text = 'Ready to Rise at Seven?'

const LetterAnimation = () => {
  const ref = useRef(null)

  // scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  return (
    <section ref={ref} className="h-[200vh]">
      <div className="sticky top-0 h-40 flex items-center overflow-hidden justify-center">
        <div className="flex whitespace-nowrap">
          {text.split('').map((char, index) => {
            // stagger effect (each letter slightly delayed)
            const start = index * 0.03
            const end = start + 0.6

            const x = useTransform(
              scrollYProgress,
              [start, end],
              ['120%', '-120%']
            )

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0]
            )

            return (
              <motion.span
                key={index}
                style={{ x, opacity }}
                className="text-black text-9xl font-bold mx-0.5"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LetterAnimation
