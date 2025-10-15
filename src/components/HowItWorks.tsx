import { motion } from 'motion/react';
import { Search, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Detection',
    description: 'AI scans SMS, links, files, and QR codes in real-time on your device',
    color: '#D4AF37',
  },
  {
    icon: AlertTriangle,
    title: 'Alert',
    description: 'Instant warnings for suspicious content with detailed threat analysis',
    color: '#FF6B6B',
  },
  {
    icon: Shield,
    title: 'Action',
    description: 'Automatic blocking or user-guided decisions to handle threats',
    color: '#007BFF',
  },
  {
    icon: CheckCircle,
    title: 'Protection',
    description: 'Continuous monitoring keeps you safe 24/7 without compromising privacy',
    color: '#00C9A7',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 bg-[#0A0F1C] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-white mb-4">
            How Shabari Protects You
          </h2>
          <p className="text-[#C0C0C0] text-lg">
            Detection → Alert → Action → Protection: Our intelligent workflow keeps you safe
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#007BFF] to-[#00C9A7] opacity-20" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative z-10 text-center">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] text-white mb-6 shadow-lg"
                    style={{
                      boxShadow: `0 0 30px ${step.color}50`,
                    }}
                  >
                    <span className="text-lg">{index + 1}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="mb-6 flex justify-center"
                  >
                    <div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                      style={{
                        boxShadow: `0 0 40px ${step.color}30`,
                      }}
                    >
                      <step.icon
                        className="w-10 h-10"
                        style={{ color: step.color }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#C0C0C0]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator (desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/4 -right-4 z-20"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0A0F1C] border-2 border-[#D4AF37] flex items-center justify-center">
                      <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#D4AF37]" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
