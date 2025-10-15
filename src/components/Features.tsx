import { motion } from 'motion/react';
import { Shield, Globe, Lock, QrCode, ScanLine, Vault, Ban, Radio } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fraud SMS & Call Detection',
    description: 'Instantly flags spam or scam messages using on-device AI.',
    color: '#007BFF',
  },
  {
    icon: Radio,
    title: 'Secure VPN',
    description: 'Military-grade encryption for your internet connection with no-logs policy.',
    color: '#00C9A7',
  },
  {
    icon: Ban,
    title: 'Advanced Ad Blocker',
    description: 'Block intrusive ads, trackers, and malicious scripts across all apps.',
    color: '#FF6B6B',
  },
  {
    icon: Globe,
    title: 'Secure Browser',
    description: 'Browse freely with phishing protection and built-in security.',
    color: '#9B59B6',
  },
  {
    icon: QrCode,
    title: 'Secure QR Scanner',
    description: 'Detects and blocks malicious QR codes before you scan.',
    color: '#D4AF37',
  },
  {
    icon: ScanLine,
    title: 'File & Link Scanner',
    description: 'Scans attachments, downloads, and links locally for malware.',
    color: '#007BFF',
  },
  {
    icon: Lock,
    title: 'UPI Protection',
    description: 'Real-time monitoring of UPI transactions to prevent fraud.',
    color: '#00C9A7',
  },
  {
    icon: Vault,
    title: 'Secure Vault',
    description: 'Protect passwords, notes, and confidential files with AES encryption.',
    color: '#9B59B6',
  },
];

export function Features() {
  return (
    <section className="relative py-24 bg-[#121823] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-white mb-4">
            All-in-One Security for Your Digital Life
          </h2>
          <p className="text-[#C0C0C0] text-lg">
            Complete protection against SMS fraud, UPI scams, malicious links, and more - all powered by on-device AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.color}15, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        boxShadow: `0 0 20px ${feature.color}30`,
                      }}
                    >
                      <feature.icon
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#C0C0C0] text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
