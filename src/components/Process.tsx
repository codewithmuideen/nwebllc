import { motion } from 'framer-motion'
import { MessageSquare, Palette, Rocket, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your vision, target audience, and business goals to craft a strategic blueprint.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description:
      'Premium UI/UX design that combines aesthetics with conversion-driven architecture for maximum impact.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Development',
    description:
      'Clean, scalable code built with cutting-edge technology stacks. Every line engineered for performance.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Growth',
    description:
      'Ongoing SEO optimization, analytics tracking, and strategic consulting to scale your digital presence.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Process
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 mx-auto glass-strong rounded-2xl flex items-center justify-center group-hover:border-indigo-500/40 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                  <step.icon
                    size={30}
                    className="text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300"
                  />
                </div>
                <span className="absolute -top-3 -right-3 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white text-xs font-black w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
