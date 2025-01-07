import React from 'react'
import { FolderIcon, CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

const callouts = [
    {
      name: 'TDSB Homework Management Interface',
      description: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://github.com/angelicadonios',
    },
    {
      name: 'Adam A.I.',
      description: 'A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'https://github.com/angelicadonios',
    },
    {
      name: 'Distributed Logging and Monitoring System',
      description: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://github.com/angelicadonios',
    },
    {
      name: 'Distributed Logging and Monitoring System',
      description: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://github.com/angelicadonios',
    },
    {
      name: 'Distributed Logging and Monitoring System',
      description: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://github.com/angelicadonios',
    },
    {
      name: 'Distributed Logging and Monitoring System',
      description: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://github.com/angelicadonios',
    },
  ]

const ProjectCards = () => {
  return (  
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-4">
          
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-4">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                {/* start card */}
                <div className="bg-slate-800 max-w-sm rounded-2xl overflow-hidden shadow-lg h-full py-8 px-6">

                  <div className="card-header flex justify-between pb-4">
                    <div className="folder-icon">
                      <FolderIcon aria-hidden="true" className="size-8" />
                    </div>
                    <span className="external-links flex flex-row-reverse">
                      <a href={callout.href} target="_blank" className="p-1 text-gray-400 hover:text-white">
                        <ArrowUpRightIcon aria-hidden="true" className="size-5" />
                      </a>
                      <a href={callout.href} target="_blank" className="p-1 text-gray-400 hover:text-white">
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
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>

                </div>
                {/* end card */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards