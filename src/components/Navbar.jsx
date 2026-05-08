import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import AnimatedButton from './AnimatedButton'


function DropdownContent({ title, leftItems, rightItems }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_340px] gap-10">
      {/* LEFT */}
      <div>
        <p className="text-black/45 text-sm mb-6">{title}</p>

        <div className="flex flex-col gap-4">
          {leftItems.map(item => (
            <motion.div
              key={item}
              whileHover={{ x: 8 }}
              className="
              text-[30px]
              font-semibold
              leading-none
              tracking-[-1px]
              cursor-pointer
              "
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CENTER */}
      <div className="pt-11">
        <div className="flex flex-col gap-4">
          {rightItems.map(item => (
            <motion.div
              key={item}
              whileHover={{ x: 8 }}
              className="
              text-[30px]
              font-semibold
              leading-none
              tracking-[-1px]
              cursor-pointer
              "
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative h-80 rounded-[28px] overflow-hidden group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/10" />

        <button
          className="
          absolute
          bottom-5
          left-5
          bg-black
          text-white
          px-5
          py-3
          rounded-full
          flex
          items-center
          gap-2
          text-sm
          font-medium
          "
        >
          Explore More
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeItem, setActiveItem] = useState(null)

  // scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // background show after scroll
      setIsScrolled(currentScroll > 50)

      // hide / show navbar
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false) // scroll down → hide
      } else {
        setShowNav(true) // scroll up → show
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const openDropdown = name => {
    clearTimeout(window.navTimeout)
    setActiveDropdown(name)
  }

  const closeDropdown = () => {
    window.navTimeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <section>
        {/* FULL PAGE BLUR */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onMouseEnter={() => {
                clearTimeout(window.navTimeout)
              }}
              onMouseLeave={() => {
                window.navTimeout = setTimeout(() => {
                  setActiveDropdown(null)
                }, 180)
              }}
              className="
      fixed
      inset-0
      z-40
      bg-black/25
      backdrop-blur-xl
      "
            />
          )}
        </AnimatePresence>

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: showNav ? 0 : -120,
            opacity: showNav ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          className={`fixed left-1/2 -translate-x-1/2 z-120 w-[95%] max-w-8xl
    px-6 py-3 flex items-center justify-between transition-all duration-300
    ${
      isScrolled
        ? 'top-3 bg-white/70 backdrop-blur-lg text-black rounded-full shadow-md'
        : 'top-20 md:top-16 bg-transparent text-white'
    }`}
        >
          {/* LOGO */}
          <div className="text-xl md:text-2xl text-inherit font-semibold">
            Rise at Seven
          </div>

          {/* MENU */}
          <motion.div className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
            {/* SERVICES */}
            <motion.div
              onMouseEnter={() => openDropdown('services')}
              onMouseLeave={closeDropdown}
              animate={{
                backgroundColor:
                  activeDropdown === 'services'
                    ? '#ffffff'
                    : 'rgba(255,255,255,0)',
                color:
                  activeDropdown === 'services'
                    ? '#000000'
                    : isScrolled
                      ? '#000000'
                      : '#ffffff'
              }}
              transition={{
                duration: 0.25
              }}
              className="
  cursor-pointer
  flex
  items-center
  gap-1
  px-4
  py-2
  rounded-full
  "
            >
              Services
              <motion.div
                animate={{
                  rotate: activeDropdown === 'services' ? 45 : 0
                }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>

            {/* INTERNATIONAL */}
            <motion.div
              onMouseEnter={() => {
                clearTimeout(window.navTimeout)
                setActiveDropdown('international')
              }}
              animate={{
                backgroundColor:
                  activeDropdown === 'international'
                    ? '#ffffff'
                    : 'rgba(255,255,255,0)',
                color:
                  activeDropdown === 'international'
                    ? '#000000'
                    : isScrolled
                      ? '#000000'
                      : '#ffffff'
              }}
              transition={{
                duration: 0.25
              }}
              className="
  cursor-pointer
  flex
  items-center
  gap-1
  px-4
  py-2
  rounded-full
  "
            >
              International
              <motion.div
                animate={{
                  rotate: activeDropdown === 'international' ? 45 : 0
                }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>

            {/* ABOUT */}
            <motion.div
              onMouseEnter={() => {
                clearTimeout(window.navTimeout)
                setActiveDropdown('about')
              }}
              animate={{
                backgroundColor:
                  activeDropdown === 'about'
                    ? '#ffffff'
                    : 'rgba(255,255,255,0)',
                color:
                  activeDropdown === 'about'
                    ? '#000000'
                    : isScrolled
                      ? '#000000'
                      : '#ffffff'
              }}
              transition={{
                duration: 0.25
              }}
              className="
  cursor-pointer
  flex
  items-center
  gap-1
  px-4
  py-2
  rounded-full
  "
            >
              About
              <motion.div
                animate={{
                  rotate: activeDropdown === 'about' ? 45 : 0
                }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>

            {['work', 'careers', 'blog'].map(item => (
              <motion.span
                key={item}
                onMouseEnter={() => {
                  clearTimeout(window.navTimeout)
                  setActiveDropdown(null)
                  setActiveItem(item)
                }}
                onMouseLeave={() => setActiveItem(null)}
                className="cursor-pointer px-4 py-2 rounded-full"
                animate={{
                  backgroundColor:
                    activeItem === item ? '#ffffff' : 'transparent',
                  color:
                    activeItem === item ? '#000' : isScrolled ? '#000' : '#fff'
                }}
                transition={{ duration: 0.25 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.span>
            ))}
          </motion.div>

          {/* BUTTON */}
          <div className="hidden md:flex">
            <motion.button
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={{
                borderRadius: isHovered ? '12px' : '9999px'
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`flex items-center text-sm md:text-lg gap-2 font-medium px-4 py-3 ${
                isScrolled ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <AnimatedButton text="Get In Touch" />
            </motion.button>
          </div>

          {/* MOBILE ICON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </motion.nav>

        {/* DROPDOWN PANEL */}
        <AnimatePresence mode="wait">
          {activeDropdown && (
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
                scale: 0.985,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.985,
                filter: 'blur(8px)'
              }}
              transition={{
                duration: 0.42,
                ease: [0.16, 1, 0.3, 1]
              }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-130
        w-275
        rounded-[34px]
        bg-white
        text-black
        p-10
        shadow-[0_40px_120px_rgba(0,0,0,0.25)]
        border
        border-black/5
        "
            >
              {activeDropdown === 'services' && (
                <DropdownContent
                  title="Core Services"
                  leftItems={[
                    'Search & Growth Strategy',
                    'Onsite SEO',
                    'Content Experience',
                    'B2B Marketing'
                  ]}
                  rightItems={[
                    'Digital PR',
                    'Social Media & Campaigns',
                    'Data & Insights',
                    'Social SEO/Search'
                  ]}
                />
              )}

              {activeDropdown === 'international' && (
                <DropdownContent
                  title="International"
                  leftItems={[
                    'USA Expansion',
                    'Europe Strategy',
                    'Asia Marketing',
                    'Global Branding'
                  ]}
                  rightItems={[
                    'Remote Teams',
                    'Localization',
                    'International SEO',
                    'Cross Border Ads'
                  ]}
                />
              )}

              {activeDropdown === 'about' && (
                <DropdownContent
                  title="About Us"
                  leftItems={['Our Story', 'Our Team', 'Culture', 'Careers']}
                  rightItems={['Awards', 'Press', 'Partners', 'Contact']}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        z-190
        md:hidden
        "
              onClick={() => setIsOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="
        fixed
        bottom-0
        left-0
        w-full
        h-[90%]
        overflow-y-auto
        bg-white
        z-200
        rounded-t-4xl
        p-6
        flex
        flex-col
        md:hidden
        "
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-black">
                  Rise at Seven
                </h2>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
            w-11
            h-11
            rounded-full
            flex
            items-center
            justify-center
            bg-black
            text-white
            active:scale-95
            transition-transform
            "
                >
                  <X size={22} />
                </button>
              </div>

              {/* MENU LIST */}
              <div className="flex flex-col text-black">
                {/* SERVICES */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="
            flex
            items-center
            justify-between
            py-5
            border-b
            border-black/10
            cursor-pointer
            "
                >
                  <span className="text-2xl font-semibold">Services</span>
                  <ChevronDown size={22} />
                </motion.div>

                {/* INTERNATIONAL */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="
            flex
            items-center
            justify-between
            py-5
            border-b
            border-black/10
            cursor-pointer
            "
                >
                  <span className="text-2xl font-semibold">International</span>
                  <ChevronDown size={22} />
                </motion.div>

                {/* ABOUT */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="
            flex
            items-center
            justify-between
            py-5
            border-b
            border-black/10
            cursor-pointer
            "
                >
                  <span className="text-2xl font-semibold">About</span>
                  <ChevronDown size={22} />
                </motion.div>

                {/* OTHER LINKS */}
                <div className="mt-4 flex flex-col gap-2">
                  {['Work', 'Careers', 'Blog'].map(item => (
                    <motion.div
                      key={item}
                      whileHover={{
                        x: 6
                      }}
                      whileTap={{
                        scale: 0.98
                      }}
                      className="
                cursor-pointer
                text-xl
                font-medium
                px-2
                py-3
                rounded-2xl
                transition-colors
                hover:bg-black/5
                "
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-auto pt-10">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-black
            text-white
            py-4
            rounded-full
            text-lg
            font-medium
            "
                >
                  Get In Touch
                  <ArrowUpRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
