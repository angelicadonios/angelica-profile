import React from 'react'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div id="home" className="bg-slate-900">
      <div className="container mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="typed-out text-balance text-5xl tracking-tight text-slate-300 sm:text-7xl">
            hi, angel here.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-slate-400 sm:text-xl/8">
            I'm a software developer from Manila, Philippines. I'm fascinated by scalable, high-impact solutions and have contributed to key feature launches in top-tier platforms used by thousands of users worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="mailto:angelicadonios@gmail.com" className="say-hi flex rounded-md border-2 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="size-6" />
            <span className="px-2">Say hi!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero