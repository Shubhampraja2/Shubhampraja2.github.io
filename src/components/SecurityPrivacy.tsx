import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, Server, Smartphone, CheckCircle } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Database,
    title: 'Zero Data Collection',
    description: 'We don\'t collect, store, or transmit any of your personal data. Your information stays on your device.',
  },
  {
    icon: Smartphone,
    title: 'On-Device Processing',
    description: 'All AI analysis happens locally on your phone. No cloud processing, no external servers.',
  },
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    description: 'Military-grade encryption protects your sensitive data in the secure vault.',
  },
  {
    icon: Eye,
    title: 'No Tracking',
    description: 'We don\'t track your browsing, messages, or any activity. Complete digital privacy.',
  },
  {
    icon: Server,
    title: 'Minimal Permissions',
    description: 'We only request essential permissions needed for protection. Nothing more.',
  },
  {
    icon: Shield,
    title: 'Open Standards',
    description: 'Built on proven security standards and open-source technologies you can trust.',
  },
];

const securityPrinciples = [
  'Privacy by Design - Built from the ground up with privacy as the core principle',
  'Local AI Processing - All machine learning happens on your device',
  'No User Profiling - We don\'t build profiles or track behavior',
  'Transparent Operations - Clear about what we do and don\'t do with your data',
  'Regular Security Audits - Continuous testing and improvement of security measures',
  'Compliance - Adheres to Indian data protection and privacy regulations',
];

export function SecurityPrivacy() {
  return (
    <section className="relative py-24 bg-[#0A0F1C] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #00C9A7 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/20 mb-6">
            <Shield className="w-4 h-4 text-[#00C9A7]" />
            <span className="text-[#00C9A7]">Security & Privacy First</span>
          </div>

          <h2 className="text-white mb-6">
            Your Privacy is Our Priority
          </h2>
          <p className="text-[#C0C0C0] text-lg">
            Shabari is built on the foundation of complete privacy and transparency. We use cutting-edge on-device AI to protect you without compromising your personal data.
          </p>
        </motion.div>

        {/* Privacy Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group hover:border-[#00C9A7]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C9A7]/20 to-[#00C9A7]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[#00C9A7]" />
              </div>
              <h3 className="text-white mb-2">{feature.title}</h3>
              <p className="text-[#C0C0C0] text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/10 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#00A88E] flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white">Our Security Commitment</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {securityPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00C9A7] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C0C0C0]">{principle}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust statement */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[#C0C0C0] text-center italic">
                  "Shabari respects traditional Indian values of trust and safety while using cutting-edge technology. Your security is our mission, and your privacy is our promise."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-white mb-6">Powered by Trusted Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['On-Device AI/ML', 'VirusTotal API', 'YARA Engine', 'AES-256 Encryption', 'Safe Browsing', 'Biometric Auth'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-[#C0C0C0]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
