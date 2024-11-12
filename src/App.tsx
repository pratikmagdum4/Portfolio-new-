import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';


function App() {

  return (
    <div className="min-h-screen bg-gray-50">


      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hi, I'm <span className="text-indigo-600">Pratik Magdum</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
              Full Stack Developer specializing in React.js & MERN Stack
            </p>
            <div className="flex justify-center gap-4 mb-12 animate-fade-in">
              <a href="https://github.com/pratikmagdum4" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/pratik-magdum-8402ab228/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:pratiksunilmagdum2021@email.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+919022533809" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <div className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software developer currently pursuing my B.Tech in Computer Science and Artificial Intelligence. 
              With a strong foundation in full-stack development and competitive programming, I focus on creating efficient, 
              scalable solutions that solve real-world problems. My expertise spans across modern web technologies, 
              with a particular emphasis on React.js and the MERN stack.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Frontend"
              skills={['React.js', 'Redux', 'Tailwind CSS', 'JavaScript', 'TypeScript']}
            />
            <SkillCard 
              title="Backend"
              skills={['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs']}
            />
            <SkillCard 
              title="Tools & Platforms"
              skills={['Git', 'AWS', 'Vercel', 'Docker', 'Render']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Amber CMS"
              description="Content Management System with advanced features including real-time collaboration"
              techStack={['React.js', 'Node.js', 'MongoDB', 'Socket.io']}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubLink="https://github.com/pratikmagdum/amber-cms"
            />
            <ProjectCard 
              title="Interview Portal"
              description="Comprehensive platform for managing technical interviews and assessments"
              techStack={['React.js', 'Express.js', 'MongoDB', 'Redux']}
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubLink="https://interview-portal-dkte.vercel.app"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard 
              company="Coding Bits"
              position="Full Stack Developer Intern"
              duration="Jun 2023 - Aug 2023"
              description="Developed E-learning platform features and implemented responsive designs"
            />
            <ExperienceCard 
              company="INFOTRIXS"
              position="Software Developer Intern"
              duration="Jan 2023 - Mar 2023"
              description="Built job portal features and improved application performance"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Pratik Magdum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;