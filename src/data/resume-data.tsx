import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Lin, Jian-An",
  initials: "KA",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taipei",
  about:
    "Software Engineer focused on building automation with Python.",
  summary:
    "Experienced Software Engineer specialized in Python and automation testing, actively involved in open-source projects, being fast learner and open minded.",
  avatarUrl: "https://avatars.githubusercontent.com/u/76777822?v=4",
  personalWebsiteUrl: "https://blog.jianan1104.dev",
  contact: {
    email: "linjianan1104@gmail.com",
    tel: "+886903160098",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jianan1104",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jiananlin1104/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/linjianan_1104",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Formosa University",
      degree: "Master's Degree in Mechanical Engineering",
      start: "2020",
      end: "2022",
    },
    {
      school: "National Formosa University",
      degree: "Bachelor's Degree in Mechanical Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Moxa",
      link: "https://www.moxa.com/en/",
      location: "Taipei, Taiwan",
      wtype: "Hybrid",
      type: "Full-time",
      badges: ["Hybird", "Taipei"],
      title: "SQA Automation Testing Engineer",
      start: "April 2023",
      end: "Present",
      description:
        [
          "Achieved a 19.15% reduction in regression testing time by spearheading the development of Guerrilla SDK for network devices, involved enhancing session management protocols to streamline testing processes.",
          "Led the transition from a monolithic to a modular SDK architecture, enhancing code maintainability and scalability by implementing a suite of development best practices and modular design principles.",
          "Revamped developer documentation by integrating pdoc3 and Next.js, significantly improving API and project documentation clarity, which facilitated a more efficient and user-friendly development environment."
        ],
    },
    {
      company: "Taelor",
      link: "https://taelor.style/z",
      badges: ["Voulenteer", "Remote", "San Francisco"],
      location: "San Francisco, CA",
      wtype: "Remote",
      type: "Volunteer",
      title: "Code Reviewer",
      start: "Feb 2022",
      end: null,
      description:
        ["Contributed to a team of 5+ volunteers, evaluating, documenting, and reporting on the architecture, formatting, and quality of the React.js and PHP Laravel codebase.",
        "Performed an in-depth analysis of 300+ lines of code within the product recommendation algorithm, presenting findings via mind maps to facilitate understanding and potential areas for refinement."
      ],
    },
  ],
  skills: [
    "Git",
    "Docker",
    "Ansible",
    "Vagrant",
    "Pytest",
    "Vue",
    "React/Next.js",
    "FastAPI",
    "Jenkins",
    "Nginx",
    "Playwright",
    "Reflex",
  ],
  languages: [
    "Python", 
    "JavaScript",
    "TypeScript",
    "C/C++",
    "Bash"
  ],
  achievements: [
    {
      title: "Google DevFest Taipei 2023 Speaker",
      techStack: ["Machine Learning", "Data Science"],
      date: "Dec 2023",
      description:
        "Introduced the game-changing No-code Machine Learning feature in Google Sheets at Google DevFest Taipei 2023. Demonstrated how it democratizes ML for users of all levels and its immense potential across industries.",
      link: {
        label: "gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2023",
        href: "https://gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2023/",
      },
    },
    {
      title: "Google IT Automation with Python Specialization",
      techStack: ["Python", "Automation"],
      date: "Dec 2022",
      description:
        "Earned the Google IT Automation with Python Professional Certificate, demonstrating proficiency in Python programming, automation, version control, troubleshooting, and applying automation at scale using configuration management and the Cloud.",
      link: {
        label: "www.coursera.org/account/accomplishments/specialization/certificate/BWJ2RYS46MDX",
        href: "https://www.coursera.org/account/accomplishments/specialization/certificate/BWJ2RYS46MDX",
      },
    },
    {
      title: "Project Management Professional (PMP)® Training Program",
      techStack: ["Project Management"],
      date: "Oct 2022",
      description:
        "Earned the Project Management Professional (PMP)® certification, demonstrating a comprehensive understanding of project management principles and best practices.",
      link: {
        label: "drive.google.com/file/d/1sRCeJq4xNGE7P4PfvdeIAiljY9hrl_Ph/view",
        href: "https://drive.google.com/file/d/1sRCeJq4xNGE7P4PfvdeIAiljY9hrl_Ph/view",
      },
    },
    {
      title: "Best Conference Paper Award, 4th IEEE ECICE",
      techStack: ["Deep Learning", "Tensorflow", "Parameter Optimization"],
      date: "Oct 2022",
      description:
        "Best Conference Paper Award at the 4th IEEE ECICE for research on applying deep neural networks to optimize CNC machining processes and predict performance.",
      link: {
        label: "drive.google.com/file/d/1Kee3gRI7XS6BlnD6m_DKCs8fwafzGGuf/view",
        href: "https://drive.google.com/file/d/1Kee3gRI7XS6BlnD6m_DKCs8fwafzGGuf/view",
      },
    },
    {
      title: "Champion, National Thematic Competition",
      techStack: [],
      date: "Nov 2019",
      description:
        "Won the Champion title at the National Thematic Competition with the project 'NXT Wheeled Robot: Obstacle Challenge and Remote Control' showcasing exceptional skills in robotics, programming, and problem-solving.",
      link: {
        label: "drive.google.com/file/d/1FlRwX4MZjh62IdSzfgvT0scbNIhj6GTp/view",
        href: "https://drive.google.com/file/d/1FlRwX4MZjh62IdSzfgvT0scbNIhj6GTp/view",
      },
    },
    {
      title: "Champion and Technical Excellence Award, 2nd TEL Robot Combat",
      techStack: ["Team Leader","Robotics", "ANSI C", "Bluetooth"],
      date: "Dec 2018",
      description:
        "Champion and Technical Excellence Award at the 2nd TEL Robot Combat competition held by Tokyo Electron Limited, demonstrating exceptional robot design, innovative engineering, and advanced technical skills.",
      link: {
        label: "drive.google.com/file/d/1NK_uBHhnDuvT5V6X0jZWqnEPyve_Oyd8/view",
        href: "https://drive.google.com/file/d/1NK_uBHhnDuvT5V6X0jZWqnEPyve_Oyd8/view",
      },
    },
  ],
  projects: [
    {
      title: "vagrantfile-generator",
      techStack: ["Open Source Creator", "React.js", "Vagrant", "Vercel"],
      description:
        [
          "Designed and launched an interactive Vagrantfile Generator using React and Tailwind CSS, significantly simplifying vagrant configuration processes. Actively incorporated community feedback.",
          "Actively incorporated community feedback, demonstrating adaptability and commitment to open-source excellence."
        ],
      link: {
        label: "vagrantfile-generator.vercel.app",
        href: "https://vagrantfile-generator.vercel.app/",
      },
    },
    {
      title: "GitHub/opensource.guide",
      techStack: ["Open Source Contributor", "GitHub"],
      description:
        ["Translated key sections of GitHub's Open Source Guides into Traditional Chinese,broadening access to essential open-source knowledge for non-English speakers, contributing to a more inclusive global developer community."],
      link: {
        label: "opensource.guide",
        href: "https://opensource.guide/",
      },
    },
    {
      title: "Python/python-docs-zh-tw",
      techStack: ["Open Source Contributor", "GitHub"],
      description:
        ["Played a pivotal role in translating Python's official documentation, significantly improving accessibility for Taiwanese developers and fostering a more inclusive global programming community."],
      link: {
        label: "docs.python.org/zh-tw",
        href: "https://docs.python.org/zh-tw/",
      },
    },
    {
      title: "Google/Latexify",
      techStack: ["Open Source Contributor", "Python"],
      description:
        [
          "Identified and corrected a display bug, and executed a major refactor of 200+ lines to boost code efficiency, underscored by implementing 600+ unit tests.",
          "Advanced the project's continuous integration pipeline by integrating code style tools and a comprehensive testing script into CI/CD workflows, ensuring adherence to coding standards and facilitating smoother code contributions.",
        ],
      link: {
        label: "github.com/google/latexify_py",
        href: "https://github.com/google/latexify_py",
      },
    },
    {
      title: "nextjs-github-page-example-typescript",
      techStack: ["Typescript", "Next.js", "GitHub", "Vercel"],
      description:
        ["Next.js project for simulating Github user and repository page using by github API."],
      link: {
        label: "nextjs-github-page-example-typescript.vercel.app",
        href: "https://nextjs-github-page-example-typescript.vercel.app/",
      },
    },
  ],
} as const;
