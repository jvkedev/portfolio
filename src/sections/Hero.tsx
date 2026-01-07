import Typewriter from "typewriter-effect";
import Github from "/github-icon-1-logo-svgrepo-com.svg";
import File from "/file.svg";

const Hero = () => {
  return (
    <section className="section flex-col" id="hero">
      <h1 className="text-center leading-relaxed">Hello, I'm Shubham (JVKE)</h1>

      <p className="text-lg sm:text-xl md:text-2xl text-pink-600 pt-6 max-w-3xl font-mono text-center h-12">
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

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-15">
        <a href="/resume.pdf" download>
          <button className="flex button">
            <img src={File} className="mr-2 w-6 h-6" alt="GitHub logo" />
            Download My Resume
          </button>
        </a>

        <a
          href="https://github.com/jvkedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex button">
            <img src={Github} className="mr-2 w-6 h-6" alt="GitHub logo" />
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
