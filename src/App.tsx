import React from 'react';
import { Github, Linkedin, Mail, Phone, Database, Cloud, Code2, Server, Shield, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-75 group-hover:opacity-100 blur animate-pulse"></div>
              <img 
                src="https://github.com/samradhshrma/vercelportfolio/blob/main/src/assests/headshot.png" 
                alt="Samradh Sharma - Professional headshot" 
                className="relative w-48 h-48 object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">Samradh Sharma</h1>
              <p className="text-xl text-gray-300 mb-4">Software Engineer Lead</p>
              <p className="text-xl text-blue-300 mb-8">
                Specializing in Backend Development & Cloud Solutions
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:samradhcareer@gmail.com"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/samradhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg opacity-75 group-hover:opacity-100 blur animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                  alt="Data visualization" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                  <h3 className="text-lg font-semibold">Data Pipeline Architecture</h3>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg opacity-75 group-hover:opacity-100 blur animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" 
                  alt="Cloud infrastructure" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                  <h3 className="text-lg font-semibold">Cloud Infrastructure</h3>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg opacity-75 group-hover:opacity-100 blur animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop" 
                  alt="Healthcare technology" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                  <h3 className="text-lg font-semibold">Healthcare Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed">
                As a Software Engineer Lead with 3.5+ years of experience, I specialize in building robust cloud-based solutions
                and efficient data engineering systems. My expertise lies in developing secure, scalable applications
                for the healthcare industry, with a strong focus on data privacy and performance optimization.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
                <Cloud className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold">Cloud Computing</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold">Data Security</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
                <Database className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold">Data Engineering</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold">Performance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Code2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>.NET</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Cloud className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Azure</li>
                <li>Google Cloud Platform</li>
                <li>Snowflake</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Kafka</li>
                <li>StreamSets</li>
                <li>ETL Pipeline Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Experience at Modak Analytics</h2>
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">FHIR API Optimization</h3>
              <p className="text-gray-300 mb-4">Led the development and optimization of FHIR APIs, resulting in 40% improved response times and enhanced data accessibility.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Data Processing</h3>
              <p className="text-gray-300 mb-4">Designed and implemented real-time processing solutions using Kafka, achieving 30% cost reduction in data processing workflows.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Healthcare Data Solutions</h3>
              <p className="text-gray-300 mb-4">Developed secure, scalable solutions for POCA, Bulk Data, and SDOH, improving system performance by 50%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Microsoft Azure Fundamentals (AZ-900)</h3>
              <p className="text-gray-300">Certified in Azure fundamentals, demonstrating comprehensive knowledge of cloud services and their implementation.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Leadership Recognition</h3>
              <p className="text-gray-300">Recognized for exceptional leadership in driving technical innovation and team success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:samradhcareer@gmail.com" className="flex items-center gap-4 bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <Mail className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">samradhcareer@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919131815599" className="flex items-center gap-4 bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <Phone className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+91-9131815599</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/samradhsharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <Linkedin className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-300">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/samradhshrma" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/samradhsharma" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p>© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;