import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Instagram, Calendar, ExternalLink, Download, Menu, X, Code, Database, Smartphone, Globe } from 'lucide-react';
import profilePic from './assets/correctprofile.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Adam Syahputra",
    title: "IT Software Support at PT. Giesecke & Devrient Indonesia",
    email: "addm097@gmail.com",
    phone: "+6282282824797",
    location: "Karawang, Indonesia"
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
      title: "Android Capstone Project (SajiinDong)",
      description: "Developed a mobile application as part of Bangkit Academy final project, integrating RESTful APIs and implementing Clean Architecture principles.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room"],
      year: "2024",
      link: "https://github.com/adamsptech/SajiinDong-App" // Link ke Repo GitHub Anda
    },
    {
      title: "Machine Learning Application",
      description: "Created an Android application implementing machine learning models for mobile devices, focusing on performance and user experience.",
      technologies: ["Python", "TensorFlow", "Android SDK"],
      year: "2024",
      link: "#" // Ganti dengan link lain jika ada, atau biarkan #
    }
  ];

  const certificates = [
    { 
      title: "English for Business Communication", 
      issuer: "The British Institute", 
      date: "2024",
      link: "" // Ganti dengan link sertifikat asli
    },
    { 
      title: "Intermediate Android Application Development", 
      issuer: "Dicoding Indonesia", 
      date: "2024",
      link: "https://www.dicoding.com/certificates/72ZDV5MO9ZYW" 
    },
    { 
      title: "Machine Learning Application for Android", 
      issuer: "Dicoding Indonesia", 
      date: "2024",
      link: "https://www.dicoding.com/certificates/RVZKR13NMPD5" 
    },
    { 
      title: "SOLID Programming Principles", 
      issuer: "Dicoding Indonesia", 
      date: "2024",
      link: "https://www.dicoding.com/certificates/98XWLWQY9ZM3" 
    },
    { 
      title: "Git Basics with GitHub", 
      issuer: "Dicoding Indonesia", 
      date: "2024",
      link: "https://www.dicoding.com/certificates/98XW2QGOJPM3" 
    },

    { 
      title: "SOLID Programming Principles", 
      issuer: "Dicoding Indonesia", 
      date: "2024",
      link: "https://www.dicoding.com/certificates/98XWLWQY9ZM3" 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'certificates'];
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
              {['about', 'projects', 'skills','certificates'].map((item) => (
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
                <span>Contact</span>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/adamsputra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#0077b5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#005582] transition-colors"
>
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              {/* Tombol GitHub */}
              <a
                href="https://github.com/adamsptech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@kaelreceh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
              {/* Icon TikTok (SVG) */}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span>TikTok</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/admsyah_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                <Instagram size={20} />
                <span>Instagram</span>
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
              I am an Informatics graduate from <strong>Sanata Dharma University</strong>, currently working as an <strong>IT Software Support</strong> at <strong>PT. Giesecke & Devrient Indonesia</strong>. My professional journey combines a strong foundation in software engineering with practical expertise in technical operations and system troubleshooting.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond IT Support, I am deeply passionate about <strong>Android Development</strong>. As a graduate of the <strong>Bangkit Academy</strong> Mobile cohort, I have mastered modern app development using <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, and Clean Architecture principles (MVVM).
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My background includes experience as a <strong>Machine Learning Teaching Assistant</strong> and Conference Technical Operator. These roles honed my analytical thinking, adaptability, and ability to solve complex technical challenges in fast-paced environments.
            </p>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    {project.title}
                    {/* Icon panah kecil penanda link */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </h3>
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
              </a>
            ))}
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

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              // Cek apakah sertifikat ini punya link?
              const hasLink = cert.link && cert.link.length > 0 && cert.link !== "#";
              
              // Tentukan pembungkus: jika ada link pakai 'a', jika tidak pakai 'div'
              const Wrapper = hasLink ? 'a' : 'div';
              
              return (
                <Wrapper
                  key={index}
                  href={hasLink ? cert.link : undefined}
                  target={hasLink ? "_blank" : undefined}
                  rel={hasLink ? "noopener noreferrer" : undefined}
                  className={`group bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 
                    ${hasLink 
                      ? 'cursor-pointer hover:shadow-md hover:-translate-y-1' 
                      : 'cursor-default' 
                    }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon Box */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300
                      ${hasLink 
                        ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' 
                        : 'bg-gray-100 text-gray-500'
                      }`}>
                      
                      {/* Ganti Icon sesuai kondisi */}
                      {hasLink ? (
                        <ExternalLink size={20} />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      )}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className={`font-semibold transition-colors ${hasLink ? 'text-gray-900 group-hover:text-blue-600' : 'text-gray-900'}`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
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
              <p className="text-gray-400">IT Software Support at PT. Giesecke & Devrient Indonesia</p>
            </div>
            <div className="flex space-x-6">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/adamsputra/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={20} />
            </a>

            {/* GitHub */}
            <a href="https://github.com/adamsptech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@kaelreceh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/admsyah_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>

            
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Adam Syahputra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
