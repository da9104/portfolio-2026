const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "/images/monitor.webp",
    windowPosition: "top-[40vh] left-[20vw]",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Blog",
    icon: "/images/keyboard.webp",
    windowPosition: "top-[63vh] left-[24vw]",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "/images/frame.webp", 
    windowPosition: "top-[2vh] left-[21vw]",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/phone.webp",
    windowPosition: "top-[65vh] left-[2vw]",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/images/bag.webp",
    windowPosition: "top-[70vh] right-[12vw]",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/images/papers.webp",
    windowPosition: "top-[65vh] left-[13vw]",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 28, 2025",
    title:
      "The React and React Native: let's learn react for app developer",
    image: "src/assets/react.svg",
    link: "",
  },
  {
    id: 2,
    date: "Nov 28, 2025",
    title: "How did it impact AI-powered coding development and quality control?",
    image: "src/assets/react.svg",
    link: "",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["TailwindCSS", "Mui", "Styled-Components"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI",],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["AWS", "Docker", "Google Cloud", "Figma",],
  },
  {
    category: "Language",
    items: ["Python3", "JavaScript", "TypeScript"],
  },
  {
    category: "Test",
    items: ["Playwright", "Jest", "Storybook", "BDD", "TDD"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/da9104",
  },
  {
    id: 2,
    text: "Blog",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://dami-blog-xi.vercel.app",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kangdami",
  },
];

const photoLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const photos = [
  {
    id: 1,
    type: 'image',
    subtitle: '1st Prize for SW Open Source contest in Korea (2024)',
    url: "/images/achievement1.webp",
  },
  {
    id: 2,
    type: 'image',
    subtitle: '2021 UK national Work Skills contest - Web development finalist',
    url: "/images/achievement3.png",
  },
  {
    id: 3,
    type: 'image',
    subtitle: 'Awesome opportunity to meeting with Roy, the CEO of Cluely in SF',
    url: "/images/achievement2.jpeg",
  },
  {
    id: 4,
    type: 'image',
    subtitle: 'Selected 2025 Google Korea k-startup support programme',
    url: "/images/achievement4.jpg",
  },
  {
    id: 5,
    type: 'video',
    subtitle: '',
    url: "/files/video1.mp4",
  },
  {
    id: 6,
    type: 'image',
    subtitle: 'Conducted user acceptance testing and surveys at the university',
    url: "/images/dami4.webp",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photoLinks,
  photos,
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "CV.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
    {
      id: 2,
      name: "resume_ko.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "fig",
      position: "top-40 left-80",
      href: "https://dami-blog-xi.vercel.app/cv_ko.html",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "portfolio2024.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "figma.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
     // Project 1
    {
      id: 5,
      name: "Notion CMS Blog",
      icon: "/images/memo.webp",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] left-[10vw]", // window position on the main page
      children: [
        {
          id: 1,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This blog-style website is built with Next.js and uses the Notion API as a CMS to fetch static data.",
            "It was a great opportunity to explore the Notion API by reading and experimenting with its documentation. ",
            "The static content is served through Next.js server-side API fetching and also handled on the client side. The source code is available on GitHub.",
            "It features a dark mode theme and is styled using TailwindCSS and shadcn/ui."
          ],
        },
        {
          id: 2,
          name: "Notion CMS Blog",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://dami-blog-xi.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "homepage.png",
          icon: "/images/project1.gif",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project1.gif",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/da9104/notion-blog",
          position: "top-60 right-20",
        },
      ],
    },
    //  Project 2
    {
      id: 6,
      name: "Stelland.io",
      icon: "/images/memo_2.webp",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[25vh] left-[10vw]",
      children: [
        {
          id: 1,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This is the official Stelland website. It is built with Next.js and uses CSS animations powered by the GSAP library for smooth and elegant transitions. ",
            "The project successfully met the requirements set by the senior board members.",
            "It also contributed to a 20% increase in global partnership inquiries and improved the effectiveness of the GTM segment after its initial launch."
          ],
        },
        {
          id: 2,
          name: "stelland.io",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stelland.io/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "homepage.png",
          icon: "/images/project2.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project2.png",
        },
        {
          id: 5,
          name: "achievement.jpg",
          icon: "/images/achievement4.jpg",
          kind: "file",
          fileType: "img",
          position: "top-60 left-5",
          imageUrl: "/images/achievement4.jpg",
        },
      ],
    },
    // Project 3
    {
      id: 7,
      name: "GSAP Portfolio",
      icon: "/images/memo_3.webp",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[20vh] left-[3vw]",
      children: [
        {
          id: 1,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project uses the GSAP library to create interactive scroll events and fun CSS animations.",
            "It’s a clone project inspired by the Awwwards style, built with Next.js and Tailwind CSS. The goal is to deliver an enjoyable web experience through scroll interactions.",
            "",
          ],
        },
        {
          id: 2,
          name: "GSAP Next.js portfolio",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://next-portfolio-zeta-one.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/project3.gif",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project3.gif",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/da9104/next-portfolio",
          position: "top-60 right-20",
        },
      ],
    },
    // project 4

     {
      id: 8,
      name: "Realtime Kanban Board",
      icon: "/images/memo_4.webp",
      kind: "folder",
      position: "top-40 left-80",
      windowPosition: "top-[2vh] left-[3vw]",
      children: [
        {
          id: 1,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-45 left-10",
          description: [
            "It allows users to create realtime experiences for teams or individuals, so every change on the board is instantly visible to everyone, wherever they are.",
            "The app helps collaborators work together on the same tasks, update statuses, and share context in the moment, keeping everyone on the same page as work moves forward",
          ],
        },
        {
          id: 2,
          name: "Real time collaboration Kanban board",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vite-kanban.vercel.app",
          position: "top-5 right-70",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/project4.gif",
          kind: "file",
          fileType: "img",
          position: "top-5 right-20",
          imageUrl: "/images/project4.gif",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/da9104/vite-kanban",
          position: "top-60 right-55",
        },
      ],
    },

  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "dami2.webp",
      icon: "/images/dami2.webp",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/dami2.webp",
    },
    {
      id: 2,
      name: "dami3.webp",
      icon: "/images/dami3.webp",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/dami3.webp",
    },
    {
      id: 3,
      name: "office-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Raees5.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "✨ Jr. software engineer DAMI K",
      image: "/images/dami_character2.webp",
      description: [
        "Hey! I'm Dami, a Junior Full Stack Developer passionate about building interactive web experiences with React and Node.js. I love crafting seamless UX/UI designs that bring ideas to life and make every interaction feel effortless.",
        "My real driving force is design—I believe a beautiful interface and an intuitive user experience are what truly elevate an application. I find myself more inspired by the emotions design can evoke than by the lines of code behind it.",
      ],
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
//   dialog: DIALOG_LOCATION,
};

const INITIAL_Z_INDEX = 1000;
const INITIAL_Z_INDEX_FOR_SUBWINDOW = 1002;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX_FOR_SUBWINDOW, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX_FOR_SUBWINDOW, data: null },
  dialog: { isOpen: false, zIndex: INITIAL_Z_INDEX_FOR_SUBWINDOW, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };