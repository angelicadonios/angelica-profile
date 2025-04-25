import React from 'react'
import angel from "../assets/images/angel03.jpg";

const tech_stack = [
  "HTML5",
  "Laravel",
  "CSS",
  "React.js",
  "Javascript ES6+",
  "Node.js"
];

const About = () => {
  return (
    <div id="about" className="bg-slate-900">
      {/* container start */}
      <div className="container mx-auto max-w-screen-lg min-h-full pt-28">
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>

        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-2 about-description">
            <p className="text-xl text-justify text-slate-400">I have a Bachelor's degree in Computer Science and have expanded my expertise by attending a coding bootcamp, where I gained hands-on experience in full-stack web development. I am currently focusing on enhancing my skills through personal projects and certifications, with a keen interest in full-stack development. I'm excited to explore opportunities where I can apply my knowledge and continue to grow as a professional.</p>
            <p className="text-xl text-justify text-slate-400 pt-5">Here are some technologies I have experience with:</p>
            <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    
                      <li>{tech_item}</li>
                    
                  );
                })}
              </ul>
              <p className="text-xl text-justify text-slate-400 pt-5">Recreationally, I'm interested in following the developments of science. I also enjoy a variety of hobbies, one of which is playing video games.</p>
          </div>
          <div className="">
            <img src={angel} alt="" className="rounded-xl shadow-xl ring-1 ring-gray-400/10" />
          </div>
        </div>

      </div>
      {/* container end */}
    </div>
  )
}

export default About