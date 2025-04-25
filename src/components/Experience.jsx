import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'TBS Global',
    jobtitle: 'Software Developer',
    duration: 'OCT 2021 - JUL 2023',
    posts: [
      {
        id: 1,
        description: "I developed a Calendar System using Laravel, utilizing its powerful routing, authentication, and Eloquent ORM features for seamless functionality.",
      },
      {
        id: 2,
        description: "I handled the redevelopment of a WordPress website, implementing custom themes, plugins, and continuous updates to ensure optimal performance and security.",
      },
      {
        id: 3,
        description: "I developed an Onboarding System using the MERN stack, leveraging MongoDB for data storage, Express for server-side handling, ReactJS for the front-end interface, and Node.js for backend logic and API integration.",
      },
      {
        id: 4,
        description: "I built a Customer Relationship Management (CRM) system using the MERN stack, utilizing MongoDB for efficient data storage, Express for building robust APIs, ReactJS for creating an interactive user interface, and Node.js for handling server-side operations and real-time data processing.",
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
        description: "I converted PSD files into HTML code to ensure a seamless transition from design to web development.",
      },
      {
        id: 2,
        description: "I uploaded and optimized articles on five Joomla websites, enhancing content management and improving SEO performance.",
      },
      {
        id: 3,
        description: "I monitored and maintained the performance of Joomla websites, ensuring uptime, security, and smooth content updates as required.",
      },
      {
        id: 4,
        description: "I provided technical support to team members, troubleshooting hardware and software issues, ensuring network connectivity, and assisting with system configurations.",
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
        description: "I developed GetBook, a dynamic e-commerce platform that leverages web technologies to provide users with a vast digital catalog of books, available for purchase through two secure payment gateways.",
      },
      {
        id: 2,
        description: "I built The Collab, a co-working space-inspired website where users can select a type of room and easily book it.",
      },
    ],
  },
  {
    name: 'PLDT, Inc.',
    jobtitle: 'Student Trainee',
    duration: 'SUMMER 2017',
    posts: [
      {
        id: 1,
        description: "I handled the Main Distribution Frame (MDF) to ensure proper connectivity and functionality of network systems.",
      },
      {
        id: 2,
        description: "I handled, maintained, and made changes to databases to ensure their accuracy, security, and optimal performance.",
      },
    ],
  },
]

const Experience = () => {
  return (
    <div id="experience" className="bg-slate-900">
      <div className="container mx-auto max-w-screen-lg min-h-fit pt-28">
        
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>

        <div>
          <TabGroup vertical>
            <TabList className="float-left h-full">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="tab-highlight py-3 px-3 text-slate-300 block text-left outline-none uppercase">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="w-auto ml-52 h-full text-slate-400 pl-12">
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
    </div>
  )
}

export default Experience