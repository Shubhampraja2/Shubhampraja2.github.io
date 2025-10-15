import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import scamSmsImage from 'figma:asset/55328390aa2a5b9327acf5f199ce717090771eec.png';
import dashboardImage from 'figma:asset/4a774eea6389c471a22bd7a97db33f5681f0038f.png';
import fileScannerImage from 'figma:asset/a04436da50eda9f463e862964483cd0bd2cb217e.png';

const appScreens = [
  {
    title: 'Scam SMS Detection',
    description: 'AI-powered phishing alert detection',
    image: scamSmsImage,
  },
  {
    title: 'Security Dashboard',
    description: 'Real-time threat monitoring & analytics',
    image: dashboardImage,
  },
  {
    title: 'File & Link Scanner',
    description: 'Malicious file detection & protection',
    image: fileScannerImage,
  },
];

export function AppPreview() {
  return (
    <section className="relative py-24 bg-[#121823] overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#007BFF] rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-400, -350, -400],
          y: [-400, -450, -400],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
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
            Experience Shabari in Action
          </h2>
          <p className="text-[#C0C0C0]">
            A glimpse into the powerful features that protect you 24/7
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {appScreens.map((screen, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <motion.div
                      whileHover={{ y: -10, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Phone mockup frame */}
                      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-3 border border-white/20 backdrop-blur-sm">
                        {/* Phone screen */}
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                          <img
                            src={screen.image}
                            alt={screen.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Screen info on hover */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="mb-2">{screen.title}</h4>
                            <p className="text-sm text-[#C0C0C0]">{screen.description}</p>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#007BFF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                      </div>

                      {/* Screen label */}
                      <div className="mt-4 text-center">
                        <h4 className="text-white mb-1">{screen.title}</h4>
                        <p className="text-[#C0C0C0] text-sm">{screen.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {['Live Protection', 'Zero Lag', 'Minimal Battery'].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <div className="w-3 h-3 bg-[#00C9A7] rounded-full mx-auto mb-3 animate-pulse" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
