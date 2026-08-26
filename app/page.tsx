import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen px-8 py-16">
      <section id="home" className="mx-auto max-w-4xl scroll-mt-24">
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
            className="rounded-lg bg-primary px-5 py-3 text-white transition hover:bg-primary-dark"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-border bg-card px-5 py-3 text-primary transition hover:bg-card-hover"
          >
            Contact Me
          </a>
        </div>
      </section>

        
      {/** About me section*/}
      <section id="about" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
          <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-2 text-muted">
          I have a drive for learning and want to develop solutions that solve
            real world problems using creativity, teamwork, and dedication. When I am
            not at my computer, I am listening to music, building Legos, and exploring the outdoors.
        </p>
      </section>

        
      {/** Skills section */}
      <section  id="skills" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Algorithm Analysis and Design</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Linux OS, GitHub</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Leadership, Teamwork, Communication</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Scrum/Agile Development Workflows</h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">AI/ML</h3>
            </div>

          </div>
      </section>

      {/** Projects section, need to add in github links */}
      <section id="projects" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            
          <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
            <h3 className="text-xl font-semibold">Savvy</h3>
            <p className="mt-2 text-muted">
              Worked in a team of 8 people to develop a React Native/Expo web app for finding nearby deals and comparing
              grocery prices.
            </p>
            <p className="mt-4 text-sm text-accent-dark">
              Expo · React Native · TypeScript · GitHub · DevSecOps · Agile/Scrum Methods
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
            <h3 className="text-xl font-semibold">Pacman AI Projects</h3>
            <p className="mt-2 text-muted">
              Worked with a partner to implement tree searching, minimax, expectimax, value iteration, and
              Q-learning agents.
            </p>
            <p className="mt-4 text-sm text-accent-dark">
              Python · AI · Reinforcement Learning
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
            <h3 className="text-xl font-semibold">Pokemon Web Site</h3>
            <p className="mt-2 text-muted">
                Worked on a personal project to create a website that people can use to get information about Pokemon using
                PokeAPI.
            </p>
            <p className="mt-4 text-sm text-accent-dark">
              React · Expo · APIs
            </p>
          </div>  
            
          <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
            <h3 className="text-xl font-semibold">Inventory Tracking Solution</h3>
            <p className="mt-2 text-muted">
                Worked closely in a team and with a client to implement a inventory tracking service that integrates
                with delivery and enterprise resource planning systems.
            </p>
            <p className="mt-4 text-sm text-accent-dark">
              SQL · Networking · Product Development
              </p>
              {/* Add is GH links */}
          </div> 
            
        </div>
        </section>
        
        {/** Experience section */}
        <section id="experience" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
          <h2 className="text-3xl font-bold">Experience</h2>

          <div className="mt-8 grid gap-6">
            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Engineering Teaching Assistant</h3>
              <p className="mt-2 text-muted">
                Assisted engineering faculty by reinforcing core engineering concepts including
                iterative design cycles, ethics, and teamwork strategies. Coached students on teamwork,
                public speaking, and structured problem-solving through guided activities and feedback.
              </p>
              <p className="mt-4 text-sm text-accent-dark">
                Aug 2025 - May 2026
              </p>
            </div> 
            
            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">RFX Solutions Intern</h3>
              <p className="mt-2 text-muted">
                Built and styled UI components using React, TypeScript, HTML, and CSS.
                Contributed to DevOps workflows through CI/CD pipelines, deployments, environment setups.
              </p>
              <p className="mt-4 text-sm text-accent-dark">
                Jun 2023 - Aug 2023 and Feb 2025 - Apr 2025
              </p>
            </div> 
            
            <div className="rounded-xl border border-border bg-card p-6 transition hover:bg-card-hover">
              <h3 className="text-xl font-semibold">Salad and Go Team Lead</h3>
              <p className="mt-2 text-muted">
                Trained new hires on procedures and customer service standards. Supported new
                store openings by coordinating tasks, leading through peak hours, and prioritizing
                efficiency in a fast-paced environment.
              </p>
              <p className="mt-4 text-sm text-accent-dark">
                Nov 2022 - Nov 2024
              </p>
            </div> 
          </div>
        </section>
        
      </main>
      </>
  );
}
