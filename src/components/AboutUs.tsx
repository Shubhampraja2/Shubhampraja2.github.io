import { motion } from 'motion/react';
import { Users, Target, Heart, Award } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Made by Engineers',
    description: 'Built by IIT graduates with deep cybersecurity expertise',
  },
  {
    icon: Target,
    title: 'Privacy First',
    description: 'All processing happens on your device, never on our servers',
  },
  {
    icon: Heart,
    title: 'Made in India',
    description: 'Proudly developed in India with traditional values of trust',
  },
  {
    icon: Award,
    title: 'AI-Powered',
    description: 'Cutting-edge machine learning for maximum protection',
  },
];

export function AboutUs() {
  return (
    <section className="relative py-24 bg-[#0A0F1C] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6">
                <span className="text-[#D4AF37]">About Shabari</span>
              </div>

              <h2 className="text-white mb-6">
                Building Digital Trust for Everyone
              </h2>

              <p className="text-[#C0C0C0] mb-4 leading-relaxed">
                Founded by <span className="text-[#D4AF37]">Shubham Prajapati</span>, Shabari is led by a team of IIT engineers and cybersecurity experts committed to making digital safety accessible to every Indian.
              </p>

              <p className="text-[#C0C0C0] mb-4 leading-relaxed">
                We witnessed firsthand how digital fraud affects millions of Indians daily. That's why we built Shabari - to democratize cybersecurity and protect everyone from SMS scams, UPI fraud, and malicious attacks.
              </p>

              <p className="text-[#C0C0C0] mb-8 leading-relaxed">
                Built entirely in India, Shabari combines traditional values of trust with cutting-edge AI technology. We believe privacy is a fundamental right, which is why all processing happens on your device.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '100%', label: 'Privacy' },
                  { value: '24/7', label: 'Protection' },
                  { value: '0ms', label: 'Cloud Delay' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl text-[#D4AF37] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#C0C0C0]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Values grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-white mb-2">{value.title}</h4>
                  <p className="text-[#C0C0C0] text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
