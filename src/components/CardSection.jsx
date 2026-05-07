import { AlarmClock, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import AnimatedButton from './AnimatedButton'

const cards = [
  {
    id: 1,
    category: 'News',
    photo:
      'https://i.ibb.co.com/MxCLzXFw/young-bearded-man-with-striped-shirt-273609-5677.avif',
    name: 'Carrie Rose',
    title:
      'Dynamically drive extensive internal or "organic" sources after maintainable supply chains. Completely.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
  },
  {
    id: 2,
    category: 'Food/Hospitality/Drink',
    photo: 'https://i.ibb.co.com/1GJHbtrc/businessman.jpg',
    name: 'Ray Saddiq',
    title:
      'Synergistically integrate superior meta-services before goal-oriented web services. Progressively .',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91'
  },
  {
    id: 3,
    category: 'Food/Hospitality/Drink',
    photo:
      'https://i.ibb.co.com/YFVhbq6M/bohemian-man-with-his-arms-crossed-1368-3542.avif',
    name: 'Carrie Rose',
    title:
      'Collaboratively incentivize bleeding-edge interfaces before cross-unit schemas Enthusiastically.',
    img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
  }
]

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  return (
    <div
      className="relative cursor-none overflow-hidden rounded-3xl"
      onMouseEnter={e => {
        setHovered(true)

        // 👇 IMPORTANT: set initial position instantly
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({
          x: rect.width / 2,
          y: rect.height / 2
        })
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setCursor({ x, y })
      }}
    >
      {/* IMAGE AREA */}
      <div className="relative">
        {/* Image */}
        <img
          src={item.img}
          alt="Card Image"
          className="w-full h-75 md:h-100 object-cover"
        />

        {/* Blur Overlay */}
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: hovered ? '100%' : '0%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-full h-full backdrop-blur-xl bg-white/10 z-10"
        />

        {/* ✅ REAL FOLLOW CURSOR */}
        {hovered && (
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-32 h-32 bg-sky-300 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">
                <ArrowUpRight size={44} />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-2 left-2 z-20">
        <h2 className="rounded-full py-1.5 px-3 bg-gray-400/40 font-semibold text-white">
          {item.category}
        </h2>
      </div>

      <div className="flex items-center gap-1.5 my-6 px-2">
        <div className="flex items-center gap-2 bg-white rounded-full py-1 px-1.5">
          <img
            className="w-6 h-6 rounded-full object-cover"
            src={item.photo}
            alt="Card owner image"
          />
          <p className="text-sm font-medium text-gray-600">{item.name}</p>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-full py-1.5 px-3">
          <AlarmClock size={17} className="text-gray-600" />
          <p className="text-sm text-gray-600 font-medium">2 mins</p>
        </div>
      </div>

      {/* TEXT (NO BLUR) */}
      <div className="pb-4 px-2">
        <h3 className="text-3xl font-medium">{item.title}</h3>
      </div>
    </div>
  )
}

export default function CardSection() {
  const [isExploreHover, setIsExploreHover] = useState(false)
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <div className="flex pb-10 border-gray-400 border-b items-center justify-between">
        <div className="text-3xl flex items-center md:text-7xl font-bold">
          What's{' '}
          <img
            className="w-20 h-20 rounded-2xl object-cover"
            src="https://i.ibb.co.com/qFL5hzcn/girl-singing-at-an-outdoor-concert-free-photo.jpg"
            alt="Music girl image"
          />{' '}
          New
        </div>
        <div>
          <motion.button
            onHoverStart={() => setIsExploreHover(true)}
            onHoverEnd={() => setIsExploreHover(false)}
            animate={{
              borderRadius: isExploreHover ? '12px' : '9999px'
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex items-center mt-10 font-semibold gap-2 bg-white text-black py-3 text-sm md:text-lg px-4"
          >
            <AnimatedButton text="Explore More Thoughts" />
          </motion.button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
