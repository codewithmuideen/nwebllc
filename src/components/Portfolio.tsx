import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    title: 'Brand Identity Suite',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Custom Code',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'SEO Growth Campaign',
    category: 'Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                  {project.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
