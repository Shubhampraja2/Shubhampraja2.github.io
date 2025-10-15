import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface BetaWaitlistProps {
  trigger?: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  fullWidth?: boolean;
}

export function BetaWaitlist({ 
  trigger, 
  variant = 'default', 
  size = 'default',
  className = '',
  fullWidth = false
}: BetaWaitlistProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store email in localStorage (in production, send to backend)
      const waitlist = JSON.parse(localStorage.getItem('betaWaitlist') || '[]');
      waitlist.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('betaWaitlist', JSON.stringify(waitlist));

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'lg':
        return 'px-10 py-7 text-base';
      case 'icon':
        return 'p-2';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-[#D4AF37] bg-transparent text-white hover:bg-[#D4AF37] hover:text-white';
      case 'ghost':
        return 'bg-transparent text-[#C0C0C0] hover:text-white hover:bg-white/10';
      default:
        return 'bg-[#D4AF37] hover:bg-[#C19B2F] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger ? (
        <DialogTrigger asChild>
          <div className="inline-block">
            {trigger}
          </div>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <button
            className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${getSizeClasses()} ${getVariantClasses()} ${className} ${fullWidth ? 'w-full' : ''}`}
          >
            Join Beta Program
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md bg-[#0A0F1C] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our Beta Program
          </DialogTitle>
          <DialogDescription className="text-[#C0C0C0]">
            Be among the first to experience Shabari's AI-powered security. Enter your email to join the waitlist.
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C0C0C0]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-[#C0C0C0]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  disabled={isSubmitting}
                  required
                />
              </div>
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] hover:bg-[#C19B2F] text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </Button>

              <div className="flex items-center gap-2 text-xs text-[#C0C0C0]">
                <div className="w-1.5 h-1.5 bg-[#00C9A7] rounded-full" />
                <span>We respect your privacy. No spam, ever.</span>
              </div>
            </div>

            {/* Features list */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <p className="text-sm text-[#C0C0C0] mb-3">Beta members get:</p>
              {[
                'Early access to all features',
                'Priority customer support',
                'Exclusive updates and insights',
                'Lifetime discount on premium'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C9A7] flex-shrink-0" />
                  <span className="text-sm text-[#C0C0C0]">{benefit}</span>
                </div>
              ))}
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-16 h-16 bg-[#00C9A7] rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl mb-2">You're on the list!</h3>
              <p className="text-[#C0C0C0]">
                We'll notify you at <span className="text-[#D4AF37]">{email}</span> when Shabari launches.
              </p>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
