import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'RoundCircle Technologies',
    position: 'Senior Frontend Developer',
    period: '2024 – Present',
    location: 'Remote',
    projects: [
      'Marketing CoPilot SDK - Lightweight SDK with Rollup, Shadow DOM integration',
      'Customer dashboards with interactive data visualizations', 
      'SaaS tool Wyzard.ai for procurement + subscription management',
      'AI-powered dashboards with React + Next.js frontend'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Rollup', 'Shadow DOM', 'Data Visualization']
  },
  {
    company: 'EXL Service',
    position: 'Full Stack Developer',
    period: '2023 – 2024',
    location: 'Noida, India',
    projects: [
      'Generative AI solutions for enterprise clients',
      'Full-stack applications with React & Python backend',
      'Reusable UI component library development',
      'Performance optimization and code quality initiatives'
    ],
    technologies: ['React', 'Python', 'AI/ML', 'Component Libraries', 'Performance Optimization']
  },
  {
    company: 'JIO Platforms Limited',
    position: 'Software Engineer',
    period: '2019 – 2023',
    location: 'Mumbai, India',
    projects: [
      "People's First App - HR/Payroll application serving 200,000+ users",
      'Universal UI component repository for enterprise applications',
      'End-to-end vendor hiring application with automated workflows',
      'HR solutions with complex business logic and integrations'
    ],
    technologies: ['Angular', 'Node.js', 'TypeScript', 'Enterprise Architecture', 'UI Libraries']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-cyber-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through challenging projects and innovative solutions across different domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background cyber-glow"></div>
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="cyber-card p-6 hover:cyber-glow-secondary">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.position}</h3>
                        <div className="flex items-center text-secondary font-medium mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">Key Projects & Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.projects.map((project, projIndex) => (
                          <li key={projIndex} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <h5 className="text-sm font-semibold text-primary mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs bg-muted rounded-full border border-primary/20 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}