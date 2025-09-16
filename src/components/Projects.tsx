import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Zap, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Marketing CoPilot SDK',
    description: 'Lightweight SDK built with Rollup and Shadow DOM integration, enabling AI-powered marketing dashboards with seamless embedding capabilities.',
    tech: ['TypeScript', 'Rollup', 'Shadow DOM', 'AI Integration', 'SDK Development'],
    highlights: ['Lightweight footprint', 'Easy integration', 'AI-powered analytics'],
    icon: Zap,
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'Wyzard.ai SaaS Tool',
    description: 'Comprehensive procurement and subscription management platform with React + Next.js frontend, serving enterprise clients with complex workflows.',
    tech: ['React', 'Next.js', 'TypeScript', 'SaaS Architecture', 'Enterprise'],
    highlights: ['Enterprise-grade', 'Complex workflows', 'Scalable architecture'],
    icon: Database,
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'Generative AI Platform',
    description: 'Enterprise chatbot and synthetic data solutions with React frontend and Python backend, enabling AI-powered business intelligence.',
    tech: ['React', 'Python', 'AI/ML', 'Enterprise', 'Full-Stack'],
    highlights: ['AI/ML integration', 'Enterprise solutions', 'Data intelligence'],
    icon: Cloud,
    gradient: 'from-accent to-primary'
  },
  {
    title: "People's First App (Reliance JIO)",
    description: 'HR and Payroll application built with Angular and Node.js, successfully serving over 200,000+ users with complex business logic.',
    tech: ['Angular', 'Node.js', 'Enterprise Scale', 'HR Solutions', 'Performance'],
    highlights: ['200K+ users', 'Enterprise scale', 'High performance'],
    icon: Users,
    gradient: 'from-primary to-accent'
  },
  {
    title: 'HR & Vendor Hiring Solutions',
    description: 'End-to-end automation platform with universal UI component repository, streamlining hiring processes with modern development practices.',
    tech: ['Component Library', 'Automation', 'UI/UX', 'Workflow Management'],
    highlights: ['Process automation', 'Reusable components', 'Workflow optimization'],
    icon: Zap,
    gradient: 'from-secondary to-primary'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="cyber-card p-6 h-full flex flex-col hover:cyber-glow-secondary">
                {/* Project Icon */}
                <div className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
                  bg-gradient-to-r ${project.gradient}
                `}>
                  <project.icon className="h-7 w-7 text-white" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-muted rounded border border-border text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="cyber-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and challenging projects. 
              Let's create something amazing together!
            </p>
            <Button 
              variant="cyber"
              size="lg"
              asChild
            >
              <a href="mailto:karunaguglani15@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}