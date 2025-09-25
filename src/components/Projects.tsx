import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Zap, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Marketing CoPilot SDK',
    description: 'Led development of a lightweight, AI-powered Web SDK enabling seamless integration across platforms. Features chat-driven generation of graphs, reports, and pricing visualizations, built with Rollup (UMD) for compatibility, Shadow DOM and CSS Modules for isolated styling, optimized for performance, and deployed via AWS S3 and CloudFront.',
    tech: ['TypeScript', 'Rollup', 'Shadow DOM', 'AI Integration', 'SDK Development', 'AWS', 'CSS Modules'],
    highlights: ['Lightweight footprint', 'AI-powered analytics', 'Fast load times'],
    icon: Zap,
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'Copilot Customer Dashboard',
    description: 'Developed a comprehensive customer analytics dashboard with React and TypeScript. Enabled users to customize SDKs, manage campaigns, track leads, and visualize data with AI-powered insights. Integrated workflows across email, LinkedIn, and calls, and deployed on Azure with CI/CD pipelines.',
    tech: ['React', 'TypeScript', 'React Flow', 'Data Visualization', 'API Integration', 'Azure'],
    highlights: ['Real-time insights', 'Interactive dashboards', 'AI recommendations'],
    icon: Database,
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'B2C SaaS Chatbot',
    description: 'Developed a real-time, AI-powered B2C chatbot enabling personalized user engagement and support. Implemented WebSocket-based streaming for instant responses, interactive dashboards for monitoring conversations, and AI-generated graphs, reports, and pricing cards. Built with React, Node.js, and Python, integrating NLP, real-time analytics, and cloud deployment for scalability.',
    tech: ['React', 'Node.js', 'Python', 'WebSocket', 'AI/NLP', 'Data Visualization', 'Cloud Deployment', 'Real-time Analytics'],
    highlights: ['Real-time engagement', 'AI-powered insights', 'Interactive dashboards', 'Scalable architecture'],
    icon: Cloud,
    gradient: 'from-accent to-primary'
  },
  {
    title: 'Wyzard.ai SaaS Tool',
    description: 'Built a procurement and subscription management platform using React and Next.js, enabling enterprise clients to manage licenses, subscriptions, contracts, and payments efficiently. Integrated interactive data visualizations and a secure document vault.',
    tech: ['React', 'Next.js', 'TypeScript', 'SaaS Architecture', 'Enterprise'],
    highlights: ['Enterprise-grade', 'Interactive visualizations', 'Secure workflows'],
    icon: Database,
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'Generative AI Solutions',
    description: 'Implemented AI/ML solutions including enterprise chatbots, synthetic data generation, and compliance tools. Full-stack development with React frontend and Python backend, along with reusable component library creation for scalable deployment.',
    tech: ['React', 'Python', 'AI/ML', 'Full-Stack', 'Component Library'],
    highlights: ['AI/ML integration', 'Reusable components', 'Enterprise solutions'],
    icon: Cloud,
    gradient: 'from-accent to-primary'
  },
  {
    title: "People's First App (Reliance JIO)",
    description: 'Developed an enterprise HR and payroll platform serving 200,000+ users. Built with Angular and Node.js, implemented shift planning solutions, attendance, payroll, and HR management, along with a universal UI component library and process automation.',
    tech: ['Angular', 'Node.js', 'Enterprise Scale', 'HR Solutions', 'Automation'],
    highlights: ['200K+ users', 'High performance', 'Workflow optimization'],
    icon: Users,
    gradient: 'from-primary to-accent'
  },
  {
    title: 'Vendor Hiring Solutions',
    description: 'Created an end-to-end automation platform for hiring, including reusable UI components and workflow optimizations. Streamlined HR processes, reducing recruiter workload by 75%, using React and Node.js for enterprise applications.',
    tech: ['React', 'Node.js', 'Component Library', 'Automation', 'UI/UX'],
    highlights: ['Process automation', 'Reusable components', 'Workflow optimization'],
    icon: Zap,
    gradient: 'from-secondary to-primary'
  },
 
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
          A showcase of projects that blend innovation, design, and technical excellence across web, SaaS, and AI domains.
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