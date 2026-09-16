const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-primary backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-bold tracking-widest text-indigo-950 transition hover:text-white"
        >
          Arianna Penrod
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-indigo-950 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
