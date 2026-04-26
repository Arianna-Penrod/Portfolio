import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen px-8 py-16">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Software Developer Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Hi, I&apos;m Arianna Penrod.
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          I build projects using modern development tools.
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

      <section  id="about" className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-600">
          I have a drive for learning and want to develop solutions that solve
            real world problems using creativity, teamwork, and dedication. When I am
            not at the computer, I am listening to music, building Legos, and staying in shape.
        </p>
      </section>

      <section id="projects" className="mx-auto mt-24 max-w-4xl">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Savvy</h3>
            <p className="mt-2 text-gray-600">
              A React Native/Expo app for finding nearby deals and comparing
              grocery prices.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Expo · React Native · TypeScript · Google Maps API
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Pacman AI Projects</h3>
            <p className="mt-2 text-gray-600">
              Implemented search, minimax, expectimax, value iteration, and
              Q-learning agents.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Python · AI · Reinforcement Learning
            </p>
          </div>
        </div>
      </section>
      </main>
      </>
  );
}