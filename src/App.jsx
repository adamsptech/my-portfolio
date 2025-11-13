import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Download, Menu, X, Code, Database, Smartphone, Globe } from 'lucide-react';
import profilePic from './assets/correctprofile.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Adam Syahputra",
    title: "Software Engineering Student & Android Developer",
    email: "addm097@gmail.com",
    phone: "+6282282824797",
    location: "Karawang, Indonesia",
    linkedin: "linkedin.com/in/adamsputra/",
    github: "github.com/adamsptech"
  };

  const skills = {
    technical: [
      { name: "Kotlin", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "Android Development", level: 95 },
      { name: "RESTful APIs", level: 85 },
      { name: "Clean Architecture", level: 80 },
      { name: "MVVM Pattern", level: 85 }
    ],
    soft: [
      "Business Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptation",
      "Collaboration"
    ]
  };

  const projects = [
    {
      title: "Android Capstone Project",
      description: "Developed a mobile application as part of Bangkit Academy final project, integrating RESTful APIs and implementing Clean Architecture principles.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room"],
      year: "2024"
    },
    {
      title: "Machine Learning Application",
      description: "Created an Android application implementing machine learning models for mobile devices, focusing on performance and user experience.",
      technologies: ["Python", "TensorFlow", "Android SDK"],
      year: "2024"
    }
  ];

  const certificates = [
    "English for Business Communication",
    "Intermediate Android Application Development",
    "Machine Learning Application for Android",
    "SOLID Programming Principles",
    "Git Basics with GitHub"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/*<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>*/}
              <span className="font-bold text-gray-900">Adam S.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'certificates'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'skills', 'projects', 'certificates'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 capitalize font-medium w-full text-left transition-colors ${
                    activeSection === item 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden mx-auto mb-6 relative">
              <img 
                src={profilePic}
                alt="Adam Syahputra" 
                className="w-full h-full object-cover object-top scale-125"
              /></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a passionate software engineering student with a focus on Android development. Currently pursuing my Bachelor of Informatics at Universitas Sanata Dharma, I have gained extensive experience in modern Android application development through the prestigious Bangkit Academy program.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My expertise lies in Kotlin, Jetpack Compose, and implementing Clean Architecture principles with MVVM design patterns. I'm passionate about creating scalable, maintainable applications and have experience collaborating in cross-functional teams using Git and GitHub.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With strong analytical and collaboration skills developed through my role as a Teaching Assistant, I excel at solving complex coding challenges and helping others learn and grow in the field of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-white" size={18} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                {/*<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>*/}
                <img 
                src={profilePic} 
                alt="Adam" 
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <span className="font-bold text-xl">Adam Syahputra</span>
              </div>
              <p className="text-gray-400">Software Engineering Student & Android Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adam Syahputra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
