export const profileLinks = {
  github: "https://github.com/animespharikal-system",
  linkedin: "https://www.linkedin.com/in/animes-pharikal/",
};

export const skillGroups = [
  {
    title: "Programming",
    index: "01",
    items: ["JavaScript", "Python", "Java", "TypeScript"],
  },
  {
    title: "Frontend",
    index: "02",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    index: "03",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "Pydantic", "Uvicorn"],
  },
  {
    title: "Databases",
    index: "04",
    items: ["MongoDB"],
  },
  {
    title: "Cloud",
    index: "05",
    items: ["Firebase", "Firebase Hosting", "Google Cloud Run"],
  },
  {
    title: "Developer tools",
    index: "06",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "AI / ML",
    index: "07",
    items: ["scikit-learn", "TF-IDF", "Logistic Regression", "Joblib"],
  },
];

export const learningTopics = [
  "Advanced React",
  "System design",
  "Scalable backend development",
  "AI product development",
  "Open-source workflows",
];

export const projects = [
  {
    number: "01",
    name: "VotePath",
    label: "Civic tech · Web application",
    description:
      "A voting-process guide that breaks civic information into approachable steps, with registration guidance, an eligibility checker, timelines, and voting-method comparisons.",
    note: "The repository documents Firebase Hosting and a live demo.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase Hosting"],
    repository: "https://github.com/animespharikal-system/Election_Process",
    demo: "https://votepath-app-6f912.web.app",
    artwork: "votepath",
  },
  {
    number: "02",
    name: "TruthLens AI",
    label: "Applied AI · Full-stack",
    description:
      "A misinformation-detection project exploring how news text can be analyzed and presented through a React interface and a FastAPI service.",
    note:
      "The repository describes a TF-IDF and Logistic Regression workflow; its backend README says the current prediction endpoint uses mock data.",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "scikit-learn"],
    repository: "https://github.com/animespharikal-system/TruthLens-AI",
    artwork: "truthlens",
  },
  {
    number: "03",
    name: "PhishShield",
    label: "Security · Backend prototype",
    description:
      "A URL-analysis prototype that checks signals such as suspicious terms, URL structure, HTTPS, and domain patterns, with a simple QR-scanning interface.",
    note:
      "Its scoring is heuristic—not a definitive safety verdict—and scan history is kept in memory.",
    technologies: ["Python", "Flask", "URL heuristics", "HTML"],
    repository: "https://github.com/animespharikal-system/phishshield-backend",
    artwork: "phishshield",
  },
  {
    number: "04",
    name: "NutriSense AI",
    label: "Health tech · Ideathon prototype",
    description:
      "A nutrition-focused concept exploring personalized food decisions with an onboarding flow, dashboard, food-scanning experience, and contextual assistant.",
    note:
      "The repository identifies recommendation and predictive behavior as simulated prototype features.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    repository: "https://github.com/animespharikal-system/Antigravity",
    artwork: "nutrisense",
  },
];

export const journey = [
  {
    marker: "ONGOING",
    title: "Engineering studies",
    description:
      "Building technical foundations as an engineering student and connecting coursework with independent software projects.",
  },
  {
    marker: "PROJECT-LED",
    title: "Learning by building",
    description:
      "Exploring full-stack development, cloud platforms, and applied AI through practical projects with real-world problem statements.",
  },
  {
    marker: "LONG-TERM",
    title: "Growing toward AI engineering",
    description:
      "Continuing to learn how useful AI-powered products are designed, built, and made dependable.",
  },
];
