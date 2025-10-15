import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, Send, MapPin, Phone, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Store in localStorage (in production, send to backend)
      const contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      contacts.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(contacts));

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#121823]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Button
              onClick={onNavigateHome}
              variant="ghost"
              className="text-[#C0C0C0] hover:text-[#D4AF37] hover:bg-white/5 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Us
              </h1>
            </div>

            <p className="text-[#C0C0C0] text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#121823]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-white mb-4">Get in Touch</h2>
                  <p className="text-[#C0C0C0] mb-8">
                    Whether you have a question about features, security, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:mrdrsp4@gmail.com"
                    whileHover={{ y: -5 }}
                    className="block p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">Email Us</h3>
                        <p className="text-[#C0C0C0] text-sm mb-2">
                          Our team typically responds within 24 hours
                        </p>
                        <p className="text-[#D4AF37]">mrdrsp4@gmail.com</p>
                      </div>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="block p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#007BFF]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#007BFF]" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">Location</h3>
                        <p className="text-[#C0C0C0] text-sm mb-2">
                          Proudly built in India
                        </p>
                        <p className="text-[#C0C0C0]">India 🇮🇳</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="block p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#00C9A7]/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-[#00C9A7]" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">Support</h3>
                        <p className="text-[#C0C0C0] text-sm mb-2">
                          Get help with any issues
                        </p>
                        <p className="text-[#C0C0C0]">24/7 Support Available</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Social proof */}
                <div className="pt-8 border-t border-white/10">
                  <p className="text-[#C0C0C0] text-sm mb-4">Trusted by thousands</p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl text-[#D4AF37] mb-1">10K+</div>
                      <div className="text-xs text-[#C0C0C0]">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-[#D4AF37] mb-1">1M+</div>
                      <div className="text-xs text-[#C0C0C0]">Threats Blocked</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-[#D4AF37] mb-1">4.8★</div>
                      <div className="text-xs text-[#C0C0C0]">Rating</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
                    <h3 className="text-white mb-6">Send us a Message</h3>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-[#C0C0C0]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-[#C0C0C0]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-white">Subject</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-[#C0C0C0]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your question or concern..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-[#C0C0C0]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4AF37] hover:bg-[#C19B2F] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-center space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-20 h-20 bg-[#00C9A7] rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white mb-2">Message Sent!</h3>
                      <p className="text-[#C0C0C0]">
                        Thank you for reaching out. We'll get back to you at <span className="text-[#D4AF37]">{formData.email}</span> as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
