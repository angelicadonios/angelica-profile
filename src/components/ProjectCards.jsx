import React from 'react'
import { ArrowUpRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const callouts = [
    {
      name: 'Memory Game',
      description: 'Challenge your memory with this custom Minecraft minigame where players flip tiles to find matching pairs.',
      href1: 'https://minecraft-game-memory.vercel.app/',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'vite',
      hash3: 'CSS',
      image: 'src/assets/images/01.jpg',
    },
    {
      name: 'Get Book',
      description: 'An e-Commerce website that has books available to order via two payment options.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'laravel',
      hash2: 'heroku',
      hash3: 'PHP',
      image: 'src/assets/images/02.jpg',
    },
    {
      name: 'The Collab',
      description: 'A co-working space inspired website where you can choose a type of room and be able to book it.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'node',
      hash3: 'mongoDB',
      image: 'src/assets/images/03.jpg',
    },
    {
      name: '*proj4*',
      description: 'Challenge your memory with this custom Minecraft minigame where players flip tiles to find matching pairs.',
      href1: 'https://minecraft-game-memory.vercel.app/',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'vite',
      hash3: 'CSS',
      image: 'src/assets/images/04.jpg',
    },
    {
      name: '*proj5*',
      description: 'An e-Commerce website that has books available to order via two payment options.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'laravel',
      hash2: 'heroku',
      hash3: 'PHP',
      image: 'src/assets/images/05.jpg',
    },
    {
      name: '*proj6*',
      description: 'A co-working space inspired website where you can choose a type of room and be able to book it.',
      href1: 'https://github.com/angelicadonios',
      href2: 'https://github.com/angelicadonios',
      hash1: 'react',
      hash2: 'node',
      hash3: 'mongoDB',
      image: 'src/assets/images/06.jpg',
    },
  ]

const ProjectCards = () => {
  return (  
      <div className='card-container'>
        <div className='cards'>
          {callouts.map((callout) => (
          <div key={callout.name} className='card'>
            <div className='card-image'>
              <img className='' src={callout.image} />
            </div>
            <div className='card-content justify-between text-stone-50'>
              <h1 className='pl-2'>{callout.name}</h1>
              <span className="flex flex-row-reverse">
                <a href={callout.href1} target="_blank" className="p-1 text-stone-50 hover:text-pink-200">
                  <ArrowUpRightIcon aria-hidden="true" className="size-5" />
                </a>
                <a href={callout.href2} target="_blank" className="p-1 text-stone-50 hover:text-pink-200">
                  <CodeBracketIcon aria-hidden="true" className="size-5" />
                </a>
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
  )
}

export default ProjectCards