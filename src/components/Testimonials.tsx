import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Small Business Owner',
    avatar: 'PS',
    quote: 'Shabari blocked 99% of spam SMS instantly! I feel so much safer now.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    avatar: 'RK',
    quote: 'I feel safe using Shabari every day. The on-device AI is brilliant!',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Teacher',
    avatar: 'AD',
    quote: 'The secure browser feature is amazing! No more worrying about phishing links.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-[#121823] overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37), linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-[#C0C0C0]">
            See what our users have to say about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-[#D4AF37]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Avatar className="w-12 h-12 border-2 border-[#D4AF37]/30">
                    <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-sm text-[#C0C0C0]">{testimonial.role}</div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-[#C0C0C0]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
            <span>10,000+ Downloads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
            <span>4.8★ Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
            <span>1M+ Threats Blocked</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
