import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="border-t border-dark-border py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">DevOps Engineer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building secure, scalable, and automated cloud infrastructure. Specializing in AWS, Kubernetes, and Infrastructure-as-Code solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Experience', 'Skills', 'Projects', 'Certifications'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    → {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass hover:glass-strong transition-all text-accent"
                title="GitHub"
              >
                <span className="text-lg">⚙️</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass hover:glass-strong transition-all text-accent-secondary"
                title="LinkedIn"
              >
                <span className="text-lg">💼</span>
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass hover:glass-strong transition-all text-accent"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left text-sm text-gray-400">
            <p>© 2025 Mustansar Maqsood. All rights reserved.</p>
            <p>DevOps | Cloud Infrastructure | Kubernetes | AWS</p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-lg glass glow-accent transition-all hover:bg-accent hover:text-dark-bg"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
