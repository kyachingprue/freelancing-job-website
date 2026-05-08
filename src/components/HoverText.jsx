import { motion } from 'motion/react'

const TEXT =
  '🚨 Where are your customers actually searching? Download the report'

const variants = {
  initial: { y: 0 },
  hover: { y: '-100%' }
}

const variantsBottom = {
  initial: { y: '100%' },
  hover: { y: 0 }
}

const HoverText = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-full h-10 md:h-5 overflow-hidden text-sm font-bold text-[#111212] cursor-pointer"
    >
      {/* TOP TEXT */}
      <motion.div
        variants={variants}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {TEXT}
      </motion.div>

      {/* BOTTOM TEXT */}
      <motion.div
        variants={variantsBottom}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {TEXT}
      </motion.div>
    </motion.div>
  )
}

export default HoverText
