import React from 'react'
import { FolderIcon, CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

const callouts = [
    {
      name: 'MINECRAFT Memory Game',
      description: 'Challenge your memory with this custom Minecraft minigame where players flip tiles to find matching pairs.',
      href1: 'https://minecraft-game-memory.vercel.app/',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'vite',
      hash3: 'CSS',
    },
    {
      name: 'GetBook',
      description: 'An e-Commerce website that has books available to order via two payment options.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'laravel',
      hash2: 'heroku',
      hash3: 'PHP',
    },
    {
      name: 'The Collab',
      description: 'A co-working space inspired website where you can choose a type of room and be able to book it.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'node',
      hash3: 'mongoDB',
    },
  ]

const ProjectCards = () => {
  return (  
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-4">
          <div className="grid grid-flow-row auto-rows-fr gap-4	grid-cols-3">
            {callouts.map((callout) => (
              <div key={callout.name} className="proj-name group relative">
                {/* start card */}
                <div className="bg-slate-800 max-w-sm rounded-2xl overflow-hidden shadow-lg h-full py-8 px-6">

                  <div className="card-header flex justify-between pb-4">
                    <div className="folder-icon">
                      <FolderIcon aria-hidden="true" className="fold-icon size-8" />
                    </div>
                    <span className="external-links flex flex-row-reverse">
                      <a href={callout.href1} target="_blank" className="p-1 text-gray-400 hover:text-white">
                        <ArrowUpRightIcon aria-hidden="true" className="size-5" />
                      </a>
                      <a href={callout.href2} target="_blank" className="p-1 text-gray-400 hover:text-white">
                        <CodeBracketIcon aria-hidden="true" className="size-5" />
                      </a>
                    </span>
                  </div>

                  <div className="card-content">
                    <div className="font-bold text-xl mb-3">{callout.name}</div>
                    <p className="text-gray-700 text-base pb-10">
                      {callout.description}
                    </p>
                  </div>

                  <div className="card-tech">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{callout.hash1}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{callout.hash2}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{callout.hash3}</span>
                  </div>

                </div>
                {/* end card */}
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default ProjectCards