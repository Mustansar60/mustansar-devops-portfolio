import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4" id="experience">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience & Impact</h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="glass-strong p-8 rounded-xl hover:glow-accent transition-all duration-300 border-l-4 border-accent"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-accent text-lg font-semibold">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-400 whitespace-nowrap">
                  <p className="font-mono">{exp.startDate}</p>
                  <p>→ {exp.endDate}</p>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                className="space-y-3 mt-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {exp.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base">{highlight}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
