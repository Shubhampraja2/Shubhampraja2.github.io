import { motion } from 'motion/react';
import { 
  Shield, 
  Globe, 
  Lock, 
  QrCode, 
  ScanLine, 
  Vault,
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Brain,
  Eye,
  FileCheck,
  Link2,
  Smartphone,
  AlertTriangle,
  Ban,
  Radio,
  MapPin,
  Activity
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const detailedFeatures = [
  {
    icon: Shield,
    title: 'SMS Fraud Detection',
    color: '#007BFF',
    shortDesc: 'Instantly flags spam or scam messages using on-device AI.',
    longDesc: 'Our advanced AI engine analyzes every SMS you receive in real-time, detecting phishing attempts, fake OTPs, and fraudulent messages before they can harm you.',
    features: [
      'Real-time SMS scanning with zero latency',
      'Detects phishing, fake OTPs, and scam patterns',
      'Blocks fraudulent messages automatically',
      'Machine learning models trained on millions of fraud patterns',
      'Works completely offline - no data sent to servers',
      'Instant notifications for suspicious messages'
    ],
    techStack: ['On-device ML', 'Pattern Recognition', 'NLP'],
  },
  {
    icon: Radio,
    title: 'Secure VPN',
    color: '#00C9A7',
    shortDesc: 'Military-grade encryption for your internet connection with no-logs policy.',
    longDesc: 'Protect your online privacy with our lightning-fast VPN that encrypts your internet traffic, hides your IP address, and keeps you anonymous online.',
    features: [
      'Military-grade AES-256 encryption',
      'Strict no-logs policy - we never track your activity',
      'High-speed servers across multiple countries',
      'Automatic kill switch protects you if VPN drops',
      'Split tunneling for selective app protection',
      'One-tap connection - instant protection',
      'Bypass geo-restrictions and censorship',
      'Unlimited bandwidth - no data caps'
    ],
    techStack: ['OpenVPN', 'WireGuard', 'IKEv2', 'AES-256'],
  },
  {
    icon: Ban,
    title: 'Advanced Ad Blocker',
    color: '#FF6B6B',
    shortDesc: 'Block intrusive ads, trackers, and malicious scripts across all apps.',
    longDesc: 'Experience a cleaner, faster, and safer internet. Our intelligent ad blocker eliminates annoying ads, dangerous pop-ups, and invasive trackers system-wide.',
    features: [
      'Blocks ads across all apps and browsers',
      'Removes YouTube ads and video interruptions',
      'Eliminates pop-ups and malicious redirects',
      'Blocks trackers and prevents data collection',
      'Speeds up page loading by up to 50%',
      'Saves mobile data and battery life',
      'Custom filters and whitelisting',
      'Automatic filter list updates'
    ],
    techStack: ['DNS Filtering', 'Content Blocking', 'Regex Patterns', 'EasyList'],
  },
  {
    icon: Globe,
    title: 'Secure Browser',
    color: '#9B59B6',
    shortDesc: 'Browse freely with phishing protection and built-in security.',
    longDesc: 'Experience safe browsing with our intelligent browser that protects you from malicious websites, phishing attacks, and intrusive ads.',
    features: [
      'Real-time phishing site detection',
      'Automatic ad and tracker blocking',
      'HTTPS enforcement for secure connections',
      'Safe browsing warnings before you click',
      'Privacy-focused - no browsing history stored',
      'Fast and lightweight performance'
    ],
    techStack: ['Safe Browsing API', 'HTTPS Everywhere', 'Ad Blocker'],
  },
  {
    icon: Lock,
    title: 'UPI & Payment Protection',
    color: '#007BFF',
    shortDesc: 'Real-time monitoring of UPI transactions to prevent fraud.',
    longDesc: 'Advanced UPI transaction monitoring that alerts you to suspicious payment requests, fake QR codes, and fraudulent transaction patterns.',
    features: [
      'Real-time UPI transaction monitoring',
      'Detects fraudulent payment requests',
      'Validates beneficiary information',
      'Alerts for unusual transaction patterns',
      'QR code verification before payment',
      'Double-check prompts for large amounts'
    ],
    techStack: ['Payment Gateway Integration', 'Fraud Detection AI', 'Risk Scoring'],
  },
  {
    icon: QrCode,
    title: 'Secure QR Scanner',
    color: '#D4AF37',
    shortDesc: 'Detects and blocks malicious QR codes before you scan.',
    longDesc: 'Scan QR codes safely with our intelligent scanner that verifies URLs, detects malicious links, and prevents QR code-based fraud.',
    features: [
      'Instant QR code analysis and verification',
      'Malicious URL detection before opening',
      'Fake payment QR code identification',
      'History of scanned QR codes',
      'Safe preview of QR content',
      'Warning alerts for suspicious codes'
    ],
    techStack: ['URL Analysis', 'VirusTotal Integration', 'Pattern Matching'],
  },
  {
    icon: ScanLine,
    title: 'File & Link Scanner',
    color: '#00C9A7',
    shortDesc: 'Scans attachments, downloads, and links locally for malware.',
    longDesc: 'Comprehensive file and link scanning powered by AI and VirusTotal API to detect malware, trojans, and malicious content before they harm your device.',
    features: [
      'Real-time file scanning on download',
      'APK security analysis before installation',
      'Link verification for emails and messages',
      'YARA engine for advanced threat detection',
      'VirusTotal API integration for comprehensive checks',
      'Quarantine suspicious files automatically'
    ],
    techStack: ['VirusTotal API', 'YARA Engine', 'Heuristic Analysis'],
  },
  {
    icon: Vault,
    title: 'Secure Vault',
    color: '#9B59B6',
    shortDesc: 'Protect passwords, notes, and confidential files with AES encryption.',
    longDesc: 'Military-grade encrypted vault to securely store your passwords, sensitive documents, photos, and confidential information with biometric access.',
    features: [
      'AES-256 encryption for maximum security',
      'Biometric authentication (fingerprint/face)',
      'Secure password manager',
      'Encrypted file storage',
      'Private photo and video vault',
      'Auto-lock with timeout protection'
    ],
    techStack: ['AES-256 Encryption', 'Biometric Auth', 'Secure Enclave'],
  },
];

const coreTechnology = [
  {
    icon: Brain,
    title: 'On-Device AI Engine',
    description: 'All AI processing happens locally on your device. Your data never leaves your phone.',
    color: '#D4AF37',
  },
  {
    icon: Database,
    title: 'Zero Data Collection',
    description: 'We don\'t collect, store, or transmit your personal data. Complete privacy guaranteed.',
    color: '#00C9A7',
  },
  {
    icon: Eye,
    title: 'Real-Time Protection',
    description: 'Continuous monitoring and instant threat detection with zero lag.',
    color: '#007BFF',
  },
  {
    icon: FileCheck,
    title: 'Hybrid Detection',
    description: 'Combines AI/ML with traditional rule-based detection for maximum accuracy.',
    color: '#9B59B6',
  },
];

export function FeaturesPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#121823]">
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
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
              Complete Protection Suite
            </Badge>
            
            <h1 className="text-white mb-6">
              Comprehensive Features for Complete Digital Security
            </h1>
            
            <p className="text-[#C0C0C0] text-xl mb-8 max-w-3xl mx-auto">
              Every feature in Shabari is designed with one goal: protecting you from digital fraud while respecting your privacy. Explore our advanced security capabilities powered by on-device AI.
            </p>

            <Button
              onClick={onNavigateHome}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-20 bg-[#121823]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Powered by Advanced Technology</h2>
            <p className="text-[#C0C0C0] max-w-2xl mx-auto">
              Built on cutting-edge AI and security technologies, processed entirely on your device
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreTechnology.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center group hover:border-white/20 transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5"
                  style={{ boxShadow: `0 0 20px ${tech.color}30` }}
                >
                  <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
                </div>
                <h3 className="text-white mb-2">{tech.title}</h3>
                <p className="text-[#C0C0C0] text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-[#0A0F1C]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content - alternating sides */}
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5"
                      style={{ boxShadow: `0 0 30px ${feature.color}30` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h2 className="text-white">{feature.title}</h2>
                  </div>

                  <p className="text-[#C0C0C0] text-lg mb-6">
                    {feature.longDesc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00C9A7] flex-shrink-0 mt-0.5" />
                        <span className="text-[#C0C0C0]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {feature.techStack.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="border-white/20 text-[#C0C0C0]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Visual - alternating sides */}
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative">
                    {/* Feature card mockup */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden">
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 opacity-30 blur-3xl"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${feature.color}, transparent 70%)`,
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFD93D]" />
                            <div className="w-3 h-3 rounded-full bg-[#00C9A7]" />
                          </div>
                          <Badge className="bg-[#00C9A7]/20 text-[#00C9A7] border-[#00C9A7]/30">
                            Active
                          </Badge>
                        </div>

                        {/* Feature icon display */}
                        <div className="mb-8 flex justify-center">
                          <div 
                            className="w-32 h-32 rounded-2xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                            style={{ boxShadow: `0 0 60px ${feature.color}40` }}
                          >
                            <feature.icon className="w-16 h-16" style={{ color: feature.color }} />
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 rounded-lg bg-white/5">
                            <div className="text-2xl text-white mb-1">100%</div>
                            <div className="text-xs text-[#C0C0C0]">Privacy</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-white/5">
                            <div className="text-2xl text-white mb-1">0ms</div>
                            <div className="text-xs text-[#C0C0C0]">Latency</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-white/5">
                            <div className="text-2xl text-white mb-1">24/7</div>
                            <div className="text-xs text-[#C0C0C0]">Active</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
                      style={{ background: feature.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121823]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#007BFF]/10 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-white mb-4">
                Ready to Protect Yourself?
              </h2>
              <p className="text-[#C0C0C0] mb-8 max-w-2xl mx-auto">
                Download Shabari now and experience complete digital security with privacy-first protection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white px-8 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  Download Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onNavigateHome}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
