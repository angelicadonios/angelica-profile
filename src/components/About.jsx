import React from 'react'
import angel from "../assets/images/angel02.jpg";

const items = [
  "HTML5",
  "Laravel",
  "CSS",
  "React.js",
  "Javascript ES6+",
  "Node.js"
];

const About = () => {
  return (
    <div id="about" className='container mx-auto max-w-screen-lg min-h-full pt-28'>
      <div className="section-header">
          <span className="section-title">About Me</span>
        </div>

      <div className='about-content text-justify text-slate-300'>
        <div className='about-left'>
          <p>I have a Bachelor's degree in Computer Science and have expanded my expertise by attending a coding bootcamp, where I gained hands-on experience in full-stack web development. I am currently focusing on enhancing my skills through personal projects and certifications, with a keen interest in full-stack development. I'm excited to explore opportunities where I can apply my knowledge and continue to grow as a professional.</p>
          <br/>
          <div className='about-stack'>
            <p>Here are some technologies I have experience with:</p>
            <ul className=''>
              {items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <br/>
            <p className="text-justify">When I'm not deep in code, I'm usually reading about astrophysics, rewatching Gilmore Girls, or watching an esports match. I'm also working on another portfolio that highlights more about who I am and what I do.</p>
            </div>
        </div>

        <div className='about-right'>
          <img src={angel} alt='angel' className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About