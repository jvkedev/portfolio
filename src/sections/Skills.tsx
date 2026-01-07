const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="max-w-3xl w-full">
        <h2>Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base">
          {/* Core Frontend */}
          <div>
            <h3>🖥️ Frontend Development</h3>
            <ul className="skills-set">
              <li>HTML5, CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Animations & UI */}
          <div>
            <h3>🎨 Animations & UI</h3>
            <ul className="skills-set">
              <li>GSAP</li>
              <li>Framer Motion</li>
              <li>Responsive Design</li>
              <li>UI/UX Implementation</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3>🧩 Backend Development</h3>
            <ul className="skills-set">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Programming & Tools */}
          <div>
            <h3>🛠️ Programming & Tools</h3>
            <ul className="skills-set">
              <li>Python</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
