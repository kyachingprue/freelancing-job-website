import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import AnimatedButton from './AnimatedButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

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

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNav ? 0 : -120, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-8xl
      px-6 py-3 flex items-center justify-between transition-all duration-300
      ${
        isScrolled
          ? 'top-3 bg-white/70 backdrop-blur-lg text-black rounded-full shadow-md'
          : 'top-16 bg-transparent text-white'
      }`}
      >
        {/* LOGO */}
        <div className="text-xl md:text-2xl text-inherit font-semibold">
          Rise at Seven
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
          <div className="flex items-center text-inherit gap-1 cursor-pointer">
            Services <ChevronDown size={16} />
          </div>
          <div className="flex items-center text-inherit gap-1 cursor-pointer">
            International <ChevronDown size={16} />
          </div>
          <div className="flex items-center text-inherit gap-1 cursor-pointer">
            About <ChevronDown size={16} />
          </div>
          <span className="text-inherit">Work</span>
          <span className="text-inherit">Careers</span>
          <span className="text-inherit">Blog</span>
          <span className="text-inherit">Webinr</span>
        </div>

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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-0 left-0 w-full h-[90%] bg-white z-50 rounded-t-3xl p-6 flex flex-col"
            >
              {/* TOP BAR */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Rise at Seven</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* MENU LIST */}
              <div className="flex flex-col gap-5 text-lg font-medium">
                <div className="flex justify-between items-center">
                  Services <ChevronDown />
                </div>
                <div className="flex justify-between items-center">
                  International <ChevronDown />
                </div>
                <div className="flex justify-between items-center">
                  About <ChevronDown />
                </div>
                <div>Work</div>
                <div>Careers</div>
                <div>Blog</div>
              </div>

              {/* BUTTON */}
              <div className="mt-auto">
                <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full">
                  Get In Touch <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
