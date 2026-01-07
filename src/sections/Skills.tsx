const Skills = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center px-4 sm:px-8 md:px-16  text-gray-800"
      id="skills"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base">
          {/* Core Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              🖥️ Frontend Development
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
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
            <h3 className="text-xl font-semibold mb-2">🎨 Animations & UI</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>GSAP</li>
              <li>Framer Motion</li>
              <li>Responsive Design</li>
              <li>UI/UX Implementation</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              🧩 Backend Development
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Programming & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              🛠️ Programming & Tools
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
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
