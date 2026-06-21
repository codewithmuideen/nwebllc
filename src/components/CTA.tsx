import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase text-gray-300">
              Ready to Transform
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Let&apos;s Build Something
            <br />
            <span className="text-gradient">Extraordinary</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Your next-level digital presence is one conversation away. Reach out
            today and let&apos;s discuss how we can elevate your brand to new heights.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://wa.me/6285167852397"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium px-10 py-5 rounded-xl font-extrabold text-lg flex items-center gap-3 text-white shadow-2xl"
            >
              <FaWhatsapp className="text-2xl" />
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="mailto:matteo_wrenford@outlook.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-xl font-extrabold text-lg flex items-center gap-3 text-white glass hover:bg-white/10 transition-all duration-300"
            >
              Send an Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
