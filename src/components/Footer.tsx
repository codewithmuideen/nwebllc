import { motion } from 'framer-motion'
import { Mail, Phone, Globe } from 'lucide-react'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Logo from './Logo'

const services = [
  'Custom Code',
  'SEO Ranking',
  'Email Signatures',
  'WP Development',
  'Mobile Apps',
  'Web Redesign',
]

const contactInfo = [
  { icon: Mail, text: 'matteo_wrenford@outlook.com' },
  { icon: Phone, text: '+62 851-6785-2397' },
  { icon: Globe, text: 'nwebllc.vercel.app' },
]

const socials = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Logo size={36} />
              <span className="text-2xl font-black tracking-tighter uppercase">
                nweb <span className="text-indigo-500">LLC</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
              Premium digital solutions for visionaries. We build the
              infrastructure that allows your business to scale without limits.
              From concept to conversion, every pixel has purpose.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h5 className="font-bold mb-6 uppercase tracking-[0.2em] text-indigo-400 text-sm">
              Quick Contact
            </h5>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-gray-400 text-sm group"
                >
                  <item.icon
                    size={16}
                    className="text-indigo-500 group-hover:text-indigo-400 transition-colors flex-none"
                  />
                  <span className="group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="font-bold mb-6 uppercase tracking-[0.2em] text-indigo-400 text-sm">
              Our Services
            </h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center text-gray-600 text-xs tracking-[0.2em] border-t border-white/5 pt-8 uppercase">
          &copy; {new Date().getFullYear()} nweb LLC. All Rights Reserved. Engineered with
          Excellence.
        </div>
      </div>
    </footer>
  )
}
