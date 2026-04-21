import { motion } from 'framer-motion';
import { Code2, Cloud, Lock, Terminal } from 'lucide-react';

interface SkillsProps {
  skills: {
    cloudOrchestration: string[];
    automationIaC: string[];
    securityNetworking: string[];
    languages: string[];
  };
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillCategories = [
    {
      title: 'Cloud & Orchestration',
      icon: Cloud,
      items: skills.cloudOrchestration,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Automation & IaC',
      icon: Terminal,
      items: skills.automationIaC,
      color: 'from-purple-500 to-pink-400',
    },
    {
      title: 'Security & Networking',
      icon: Lock,
      items: skills.securityNetworking,
      color: 'from-green-500 to-emerald-400',
    },
    {
      title: 'Languages',
      icon: Code2,
      items: skills.languages,
      color: 'from-orange-500 to-red-400',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 px-4" id="skills">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills Matrix</h2>
          <p className="text-gray-400 text-lg">Expertise across DevOps, Cloud, and Infrastructure</p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-strong p-8 rounded-xl hover:glow-accent transition-all duration-300"
                whileHover={{ translateY: -5 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skill tags */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, translateY: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-dark-card to-dark-bg rounded-lg border border-dark-border text-sm font-medium text-accent hover:border-accent transition-all cursor-pointer"
                    >
                      <motion.span className="inline-block">
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 glass rounded-lg text-center"
        >
          <p className="text-gray-400">
            Proficient in designing and implementing scalable infrastructure solutions with hands-on experience across multiple cloud providers and containerization technologies.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
