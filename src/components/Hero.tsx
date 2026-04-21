import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface HeroProps {
  profile: {
    name: string;
    title: string;
    tagline: string;
    specialty: string;
    github?: string;
    linkedin?: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
      id="hero"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary opacity-5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal icon */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <motion.div
            className="p-4 rounded-lg glass glow-accent"
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
          >
            <Terminal className="w-8 h-8 text-accent" />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">{profile.name}</span>
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            {profile.title}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-6 font-medium"
        >
          {profile.tagline}
        </motion.p>

        {/* Specialty */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {profile.specialty}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-dark-bg font-semibold rounded-lg transition-all hover:bg-accent-secondary"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-accent-secondary text-accent-secondary font-semibold rounded-lg hover:bg-accent-secondary hover:text-dark-bg transition-all"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mt-8"
        >
          {profile.github && (
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-lg glass hover:glass-strong transition-all text-accent hover:text-white"
              title="GitHub"
            >
              <span className="text-lg font-semibold">⚙️</span>
            </motion.a>
          )}
          {profile.linkedin && (
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-lg glass hover:glass-strong transition-all text-accent-secondary hover:text-white"
              title="LinkedIn"
            >
              <span className="text-lg font-semibold">💼</span>
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-accent text-sm">↓ Scroll to explore</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
