import { motion } from 'motion/react';
import { Shield, ArrowLeft, Lock, Eye, Database, FileText, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function PrivacyPolicyPage({ onNavigateHome }: { onNavigateHome: () => void }) {
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#00A88E] flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Privacy Policy
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
                At Shabari, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile security application. By using Shabari, you agree to the practices described in this policy.
              </p>
            </motion.div>

            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">1. Data Collection and Processing</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  <strong className="text-white">On-Device Processing:</strong> Shabari is designed with privacy-first principles. All AI and machine learning processing happens locally on your device. We do not send your personal data, messages, files, or browsing history to external servers.
                </p>
                <p>
                  <strong className="text-white">Zero Data Collection:</strong> We do not collect, store, or transmit:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your SMS messages or call logs</li>
                  <li>UPI transaction details</li>
                  <li>Scanned QR codes or files</li>
                  <li>Browsing history or website data</li>
                  <li>Personal documents stored in the secure vault</li>
                  <li>Any personally identifiable information (PII)</li>
                </ul>
              </div>
            </motion.div>

            {/* Permissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">2. App Permissions</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>Shabari requests the following permissions to provide security features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">SMS Access:</strong> To scan incoming messages for fraud detection</li>
                  <li><strong className="text-white">Camera:</strong> To scan QR codes for malicious content</li>
                  <li><strong className="text-white">Storage:</strong> To scan downloaded files for malware</li>
                  <li><strong className="text-white">Notification Access:</strong> To alert you about detected threats</li>
                  <li><strong className="text-white">Accessibility:</strong> To monitor UPI transactions and provide real-time protection</li>
                </ul>
                <p className="mt-4">
                  All permissions are used solely for security purposes and data is processed only on your device.
                </p>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">3. Data Security</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">AES-256 Encryption:</strong> All data in the secure vault is encrypted using military-grade encryption</li>
                  <li><strong className="text-white">Biometric Authentication:</strong> Access to sensitive features requires fingerprint or face recognition</li>
                  <li><strong className="text-white">Secure Enclave:</strong> Encryption keys are stored in your device's secure hardware</li>
                  <li><strong className="text-white">No Cloud Storage:</strong> Nothing is stored on our servers or any cloud platform</li>
                </ul>
              </div>
            </motion.div>

            {/* Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">4. Third-Party Services</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>
                  Shabari uses the following third-party services with strict privacy controls:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">VirusTotal API:</strong> Only file hashes (not the actual files) are sent to check for known malware</li>
                  <li><strong className="text-white">Analytics:</strong> We collect only anonymous, aggregated usage statistics to improve the app</li>
                </ul>
                <p className="mt-4">
                  No personal data or identifiable information is ever shared with third parties.
                </p>
              </div>
            </motion.div>

            {/* User Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-white">5. Your Rights</h2>
              </div>
              <div className="pl-9 space-y-4 text-[#C0C0C0]">
                <p>You have complete control over your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All data is stored locally and can be deleted at any time by uninstalling the app</li>
                  <li>You can disable any permission or feature at any time through app settings</li>
                  <li>You have the right to access, modify, or delete any data within the app</li>
                </ul>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-white">6. Changes to This Policy</h2>
              <div className="text-[#C0C0C0]">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date. Your continued use of the app after changes indicates acceptance of the updated policy.
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
              <h2 className="text-white mb-4">7. Contact Us</h2>
              <p className="text-[#C0C0C0] mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Mail className="w-5 h-5" />
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
