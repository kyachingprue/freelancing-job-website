import { motion, useAnimation } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const logos = [
  'https://i.ibb.co.com/JwWP8Zd2/emirates-black-print202-logowik-com-removebg-preview.png',
  'https://i.ibb.co.com/spX6m8mN/hubspot8920-removebg-preview.png',
  'https://i.ibb.co.com/YBhrD4JP/Shark-Ninja-logo-removebg-preview.png',
  'https://i.ibb.co.com/kgNMTdQq/Capital-One-Logo.png',
  'https://i.ibb.co.com/PsjWLz5P/d7973284012b5f90d158a89ddefa6d72-removebg-preview.png',
  'https://i.ibb.co.com/s9jBKY41/png-clipart-jd-logo-jd-crosstown-running-logo-icons-logos-emojis-shop-logos-removebg-preview.png',
  'https://i.ibb.co.com/21ys8Kb9/KR-6-23-2020-removebg-preview.png',
  'https://i.ibb.co.com/S7fWBdWD/Emblem-Axa.jpg',
  'https://i.ibb.co.com/G44HfsnG/xbox-logo-png-seeklogo-424599-removebg-preview.png',
  'https://i.ibb.co.com/SDbsHGhd/Sixt-Logo-removebg-preview.png',
  'https://i.ibb.co.com/wFFLNf0m/1631365432916-removebg-preview.png',
  'https://i.ibb.co.com/QvYYqVb1/old-english-l-removebg-preview.png',
]

export default function LogoSlider() {
  const controls = useAnimation()
  const sliderRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)

  // duplicate for seamless loop
  const extended = [...logos, ...logos]

  // auto move LEFT
  useEffect(() => {
    if (!isDragging) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          ease: 'linear',
          duration: 20,
          repeat: Infinity
        }
      })
    }
  }, [isDragging, controls])

  return (
    <section className="flex py-6 px-5 items-center">
      {/* LEFT TEXT */}
      <div className="text-base text-black font-medium whitespace-nowrap">
        The agency behind
      </div>
      <div className="relative w-full overflow-hidden py-4 flex items-center">
        {/* BLUR LEFT */}
        <div
          className="absolute left-0 top-0 h-full w-48 z-20 pointer-events-none"
          style={{
            backdropFilter: 'blur(60px)',
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, black 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)'
          }}
        />

        {/* BLUR RIGHT */}
        <div
          className="absolute right-0 top-0 h-full w-48 z-20 pointer-events-none"
          style={{
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
            WebkitMaskImage:
              'linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
            maskImage:
              'linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)'
          }}
        />
        {/* SLIDER */}
        <motion.div
          ref={sliderRef}
          className="flex gap-20 ml-40 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => {
            setIsDragging(true)
            controls.stop()
          }}
          onDragEnd={() => {
            setIsDragging(false)
          }}
        >
          {extended.map((logo, i) => (
            <div key={i} className="min-w-35 flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-28 h-14 object-container hover:opacity-100 transition"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
