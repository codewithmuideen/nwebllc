import { motion } from 'framer-motion'
import {
  Layers,
  Search,
  Smartphone,
  Code2,
  Globe,
  Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

const services: Service[] = [
  {
    icon: Layers,
    title: 'Web Redesign',
    description:
      'Transforming outdated platforms into modern, high-converting experiences with cutting-edge UI/UX and custom architecture.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: Search,
    title: 'Elite SEO',
    description:
      'Aggressive ranking strategies and Google Business optimization for maximum search visibility and organic authority.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Full-cycle mobile development with native performance, ensuring your brand reaches every customer\'s pocket.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Code2,
    title: 'Custom Code',
    description:
      'Bespoke software solutions built from the ground up. Clean, scalable, and engineered for long-term performance.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Globe,
    title: 'WP Development',
    description:
      'Professional WordPress development with custom themes, plugins, and enterprise-grade performance optimization.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Mail,
    title: 'Email Signatures',
    description:
      'Professionally crafted HTML email signatures that reinforce your brand identity across every communication.',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl glow-card group cursor-default"
            >
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`${service.color}`} size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
