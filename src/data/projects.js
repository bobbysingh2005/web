/*
 * Single source of truth for every hobby project shown on the portfolio.
 *
 * Home.vue, Projects.vue and the individual project pages all read from here,
 * so project info never gets out of sync between pages.
 */
export const projects = [
  {
    slug: "eduApp",
    route: "/eduApp",
    name: "EduApp",
    tagline:
      "Management software for educational institutions — timetables, attendance, fees and payroll for schools, colleges and training centres.",
    githubUrl: "https://github.com/bobbysingh2005/eduApp",
    tech: [
      "Angular (web)",
      "React & Vue.js (alternative web clients)",
      "React Native (mobile)",
      "Electron (desktop)",
      "Node.js + Express",
      "MongoDB",
      "JWT authentication",
    ],
    features: [
      "Timetable management",
      "Student attendance tracking",
      "Fees collection and reporting",
      "Real-time notifications",
      "Staff records and salary / payroll management",
      "Cross-platform: web, mobile and desktop",
    ],
    status: "Active",
    statusNote: "under development; the codebase was last updated in April 2025.",
    note: "",
  },
  {
    slug: "shreeChat",
    route: "/shreeChat",
    name: "Shree Chat App",
    tagline: "Simple and easy text, video and audio chat for your local network.",
    githubUrl: "https://github.com/bobbysingh2005/shree-chat-app",
    tech: ["JavaScript (Node.js)", "WebRTC (planned)"],
    features: [
      "Login system (completed)",
      "Text, video and audio chat within a local network",
      "WebRTC media support (in progress)",
    ],
    status: "Inactive",
    statusNote: "development paused; the codebase was last updated in November 2022.",
    note: "",
  },
  {
    slug: "shreeEyes",
    route: "/shreeEyes",
    name: "Shree Eyes",
    tagline:
      "Artificial intelligence applications that help visually impaired people view and interact with the world.",
    githubUrl: "https://github.com/bobbysingh2005/shree-eyes",
    tech: ["TypeScript"],
    features: [
      "AI guidance and assistance for blind and visually impaired people",
      "Voice command support",
    ],
    status: "In development",
    statusNote: "last pushed to GitHub in March 2025.",
    note: "The repository does not yet include a readme, so the feature list below comes from the project description rather than documentation.",
  },
  {
    slug: "shreeEyesWeb",
    route: "/shreeEyesWeb",
    name: "Shree Eyes Web",
    tagline: "Web-based companion and activity tracker for the Shree Eyes app.",
    githubUrl: "https://github.com/bobbysingh2005/shree-eyes-web",
    tech: [],
    features: [],
    status: "Early stage",
    statusNote: "the repository is a placeholder with no public code yet.",
    note: "This project was created as a companion to Shree Eyes. Since the repository is empty, there is nothing to showcase yet.",
  },
];

/*
 * Convenience helper used by the individual project pages:
 *   const project = projectBySlug("eduApp");
 */
export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}