import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="bg-slate-900">
      <div className="container mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="section-title">
            Hello, I'm Angel.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-slate-400 sm:text-xl/8">
            I'm a software developer from Manila, Philippines. I'm passionate about building scalable features that bring value to users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero