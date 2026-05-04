import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa'

const Footer = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <footer className="bg-[#0b0b0b] text-white rounded-3xl my-6 px-6 md:px-12 py-12">
      {/* Top Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Left: Newsletter */}
        <motion.div variants={item} className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-6">
            Stay updated with Rise news
          </h2>

          {/* Input */}
          <div className="flex items-center bg-white/10 rounded-full p-1 backdrop-blur-md">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-transparent outline-none px-4 py-2 text-sm placeholder-gray-400"
            />
            <button className="bg-[#a8e6cf] hover:bg-[#8dd8be] text-black p-2 rounded-full transition">
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {[
              FaFacebookF,
              FaTwitter,
              FaLinkedinIn,
              FaYoutube,
              FaTiktok,
              FaInstagram
            ].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -3 }}
                className="bg-white/10 p-2 rounded-full cursor-pointer"
              >
                <Icon size={14} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div variants={item}>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Work</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Culture</li>
            <li className="hover:text-white cursor-pointer">Meet The Risers</li>
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Webinars</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Sheffield</li>
            <li className="hover:text-white cursor-pointer">Manchester</li>
            <li className="hover:text-white cursor-pointer">London</li>
            <li className="hover:text-white cursor-pointer">New York</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Huge Background Text */}
      <h1 className="text-[60px] md:text-[165px] font-bold "
      >
        Rise at Seven®
      </h1>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-20 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-50 gap-4">
        <p>
          © 2025 Rise at Seven Ltd. All rights reserved • Company Number
          11955187 • VAT Registered GB 322402945 • Privacy Policy • Terms &
          conditions
        </p>

        <p>Website MadeByShape</p>
      </div>
    </footer>
  )
}

export default Footer
