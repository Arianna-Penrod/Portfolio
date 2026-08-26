import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen px-8 py-16">
      <section id="about" className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-muted">
          Software Developer Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-bold text-foreground">
          Hi, I&apos;m Arianna Penrod.
        </h1>

        <p className="mt-6 text-xl text-muted">
          I design and implement digital solutions using my computer science skills and leadership principles.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-300 px-5 py-3"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section  className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-600">
          I have a drive for learning and want to develop solutions that solve
            real world problems using creativity, teamwork, and dedication. When I am
            not at my computer, I am listening to music, building Legos, and exploring the outdoors.
        </p>
      </section>

      <section  id="skills" className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Algorithm Analysis and Design</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Linux OS, GitHub</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Leadership, Teamwork, Communication</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">Scrum/Agile Development Workflows</h3>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">AI/ML</h3>
            </div>

          </div>
      </section>


      <section id="projects" className="mx-auto mt-24 max-w-4xl">
        <h2 className="text-3xl font-bold">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Savvy</h3>
            <p className="mt-2 text-gray-600">
              Worked in a team of 8 people to develop a React Native/Expo web app for finding nearby deals and comparing
              grocery prices.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Expo · React Native · TypeScript · GitHub · DevSecOps · Agile/Scrum Methods
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Pacman AI Projects</h3>
            <p className="mt-2 text-gray-600">
              Worked with a partner to implement tree searching, minimax, expectimax, value iteration, and
              Q-learning agents.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Python · AI · Reinforcement Learning
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Pokemon Web Site</h3>
            <p className="mt-2 text-gray-600">
                Worked on a personal project to create a website that people can use to get information about Pokemon using
                PokeAPI.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              React · Expo · APIs
            </p>
          </div>  
            
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Inventory Tracking Solution</h3>
            <p className="mt-2 text-gray-600">
                Worked closely in a team and with a client to implement a inventory tracking service that integrates
                with delivery and enterprise resource planning systems.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              SQL · Networking · Product Development
            </p>
          </div>  
            
        </div>
      </section>
      </main>
      </>
  );
}