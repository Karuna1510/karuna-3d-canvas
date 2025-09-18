import { motion } from 'framer-motion';

interface ProfilePolaroidProps {
  imageUrl?: string;
  alt?: string;
}

export default function ProfilePolaroid({ 
  imageUrl = "/placeholder.svg", 
  alt = "Profile Picture" 
}: ProfilePolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
      animate={{ opacity: 1, rotate: 2, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Polaroid Frame */}
      <div className="bg-white p-4 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 rounded-sm">
        {/* Image Container */}
        <div className="w-48 h-56 bg-muted rounded-sm overflow-hidden relative">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Overlay for placeholder styling */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
        </div>
        
        {/* Polaroid Caption */}
        <div className="mt-4 text-center">
          <p className="text-foreground font-handwriting text-lg">
            Frontend Developer
          </p>
        </div>
      </div>
      
      {/* Decorative tape */}
      <div className="absolute -top-2 left-8 w-16 h-8 bg-yellow-200/80 transform -rotate-12 shadow-sm rounded-sm opacity-70" />
      <div className="absolute -top-2 right-8 w-16 h-8 bg-yellow-200/80 transform rotate-12 shadow-sm rounded-sm opacity-70" />
    </motion.div>
  );
}