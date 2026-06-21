import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Fingerprint, Zap, Shield, HeadphonesIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

const features: Feature[] = [
  {
    icon: Fingerprint,
    title: 'Tailored Solutions',
    description:
      'No generic templates. Everything we build is custom-coded and designed specifically for your mission and brand identity.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-600/15',
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    description:
      'Lightning-fast hosting and code that scores 90+ on Google PageSpeed. Every millisecond counts for conversions.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-600/15',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade security protocols with SSL, DDoS protection, and regular security audits to keep your data safe.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-600/15',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description:
      'Round-the-clock premium support. Your dedicated project manager is always one message away.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-600/15',
  },
]

interface StatProps {
  value: string
  label: string
  suffix?: string
  highlighted?: boolean
}

function AnimatedStat({ value, label, suffix = '', highlighted = false }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  const numericValue = parseInt(value.replace(/\D/g, ''))

  useEffect(() => {
    if (!isInView) return
    if (isNaN(numericValue)) {
      setDisplay(value)
      return
    }
    let start = 0
    const duration = 2000
    const step = (numericValue / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= numericValue) {
        setDisplay(String(numericValue))
        clearInterval(timer)
      } else {
        setDisplay(String(Math.floor(start)))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, numericValue, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`glass p-6 rounded-2xl text-center ${
        highlighted
          ? 'bg-gradient-to-br from-indigo-600/80 to-indigo-800/80 border-indigo-500/30'
          : ''
      }`}
    >
      <h3 className="text-3xl md:text-4xl font-black">
        {display}
        {suffix}
      </h3>
      <p
        className={`text-xs uppercase tracking-[0.15em] mt-2 font-medium ${
          highlighted ? 'text-indigo-200' : 'text-gray-400'
        }`}
      >
        {label}
      </p>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[130px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tight">
                Why Partner With{' '}
                <span className="text-gradient">nweb LLC?</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div
                    className={`flex-none w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={feature.color} size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <AnimatedStat value="100" suffix="%" label="Delivery Rate" />
              <AnimatedStat value="24/7" suffix="" label="Live Support" />
            </div>
            <div className="space-y-4">
              <AnimatedStat
                value="500"
                suffix="+"
                label="SEO Keywords Ranked"
                highlighted
              />
              <AnimatedStat value="5.0" suffix="" label="Client Rating" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
