import Achievements from '@/components/Achievement'
import Education from '@/components/Education'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import WorkExperice from '@/components/WorkExperice'
import React from 'react'

const page = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-5 min-h-screen">
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Work section */}
      <WorkExperice />

      {/* Projects */}

      {/* Skills */}
      <Skills />

      {/* Achievements */}
      <Achievements />

      {/* Education */}
      <Education />
    </main>

  )
}

export default page