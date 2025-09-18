import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';
import ProfilePolaroid from './ProfilePolaroid';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <Hero3D />
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Polaroid */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <ProfilePolaroid />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Karuna Guglani
              </motion.h1>
              
              <motion.div 
                className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-primary font-medium">Frontend Developer</span> | 
                <span className="text-secondary font-medium"> Software Engineer</span>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                7+ years of experience building scalable applications and crafting exceptional user experiences. Passionate about creating beautiful, functional, and user-centered digital solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
              <Button 
                variant="cyber"
                size="lg" 
                className="text-lg px-8 py-3"
                asChild
              >
                <a href="mailto:karunaguglani15@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="cyber-outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/karuna-guglani-7a8458152" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="cyber-outline" 
                  size="lg"
                  asChild
                >
                  <a href="#projects">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Work
                  </a>
                </Button>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}