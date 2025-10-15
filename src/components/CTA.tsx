import { motion } from 'motion/react';
import { Sparkles, Users } from 'lucide-react';
import { Button } from './ui/button';
import { BetaWaitlist } from './BetaWaitlist';

export function CTA() {
  return (
    <section className="relative py-24 bg-[#0A0F1C] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #007BFF 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden"
          >
            {/* Sparkle decorations */}
            <motion.div
              className="absolute top-10 left-10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-8 h-8 text-[#007BFF]" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 mb-6">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                <span className="text-[#D4AF37]">Limited Beta Access</span>
              </div>

              <h2 className="text-white mb-6">
                Join the Waitlist — Be First to Experience Shabari
              </h2>

              <p className="text-[#C0C0C0] mb-8 max-w-2xl mx-auto">
                Get early access to India's most advanced mobile security suite. Join our beta program and help shape the future of digital protection.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <BetaWaitlist 
                  size="lg"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C19B2F] text-white px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 group text-base font-medium">
                      <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                      Join Beta Program
                    </button>
                  }
                />
                <BetaWaitlist 
                  size="lg"
                  variant="outline"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 border-2 border-[#007BFF] bg-transparent text-white hover:bg-[#007BFF] hover:text-white px-10 py-7 rounded-full shadow-[0_0_40px_rgba(0,123,255,0.4)] hover:shadow-[0_0_50px_rgba(0,123,255,0.6)] transition-all duration-300 text-base font-medium">
                      <Users className="w-5 h-5" />
                      Join Waitlist
                    </button>
                  }
                />
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/10">
                {[
                  'No Credit Card Required',
                  'Early Access',
                  'Lifetime Discount',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-[#C0C0C0]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#00C9A7]/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00C9A7] rounded-full" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-[#007BFF]/10 opacity-50 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
