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
        staggerChildren: 0.12
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-[#070505]
      text-white
      rounded-t-[40px]
      md:rounded-t-[60px]
      mt-6
      px-5
      sm:px-8
      md:px-10
      lg:px-14
      py-12
      md:py-16
      "
    >
      {/* TOP SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-10
        lg:gap-8
        relative
        z-10
        "
      >
        {/* NEWSLETTER */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <p
            className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/50
            mb-4
            "
          >
            Newsletter
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            tracking-[-0.04em]
            leading-tight
            mb-8
            "
          >
            Stay updated
            <br />
            with Rise news
          </h2>

          {/* INPUT */}
          <div
            className="
            flex
            items-center
            bg-white/10
            border
            border-white/10
            rounded-full
            backdrop-blur-xl
            overflow-hidden
            "
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="
              flex-1
              bg-transparent
              outline-none
              px-5
              md:px-7
              py-4
              text-sm
              sm:text-base
              md:text-lg
              text-white
              placeholder:text-gray-400
              "
            />

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.96
              }}
              className="
              bg-[#a8e6cf]
              text-black
              w-12
              h-12
              md:w-14
              md:h-14
              rounded-full
              flex
              items-center
              justify-center
              mr-2
              "
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>

          {/* SOCIAL */}
          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-7
            "
          >
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
                whileHover={{
                  scale: 1.1,
                  y: -4
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                cursor-pointer
                "
              >
                <Icon size={15} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LINK COLUMN 1 */}
        <motion.div variants={item}>
          <p
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/40
            mb-5
            "
          >
            Company
          </p>

          <ul
            className="
            space-y-3
            text-lg
            sm:text-xl
            font-medium
            "
          >
            {['Services', 'Work', 'About', 'Culture', 'Meet The Risers'].map(
              link => (
                <li
                  key={link}
                  className="
                cursor-pointer
                text-white/80
                hover:text-white
                transition-colors
                "
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* LINK COLUMN 2 */}
        <motion.div variants={item}>
          <p
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/40
            mb-5
            "
          >
            Resources
          </p>

          <ul
            className="
            space-y-3
            text-lg
            sm:text-xl
            font-medium
            "
          >
            {['Testimonials', 'Blog', 'Webinars', 'Careers'].map(link => (
              <li
                key={link}
                className="
                cursor-pointer
                text-white/80
                hover:text-white
                transition-colors
                "
              >
                {link}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LINK COLUMN 3 */}
        <motion.div variants={item}>
          <p
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/40
            mb-5
            "
          >
            Offices
          </p>

          <ul
            className="
            space-y-3
            text-lg
            sm:text-xl
            font-medium
            "
          >
            {['Sheffield', 'Manchester', 'London', 'New York', 'Contact'].map(
              link => (
                <li
                  key={link}
                  className="
                cursor-pointer
                text-white/80
                hover:text-white
                transition-colors
                "
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </motion.div>
      </motion.div>

      {/* HUGE TEXT */}
      <div
        className="
        relative
        z-0
        mt-16
        md:mt-24
        overflow-hidden
        "
      >
        <h1
          className="
          text-[52px]
          sm:text-[90px]
          md:text-[130px]
          lg:text-[180px]
          xl:text-[220px]
          font-bold
          tracking-[-0.06em]
          leading-none
          text-white
          whitespace-nowrap
          select-none
          "
        >
          Rise at Seven®
        </h1>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
        relative
        z-10
        mt-10
        md:mt-14
        pt-6
        border-t
        border-white/10
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        text-xs
        sm:text-sm
        text-white/60
        "
      >
        <p className="max-w-4xl leading-relaxed">
          © 2025 Rise at Seven Ltd. All rights reserved • Company Number
          11955187 • VAT Registered GB 322402945 • Privacy Policy • Terms &
          Conditions
        </p>

        <p className="whitespace-nowrap">Website MadeByShape</p>
      </div>
    </footer>
  )
}

export default Footer
