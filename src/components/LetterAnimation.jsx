import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'

const text = 'Ready to Rise at Seven?'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const letterVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    rotate: 10
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

const LetterAnimation = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['100%', '-100%'])

  return (
    <section ref={ref} className="h-[200vh]">
      <div className="sticky top-0 h-40 flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex whitespace-nowrap"
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariant}
              className="text-6xl md:text-8xl font-bold inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LetterAnimation
