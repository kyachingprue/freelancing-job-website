import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const text = 'Ready to Rise at Seven?'

/* =========================================
   LETTER COMPONENT
========================================= */

const AnimatedLetter = ({ char, index, progress }) => {
  /*
    RESPONSIVE TIMING
  */
  const start = index * 0.025
  const center = start + 0.16
  const end = center + 0.2

  /*
    RESPONSIVE MOTION
  */
  const x = useTransform(progress, [start, center, end], [800, 0, -800])

  const y = useTransform(progress, [start, center, end], [-180, 0, 180])

  /*
    ROTATION
  */
  const rotate = useTransform(progress, [start, center, end], [14, 0, -12])

  /*
    SCALE
  */
  const scale = useTransform(progress, [start, center], [0.75, 1])

  /*
    OPACITY
  */
  const opacity = useTransform(progress, [start, center - 0.04, end], [0, 1, 0])

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
      tracking-[-0.08em]
      text-[42px]
      sm:text-[70px]
      md:text-[110px]
      lg:text-[150px]
      xl:text-[180px]
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

  /*
    SMOOTH SCROLL
  */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 18
  })

  return (
    <section
      ref={sectionRef}
      className="
      relative
      h-[320vh]
      sm:h-[380vh]
      md:h-[450vh]
      lg:h-[650vh]
      "
    >
      {/* STICKY AREA */}
      <div
        className="
        sticky
        top-0
        h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        "
      >
        {/* WRAPPER */}
        <div
          className="
          flex
          whitespace-nowrap
          px-4
          sm:px-8
          md:px-12
          lg:px-20
          "
        >
          {text.split('').map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* MOBILE GRADIENT */}
        <div
          className="
          absolute
          inset-x-0
          bottom-0
          h-24
          pointer-events-none
          "
        />
      </div>
    </section>
  )
}

export default LetterScrollAnimation
