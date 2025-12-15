import { motion } from "framer-motion";

const habitAds = [
  {
    title: "Morning Focus",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    position: "top-0 left-0 md:-left-12",
    delay: 0
  },
  {
    title: "Active Lifestyle",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    position: "top-12 right-0 md:-right-4",
    delay: 1.2
  },
  {
    title: "Creative Space",
    category: "Home",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    position: "bottom-12 left-4 md:-left-4",
    delay: 0.5
  },
  {
    title: "Social Moments",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    position: "bottom-0 right-4 md:right-8",
    delay: 1.8
  },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-[90vh] bg-[#fdfbf9] overflow-hidden flex items-center">

      {/* Background Soft Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN: Typography & Search */}
        <div className="flex flex-col items-start pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-6 text-6xl md:text-8xl font-semibold text-neutral-900 tracking-tight leading-[0.9]">
              Habitoré
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-6 text-2xl md:text-3xl font-medium tracking-tight max-w-2xl"
            >
              <span className="text-neutral-800">Your Life,</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500 font-semibold">Your Pace,</span>{" "}
              <span className="text-neutral-600">Your Store.</span>
            </motion.p>
          </motion.div>

          {/* Habit-based Entry Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3 max-w-lg"
          >
            {[
              "Morning Calm",
              "Deep Work",
              "Move Your Body",
              "Wind Down",
              "Social Energy",
            ].map((habit, i) => (
              <div
                key={i}
                className="cursor-pointer px-5 py-3 rounded-2xl bg-white border border-neutral-100 text-neutral-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                {habit}
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-neutral-500"
          >
            Tap a habit to explore products curated for that moment.
          </motion.p>

        </div>

        {/* RIGHT COLUMN: Floating Card Composition */}
        <div className="relative h-[500px] w-full hidden lg:block">
          {habitAds.map((ad, i) => (
            <motion.div
              key={i}
              className={`absolute ${ad.position} w-64 p-3 bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0], // Floating Effect
              }}
              transition={{
                scale: { delay: i * 0.1, duration: 0.5 },
                y: {
                  repeat: Infinity,
                  duration: 4 + i, // Varied speeds for organic feel
                  ease: "easeInOut",
                  delay: ad.delay
                }
              }}
              whileHover={{ scale: 1.05, zIndex: 50 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex justify-between items-end px-1">
                <div>
                  <p className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider mb-0.5">{ad.category}</p>
                  <h3 className="text-neutral-900 font-medium text-lg leading-tight">{ad.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors">
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}