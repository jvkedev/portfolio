import Typewriter from "typewriter-effect";
import Github from "/github-icon-1-logo-svgrepo-com.svg";
// import File from "../../public/";

const Hero = () => {
  return (
    <section className="section" id="hero">
      <h1>Hello, I'm Shubham (JVKE)</h1>

      <p className="font-mono">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Transforming Ideas into Full Stack Solutions",
              "Passionate about Code, Design & Innovation",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10">
        <a href="/resume.pdf" download>
          <button className="flex">
            <img src={Github} className="mr-2 w-6 h-6" alt="GitHub logo" />
            Download My Resume
          </button>
        </a>

        <a
          href="https://github.com/jvkedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex">
            <img src={Github} className="mr-2 w-6 h-6" alt="GitHub logo" />
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
