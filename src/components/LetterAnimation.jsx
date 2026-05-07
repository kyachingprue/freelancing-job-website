import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const text = 'Ready to Rise at Seven?'

const AnimatedLetter = ({ char, index, progress }) => {
  /**
   * TIMING
   * Each letter comes one by one
   */
  const start = index * 0.022
  const center = start + 0.18
  const end = center + 0.22

  /**
   * RIGHT TOP -> CENTER -> LEFT BOTTOM
   */
  const x = useTransform(progress, [start, center, end], [1200, 0, -1200])

  const y = useTransform(progress, [start, center, end], [-300, 0, 250])

  /**
   * ROTATION
   */
  const rotate = useTransform(progress, [start, center, end], [18, 0, -14])

  /**
   * SCALE
   */
  const scale = useTransform(progress, [start, center], [0.6, 1])

  /**
   * OPACITY
   */
  const opacity = useTransform(progress, [start, center - 0.05, end], [0, 1, 0])

  return (
    <motion.span
      style={{
        x,
        y,
        rotate,
        scale,
        opacity
      }}
      className="
        inline-block
        text-black
        font-black
        leading-none
        tracking-[-0.09em]
        text-[90px]
        sm:text-[120px]
        md:text-[180px]
        lg:text-[190px]
      "
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

/* =========================================
   MAIN COMPONENT
========================================= */

const LetterScrollAnimation = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  /**
   * Smooth scroll motion
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20
  })

  return (
    <section ref={sectionRef} className="relative h-[650vh] bg-[#ececeb]">
      {/* Sticky area */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="flex whitespace-nowrap px-20">
          {text.split('').map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LetterScrollAnimation
