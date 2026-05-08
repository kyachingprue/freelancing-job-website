import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function HeroCursorSection() {
  const sectionRef = useRef(null)
  const cursorRef = useRef(null)

  const [isInside, setIsInside] = useState(false)

  // CURSOR FOLLOW
  useEffect(() => {
    const moveCursor = e => {
      if (!cursorRef.current) return

      cursorRef.current.style.transform = `
        translate(${e.clientX}px, ${e.clientY}px)
      `
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="
      relative
      w-full
      overflow-hidden
      flex
      items-center
      py-10
      md:py-16
      lg:py-20
      cursor-none
      "
    >
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className={`
        hidden lg:block
        pointer-events-none
        fixed
        top-0
        left-0
        z-200
        transition-opacity
        duration-200
        ${isInside ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-full
          bg-[#9FE3D2]
          text-black
          font-medium
          shadow-2xl
          whitespace-nowrap
          "
        >
          Send Us Your Brief
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* MOBILE CTA */}
      <div
        className="
        absolute
        top-3
        right-4
        z-20
        lg:hidden
        "
      >
        <button
          className="
          flex
          items-center
          gap-2
          bg-[#9FE3D2]
          text-black
          text-xs
          sm:text-sm
          font-medium
          px-4
          py-2
          rounded-full
          shadow-lg
          "
        >
          Brief
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* MARQUEE */}
      <div
        className="
        flex
        whitespace-nowrap
        animate-marquee
        items-center
        "
      >
        {/* ITEM 1 */}
        <div className="flex items-center">
          <h1
            className="
            text-[60px]
            sm:text-[90px]
            md:text-[120px]
            lg:text-[160px]
            font-semibold
            tracking-[-0.04em]
            text-black
            mr-6
            md:mr-12
            lg:mr-20
            leading-none
            "
          >
            Consumers
          </h1>

          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt=""
            className="
            w-16
            h-16
            sm:w-24
            sm:h-24
            md:w-28
            md:h-28
            lg:w-36
            lg:h-36
            object-cover
            rounded-2xl
            md:rounded-[28px]
            mr-6
            md:mr-12
            lg:mr-20
            "
          />

          <h1
            className="
            text-[60px]
            sm:text-[90px]
            md:text-[120px]
            lg:text-[160px]
            font-semibold
            tracking-[-0.04em]
            text-black
            mr-6
            md:mr-12
            lg:mr-20
            leading-none
            "
          >
            Not
          </h1>
        </div>

        {/* ITEM 2 DUPLICATE */}
        <div className="flex items-center">
          <h1
            className="
            text-[60px]
            sm:text-[90px]
            md:text-[120px]
            lg:text-[160px]
            font-semibold
            tracking-[-0.04em]
            text-black
            mr-6
            md:mr-12
            lg:mr-20
            leading-none
            "
          >
            Consumers
          </h1>

          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt=""
            className="
            w-16
            h-16
            sm:w-24
            sm:h-24
            md:w-28
            md:h-28
            lg:w-36
            lg:h-36
            object-cover
            rounded-2xl
            md:rounded-[28px]
            mr-6
            md:mr-12
            lg:mr-20
            "
          />

          <h1
            className="
            text-[60px]
            sm:text-[90px]
            md:text-[120px]
            lg:text-[160px]
            font-semibold
            tracking-[-0.04em]
            text-black
            mr-6
            md:mr-12
            lg:mr-20
            leading-none
            "
          >
            Not
          </h1>
        </div>
      </div>
    </section>
  )
}
