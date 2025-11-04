import Achievements from '@/components/Achievement'
import Education from '@/components/Education'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import WorkExperice from '@/components/WorkExperice'
import React from 'react'
import ProjectsSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-5 min-h-screen">
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Work section */}
      <WorkExperice />

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <Skills />

      {/* Achievements */}
      <Achievements />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>

  )
}

export default page