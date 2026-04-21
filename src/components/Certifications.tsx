import { motion } from 'framer-motion';
import { Award, Shield, Brain } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Award: <Award className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    Brain: <Brain className="w-8 h-8" />,
  };
  return icons[iconName] || <Award className="w-8 h-8" />;
};

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4" id="certifications">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Certifications</h2>
          </div>
          <p className="text-gray-400 text-lg">Industry-recognized credentials</p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-secondary rounded-full mt-4 mx-auto" />
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ translateY: -8, scale: 1.02 }}
              className="glass-strong p-8 rounded-xl border border-dark-border hover:border-accent transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <motion.div
                className="p-4 rounded-lg bg-gradient-to-br from-accent to-accent-secondary bg-opacity-10 mb-4 group-hover:bg-opacity-20 transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-accent group-hover:text-white transition-colors">
                  {getIconComponent(cert.icon)}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {cert.name}
              </h3>

              <p className="text-accent-secondary font-semibold mb-1">{cert.issuer}</p>

              <motion.div
                className="mt-auto pt-4 border-t border-dark-border w-full"
              >
                <p className="text-gray-400 text-sm font-mono">{cert.date}</p>
              </motion.div>

              {/* Verification badge */}
              <motion.div
                className="mt-4 px-4 py-2 bg-accent bg-opacity-10 border border-accent rounded-full text-accent text-xs font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                ✓ Verified
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-base">
            Continuous learning and professional development are core to staying current in DevOps
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
