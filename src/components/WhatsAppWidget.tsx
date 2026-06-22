import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/6285167852397"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] whatsapp-pulse bg-green-500 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />
    </motion.a>
  )
}
