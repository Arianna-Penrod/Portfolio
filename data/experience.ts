export type Experience = {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    title: "Teaching Assistant",
    company: "OU School of Engineering",
    startDate: "Aug 2025",
    endDate: "Current",
    description: [
      "Assist engineering faculty by reinforcing core engineering concepts, including iteration, design cycles, ethics, and teamwork strategies.",
      "Coach students on teamwork, public speaking, and structured problem-solving through guided activities and feedback.",
    ],
    technologies: ["Teaching", "Problem Solving", "Teamwork", "Public Speaking", "Communication"],
  },
  {
    title: "Software Intern",
    company: "RFX Solutions",
    startDate: "Jun 2023",
    endDate: "Apr 2025",
    description: [
      "Built and styled UI components using React, TypeScript, HTML, and CSS.",
      "Contributed to DevOps workflows through CI/CD pipelines, deployments, and environment setup.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "CI/CD",
      "DevOps",
    ],
  },
  {
    title: "Team Ambassador",
    company: "Salad and Go",
    startDate: "Nov 2022",
    endDate: "Nov 2024",
    description: [
      "Trained new hires on procedures and customer service standards.",
      "Supported new store openings by coordinating tasks, leading through peak hours, and prioritizing speed and efficiency in a fast-paced environment.",
    ],
    technologies: ["Training", "Leadership", "Customer Service", "Operations"],
  },
];