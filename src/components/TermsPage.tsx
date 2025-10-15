import { motion } from 'motion/react';
import { FileText, ArrowLeft, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import { Button } from './ui/button';

export function TermsPage({ onNavigateHome }: { onNavigateHome: () => void }) {
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#0066CC] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Terms of Service
              </h1>
            </div>

            <p className="text-[#C0C0C0] text-lg">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#121823]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-[#C0C0C0] leading-relaxed">
                Welcome to Shabari! These Terms of Service ("Terms") govern your use of the Shabari mobile application and related services. By downloading, installing, or using Shabari, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the app.
              </p>
            </motion.div>

            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">1. Acceptance of Terms</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  By accessing or using Shabari, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all users of the application.
                </p>
                <p>
                  You must be at least 18 years old or have parental/guardian consent to use this application.
                </p>
              </div>
            </motion.div>

            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">2. Service Description</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  Shabari is a mobile security application that provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SMS and call fraud detection</li>
                  <li>UPI transaction monitoring</li>
                  <li>QR code security scanning</li>
                  <li>File and link malware detection</li>
                  <li>Secure browsing protection</li>
                  <li>Encrypted vault for sensitive data</li>
                </ul>
                <p className="mt-4">
                  All security features are powered by on-device AI and do not require internet connectivity for core functionality.
                </p>
              </div>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">3. User Responsibilities</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>As a user of Shabari, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the app only for lawful purposes and in accordance with these Terms</li>
                  <li>Not attempt to reverse engineer, decompile, or disassemble the application</li>
                  <li>Not use the app to infringe on the rights of others</li>
                  <li>Keep your device secure and protect your biometric authentication credentials</li>
                  <li>Not share sensitive security information with unauthorized parties</li>
                  <li>Report any security vulnerabilities you discover to us</li>
                </ul>
              </div>
            </motion.div>

            {/* Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">4. Disclaimer and Limitations</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  <strong className="text-white">No Guarantee:</strong> While Shabari uses advanced AI technology to detect threats, we cannot guarantee 100% detection of all fraud attempts or malware. Users should remain vigilant and use good judgment.
                </p>
                <p>
                  <strong className="text-white">Service Availability:</strong> We strive to maintain continuous service but do not guarantee uninterrupted access. The app may be unavailable due to maintenance, updates, or technical issues.
                </p>
                <p>
                  <strong className="text-white">Limitation of Liability:</strong> To the fullest extent permitted by law, Shabari and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">5. Intellectual Property</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  All content, features, and functionality of Shabari, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Shabari and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </motion.div>

            {/* Beta Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">6. Beta Program</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  If you are participating in our Beta Program:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>The app may contain bugs or incomplete features</li>
                  <li>You agree to provide feedback on your experience</li>
                  <li>Features may change without notice</li>
                  <li>Beta access may be terminated at any time</li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">7. Termination</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  We reserve the right to suspend or terminate your access to Shabari at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">8. Governing Law</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of Shabari shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">9. Changes to Terms</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the app after such changes constitutes acceptance of the modified Terms.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
            >
              <h2 className="text-white mb-4">10. Contact Information</h2>
              <p className="text-[#C0C0C0] mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <FileText className="w-5 h-5" />
                <a href="mailto:mrdrsp4@gmail.com" className="hover:underline">
                  mrdrsp4@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
