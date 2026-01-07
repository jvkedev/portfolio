const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="max-w-3xl w-full">
        <h2>Projects</h2>
        <ul className="space-y-12">
          {/* E-Commerce Project */}
          <li>
            <h3 className="text-xl font-semibold mb-2">
              🛒 E-Commerce Web App
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This fully responsive eCommerce application offers user
              authentication, product listing with advanced filters, a shopping
              cart, and secure order management. Users can browse products, add
              them to their cart, and place orders with a smooth and modern UI.
              The app also features robust backend APIs and scalable
              architecture. Through this project, I deepened my understanding of
              full-stack development, REST APIs, and state management in React.
            </p>
            <div className="mt-3 space-x-4 text-sm">
              <a
                href="https://github.com/JVKE001/CapitalShop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Source Code
              </a>
            </div>
          </li>

          {/* Weather App */}
          <li>
            <h3 className="text-xl font-semibold mb-2">🌦️ Weather App</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Built with HTML, CSS, and JavaScript, this responsive app fetches
              real-time weather data using a public API. Users can search any
              city to view current temperature, conditions, and other key
              details. This project helped me strengthen my JavaScript and API
              handling skills.
            </p>
            <div className="mt-3 space-x-4 text-sm">
              <a
                href="https://jvke001.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/JVKE001/weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Source Code
              </a>
            </div>
          </li>

          {/* Points App */}
          <li>
            <h3 className="text-xl font-semibold mb-2">
              🏆 Points Claiming App
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A leaderboard app built with React, Vite, and Tailwind CSS. Users
              can register, claim points, view their claim history, and see
              rankings in real-time. Designed to sharpen my frontend skills and
              implement efficient UI workflows.
            </p>
            <div className="mt-3 space-x-4 text-sm">
              <a
                href="https://github.com/JVKE001/leaderboard-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Source Code
              </a>
            </div>
          </li>

          {/* Tic Tac Toe */}
          <li>
            <h3 className="text-xl font-semibold mb-2">🎮 Tic Tac Toe Game</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A classic two-player Tic Tac Toe game built with clean HTML, CSS,
              and JavaScript. The app features turn-based logic, win detection,
              and a simple UI. This project helped reinforce my understanding of
              DOM manipulation and basic game logic.
            </p>
            <div className="mt-3 space-x-4 text-sm">
              <a
                href="https://jvke001.github.io/Tic-Tac-Toe-Game/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/JVKE001/Tic-Tac-Toe-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Source Code
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
