import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-300">
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 tracking-tight"
            >
              We Build
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Excellence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed"
            >
              nweb LLC specializes in high-end web redesign, custom code
              architecture, and elite SEO ranking strategies that drive actual
              revenue for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="https://wa.me/6285167852397"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-8 py-4 rounded-xl font-bold text-base flex items-center gap-3 text-white shadow-2xl"
              >
                <FaWhatsapp className="text-xl" />
                Start a Project
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl font-bold text-base flex items-center gap-3 text-white glass hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Trusted by <span className="text-white font-semibold">200+</span> global clients
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="glass p-3 rounded-[2rem] shadow-2xl shadow-indigo-500/10">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                className="rounded-[1.5rem] w-full object-cover aspect-[4/3]"
                alt="Premium web design dashboard"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 glass-strong p-5 rounded-2xl"
            >
              <p className="text-cyan-400 font-black text-3xl">99.9%</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">
                SEO Visibility
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -top-4 -right-4 glass-strong p-5 rounded-2xl"
            >
              <p className="text-indigo-400 font-black text-3xl">3x</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">
                Revenue Growth
              </p>
            </motion.div>

            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-indigo-600/30 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-cyan-600/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
