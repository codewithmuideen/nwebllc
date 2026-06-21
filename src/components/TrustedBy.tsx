import { motion } from 'framer-motion'

const stats = [
  { value: '200+', label: 'Global Clients' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Premium Support' },
]

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#060606]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
