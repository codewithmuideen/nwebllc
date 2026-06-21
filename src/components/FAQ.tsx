import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do you provide hosting and domains?',
    answer:
      'Yes, nweb LLC handles the full spectrum from domain acquisition to premium cloud hosting setup. We ensure your site runs on enterprise-grade infrastructure with 99.9% uptime guarantee.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'While SEO is a long-term investment, we typically see significant visibility improvements and star rating growth within the first 30-60 days. Full ranking dominance usually takes 3-6 months depending on competition.',
  },
  {
    question: 'What is your development timeline?',
    answer:
      'Standard websites are delivered within 2-4 weeks. Complex web applications and e-commerce platforms may take 6-12 weeks. We provide a detailed timeline during our discovery phase so you know exactly what to expect.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Absolutely. We offer monthly maintenance packages that include security updates, performance monitoring, content updates, and priority support. Your digital presence stays sharp and secure around the clock.',
  },
  {
    question: 'How do I get started with a project?',
    answer:
      'Simply reach out via WhatsApp or email. We will schedule a free discovery call to understand your needs, then provide a detailed proposal with scope, timeline, and investment breakdown within 48 hours.',
  },
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left group"
      >
        <span className="font-bold text-base pr-8 group-hover:text-indigo-300 transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-none"
        >
          <ChevronDown
            size={20}
            className="text-indigo-400"
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[130px] -z-10" />

      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Got Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Frequently Asked
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQAccordion
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
