import React from 'react'
import ProjectCards from './ProjectCards';
import ProjectLatest from './ProjectLatest';

const Projects = () => {
  return (
    <div id="projects" className="bg-slate-900">
      <div className="container mx-auto max-w-screen-lg min-h-full pt-28">

        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>

        {/* latest project */}
        <ProjectLatest />
        
        {/* cards */}
        <ProjectCards />
        

      </div>
    </div>
  )
}

export default Projects