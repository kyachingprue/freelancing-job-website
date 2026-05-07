import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1]
}

const AnimatedButton = ({ text }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative flex items-center gap-1 overflow-hidden"
    >
      {/* TEXT */}
      <div className="relative h-6 overflow-hidden">
        {/* TOP TEXT */}
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%' }
          }}
          transition={transition}
          className="whitespace-nowrap"
        >
          {text}
        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.div
          variants={{
            initial: { y: '100%' },
            hover: { y: 0 }
          }}
          transition={transition}
          className="absolute inset-0 whitespace-nowrap"
        >
          {text}
        </motion.div>
      </div>

      {/* FIXED ICON */}
      <div className="relative w-5 h-5 overflow-hidden">
        {/* TOP ICON */}
        <motion.div
          variants={{
            initial: { y: 0, rotate: 0 },
            hover: { y: '-100%', rotate: 45 }
          }}
          transition={transition}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight size={18} className='mt-2'/>
        </motion.div>

        {/* BOTTOM ICON */}
        <motion.div
          variants={{
            initial: { y: '100%', rotate: 0 },
            hover: { y: 0, rotate: 0 }
          }}
          transition={transition}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight size={18}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnimatedButton
