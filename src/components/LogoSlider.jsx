import { motion, useMotionValue } from 'motion/react'
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
  'https://i.ibb.co.com/QvYYqVb1/old-english-l-removebg-preview.png'
]

export default function LogoSlider() {
  const x = useMotionValue(0)
  const containerRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)

  const speed = 0.8 // adjust scroll speed
  const extended = [...logos, ...logos]

  // AUTO SCROLL LOOP
  useEffect(() => {
    let animationId

    const animate = () => {
      if (!isDragging) {
        x.set(x.get() - speed)

        // reset loop smoothly
        if (containerRef.current) {
          const width = containerRef.current.scrollWidth / 2
          if (Math.abs(x.get()) >= width) {
            x.set(0)
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isDragging, x])

  return (
    <section className="flex py-6 px-5 items-center">
      {/* TEXT */}
      <div className="text-base text-black font-medium whitespace-nowrap">
        The agency behind
      </div>

      <div className="relative w-full overflow-hidden py-4 flex items-center">
        {/* LEFT BLUR */}
        <div
          className="absolute left-0 top-0 h-full w-48 z-20 pointer-events-none"
          style={{
            backdropFilter: 'blur(100px)',
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, rgba(0,0,0,0.7) 80%, transparent 100%)'
          }}
        />

        {/* RIGHT BLUR */}
        <div
          className="absolute right-0 top-0 h-full w-48 z-20 pointer-events-none"
          style={{
            backdropFilter: 'blur(60px)',
            WebkitMaskImage:
              'linear-gradient(to left, black 0%, rgba(0,0,0,0.4) 80%, transparent 100%)'
          }}
        />

        {/* SLIDER */}
        <motion.div
          ref={containerRef}
          className="flex gap-20 ml-40 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragMomentum={true}
          dragElastic={0.08}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onPointerDown={() => setIsDragging(true)} // click stop
          onPointerUp={() => setIsDragging(false)} // resume
        >
          {extended.map((logo, i) => (
            <div key={i} className="min-w-35 flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-28 h-14 object-contain hover:opacity-100 transition"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
