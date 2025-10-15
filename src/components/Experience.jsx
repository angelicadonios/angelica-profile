import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Freelance',
    jobtitle: 'Web Developer',
    duration: 'AUG 2023 - MAR 2025',
    posts: [
      {
        id: 1,
        description: "Developed dynamic and responsive websites utilizing Tailwind CSS, JavaScript, React.js, Node.js.",
      },
      {
        id: 2,
        description: "Effectively managed my workloads while maintaining clear and professional communication with clients.",
      },
    ],
  },
  {
    name: 'TBS',
    jobtitle: 'Software Developer',
    duration: 'OCT 2021 - JUL 2023',
    posts: [
      {
        id: 1,
        description: "Developed a calendar system with Laravel to streamline the management and organization of tax filings for accountants.",
      },
      {
        id: 2,
        description: "Led WordPress website redevelopment and ensured continuous updates for improved functionality and performance.",
      },
      {
        id: 3,
        description: "Developed an onboarding system using the MERN stack to optimize user integration and management.",
      },
    ],
  },
  {
    name: 'Trace Media Dubai',
    jobtitle: 'Web Developer',
    duration: 'MAR 2020 - SEPT 2020',
    posts: [
      {
        id: 1,
        description: "Converted PSD design files into HTML code, ensuring accurate translation of visual elements into functional web pages.",
      },
      {
        id: 2,
        description: "Published articles across five Joomla websites, maintaining content accuracy and consistency.",
      },
      {
        id: 3,
        description: "Consistently analyzed data and report design, presenting results and findings to internal business stakeholders.",
      },
    ],
  },
  {
    name: 'Zuitt Coding Bootcamp',
    jobtitle: 'Student',
    duration: 'SEPT 2019 - DEC 2019',
    posts: [
      {
        id: 1,
        description: "Developed GetBook, a dynamic e-commerce platform that leverages web technologies to provide users with a vast digital catalog of books, available for purchase through two secure payment gateways.",
      },
      {
        id: 2,
        description: "Built The Collab, a co-working space-inspired website where users can select a type of room and easily book it.",
      },
    ],
  },
  {
    name: 'PLDT, Inc.',
    jobtitle: 'Trainee',
    duration: 'MAR 2017 - MAY 2017',
    posts: [
      {
        id: 1,
        description: "Handled the configuration, monitoring, and maintenance of the Main Distribution Frame (MDF).",
      },
      {
        id: 2,
        description: "Performed database operations such as updates, backups, and issue resolution.",
      },
    ],
  },
  {
    name: 'University of the East',
    jobtitle: 'Student',
    duration: 'JUNE 2014 - APR 2018',
    posts: [
      {
        id: 1,
        description: "Designed, developed, and conducted user-centered research on an interactive children's game utilizing Unity, incorporating principles of engagement design, UX/UI optimization, and pixel art style development.",
      },
    ],
  },
]

const Experience = () => {
  return (
    <div id="experience" className="">
      <div className="container mx-auto max-w-screen-lg min-h-full pt-28">
        
        <div className="section-header">
          <span className="section-title">Experience</span>
        </div>
        
          <TabGroup vertical className='flex flex-col md:flex-row'>
            <TabList className="float-left h-full">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="tab-highlight py-3 px-3 text-slate-300 block text-left outline-none uppercase text-nowrap">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="w-auto h-full text-slate-400 pl-12">
              {categories.map(({ name, jobtitle, duration, posts }) => (
                <TabPanel key={name}>
                  <p className="text-2xl font-bold text-slate-300">{jobtitle} <span className="exp-highlight">@ {name}</span></p>
                  <p className="text-base">{duration}</p>
                  <ul className="pt-7">
                    {posts.map((post) => (
                      <li key={post.id} className="relative p-3 job-description">
                        <ul className="flex gap-2" aria-hidden="true">
                          <li className="pl-7 pb-1 text-base">{post.description}</li>
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
  )
}

export default Experience