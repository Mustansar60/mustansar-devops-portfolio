import { motion } from 'framer-motion';
import { Zap, Network, Bot, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  icon: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Network: <Network className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Bot: <Bot className="w-8 h-8" />,
  };
  return icons[iconName] || <Zap className="w-8 h-8" />;
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4" id="projects">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 text-lg">DevOps projects showcasing infrastructure excellence</p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-secondary rounded-full mt-4" />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              variants={itemVariants}
              whileHover={{ translateY: -8, boxShadow: '0 0 40px rgba(0, 217, 255, 0.2)' }}
              className="glass-strong p-8 rounded-xl border border-dark-border hover:border-accent transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Icon container */}
              <motion.div
                className="p-4 rounded-lg bg-gradient-to-br from-accent to-accent-secondary bg-opacity-10 w-fit mb-4 group-hover:bg-opacity-20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-accent group-hover:text-white transition-colors">
                  {getIconComponent(project.icon)}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Metrics badge */}
              <motion.div
                className="inline-block px-3 py-1 bg-accent bg-opacity-20 border border-accent rounded-full text-accent text-xs font-semibold mb-4 w-fit"
                whileHover={{ scale: 1.05 }}
              >
                {project.metrics}
              </motion.div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-dark-bg border border-dark-border rounded-lg text-xs text-gray-300 group-hover:border-accent-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Learn more */}
              <motion.div
                className="flex items-center gap-2 text-accent mt-auto pt-4 border-t border-dark-border group-hover:translate-x-1 transition-transform"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold">Learn More</span>
                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
