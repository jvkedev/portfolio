const About = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center px-4 sm:px-8 md:px-16  text-gray-800"
      id="about"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">About Me</h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-medium">
          <p>
            Hello! I’m <strong>Shubham (JVKE)</strong> a passionate full stack
            developer who loves turning ideas into powerful web experiences. I
            specialize in building modern, responsive apps using the{" "}
            <strong>MERN stack</strong>, and I'm currently diving into{" "}
            <strong>TypeScript</strong>, <strong>Next.js</strong> and
            {""}
            <strong> GSAP</strong>.
          </p>

          <p>
            My journey began with curiosity and evolved into a deep love for
            crafting clean UIs and scalable backends. From e-commerce platforms
            to feedback systems, I’ve built full-stack projects learning from
            every success and blunder.
          </p>

          <p>
            Outside of coding, I’m learning <strong>Python</strong>, and
            preparing for my <strong>BCA degree at IGNOU</strong>. Whether it's
            setting up APIs or debugging UI at midnight. I’m always excited to
            build.
          </p>

          <p>
            I also have a strong <strong>American accent</strong> not just for
            style, but for clarity, confidence, and connecting with clients and
            collaborators globally.
          </p>

          <p>
            Music keeps me grounded, and <strong>Billie Eilish</strong> fuels my
            vibe. Her raw emotion and minimalism inspire not just playlists, but
            also how I write and design clean code.
          </p>

          <p>Let’s build something beautiful together.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
