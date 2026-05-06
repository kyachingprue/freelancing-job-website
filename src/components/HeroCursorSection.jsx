import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function HeroCursorSection() {
  const sectionRef = useRef(null)
  const cursorRef = useRef(null)
  const [isInside, setIsInside] = useState(false)

  // Cursor follow
  useEffect(() => {
    const moveCursor = e => {
      if (!cursorRef.current) return

      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="relative h-60 my-10 overflow-hidden flex items-center cursor-none"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-200 ${
          isInside ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#9FE3D2] text-black font-medium shadow-lg whitespace-nowrap">
          Send Us Your Brief
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Moving Text */}
      <div className="whitespace-nowrap flex animate-marquee">
        <h1 className="text-[140px] font-semibold text-black mr-20">
          Consumers
        </h1>

        {/* Image inside text flow */}
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          className="w-32 h-32 object-cover rounded-2xl mt-10 mr-20"
        />

        <h1 className="text-[140px] font-semibold text-black mr-20">Not</h1>

        {/* duplicate for smooth loop */}
        <h1 className="text-[140px] font-semibold text-black mr-20">
          Consumers
        </h1>

        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          className="w-32 h-32 object-cover rounded-2xl mt-10 mr-20"
        />

        <h1 className="text-[140px] font-semibold text-black mr-20">Not</h1>
      </div>
    </section>
  )
}
