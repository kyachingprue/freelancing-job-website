import { motion } from 'motion/react'
import airplane_icon from '../assets/airplane.jpg';
import { Wheat } from 'lucide-react';
import { GiCurledLeaf } from 'react-icons/gi';

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center rounded-3xl text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={airplane_icon}
          alt="background"
          className="w-full h-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        {/* Top small text */}
        <div className="flex flex-col items-center pt-4">
          <p className="text-sm font-medium tracking-tight uppercase text-white mt-10 mb-4">
            #1Most Recommended <br /> Content Marketing Agency
          </p>
          <div className="flex items-center gap-2">
            <Wheat />
            <div className="flex flex-row gap-2 items-center justify-center">
              <img
                className="w-14 h-7 object-cover"
                src={
                  'https://i.ibb.co.com/fG25vVHM/GSA-New-Logo-Lockup-Black.png'
                }
                alt="Global Search Awards icon"
              />
              <img
                className="w-14 h-7 object-cover"
                src={'https://i.ibb.co.com/mr7w59Jc/2884355.png'}
                alt="The Drum icon"
              />
              <img
                className="w-14 h-7 object-cover"
                src={
                  'https://i.ibb.co.com/Z6sk4GDP/hd-restoration-result-image.png'
                }
                alt="UK Social Media Awards icon"
              />
              <img
                className="w-12 h-6 object-cover"
                src={
                  'https://i.ibb.co.com/4948HBT/UK-Content-Awards-Logo-icon-white.png'
                }
                alt="UK Content Awards icon"
              />
            </div>
            <GiCurledLeaf size={24} />
          </div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-9xl font-semibold tracking-tight"
        >
          We Create <br className="hidden md:block" />
          <span className="inline-block">Category</span> {/* Image in middle */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block mx-2 align-middle"
          >
            <img
              src={airplane_icon}
              alt="icon"
              className="w-12 h-12 md:w-28 md:h-28 rounded-xl object-cover"
            />
          </motion.span>
          Leaders
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 mb-20 text-xl md:text-3xl font-bold text-white"
        >
          on every searchable platform
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-6 text-xs md:text-base text-white text-start font-medium"
      >
        Organic media planners creating, distributing & optimising <br />
        search-first content for SEO, Social, PR, AI and LLM search
      </motion.div>

      {/* Bottom Right Info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 right-6 text-xs md:text-base text-white font-medium text-right"
      >
        4 Global Offices serving <br />
        UK, USA (New York) & EU
      </motion.div>
    </section>
  )
}

export default Banner
