import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const PageLoader = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 1600) // match animation

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{ y: 0 }} // FULL SCREEN at start
      animate={{ y: '-100%' }} // move UP → reveal page
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1] // smooth premium easing
      }}
      className="fixed inset-0 z-999 bg-[#A7E6DC]"
    />
  )
}

export default PageLoader
