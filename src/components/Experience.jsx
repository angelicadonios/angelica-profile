import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Amazon',
    jobtitle: 'Software Development Engineer',
    duration: 'JUL 2022 - PRESENT',
    posts: [
      {
        id: 1,
        description: "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
      },
      {
        id: 2,
        description: "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers.",
      },
    ],
  },
  {
    name: 'Wattpad',
    jobtitle: 'Associate Engineer',
    duration: 'MAY 2020 - APR 2021',
    posts: [
      {
        id: 1,
        description: "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
      },
      {
        id: 2,
        description: "Iteratively built web experiences for 80 million users across high-traffic pages.",
      },
      {
        id: 3,
        description: "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      },
    ],
  },
  {
    name: 'University of Toronto',
    jobtitle: 'Research Engineer',
    duration: 'MAY 2021 - SEPT 2021',
    posts: [
      {
        id: 1,
        description: "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
      },
      {
        id: 2,
        description: "Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik.",
      },
    ],
  },
  {
    name: 'Centivizer',
    jobtitle: 'Software Developer',
    duration: 'SEPT 2019 - APR 2020',
    posts: [
      {
        id: 1,
        description: "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
      },
      {
        id: 2,
        description: "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia.",
      },
    ],
  },
  {
    name: 'Orange Gate',
    jobtitle: 'Software Developer Intern',
    duration: 'MAY 2019 - AUG 2019',
    posts: [
      {
        id: 1,
        description: "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
      },
      {
        id: 2,
        description: "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
      },
    ],
  },
]

const Experience = () => {
  return (
    <div id="experience" className="bg-gray-800">
      <div className="container mx-auto max-w-screen-lg min-h-screen">
        
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>

        <div className="">
          <TabGroup vertical>
            <TabList className="float-left h-80">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="py-3 px-3 text-white hover:text-cyan-300 block text-left focus:text-cyan-300 outline-none uppercase">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="w-auto ml-52 h-80 text-white pl-12">
              {categories.map(({ name, jobtitle, duration, posts }) => (
                <TabPanel key={name}>
                  <p className="text-2xl font-bold">{jobtitle} <span className="text-cyan-300">@ {name}</span></p>
                  <p className="text-base">{duration}</p>
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative p-3 job-description">
                        <ul className="flex gap-2" aria-hidden="true">
                          <li className="pl-4 text-base">{post.description}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>

      </div>
    </div>
  )
}

export default Experience