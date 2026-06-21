import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures',
    content:
      'nweb LLC completely transformed our online presence. Our organic traffic increased by 340% within the first quarter. The attention to detail and strategic approach to SEO was unlike anything we have experienced before.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, StartupGrid',
    content:
      'The redesign they delivered was not just visually stunning but strategically engineered for conversions. Our bounce rate dropped by 60% and signups tripled. Premium quality from start to finish.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Elena Kowalski',
    role: 'Marketing Director, BrandForge',
    content:
      'Working with nweb LLC has been a game-changer for our digital strategy. Their custom code solutions and SEO expertise have put us miles ahead of our competition. Highly recommended for serious businesses.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Client Voices
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            What They Say
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass p-8 rounded-2xl relative group hover:border-indigo-500/30 transition-all duration-500"
            >
              <Quote
                size={40}
                className="text-indigo-500/20 absolute top-6 right-6"
              />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
