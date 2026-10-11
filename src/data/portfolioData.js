export const personalData = {
  name: "Muhammad Arfa",
  tagline: "Frontend Developer & Software Engineer",
  subtitles: [
    "Full-Stack & Systems Engineer",
    "React & Performance Frontend Developer",
    "GCU Lahore Computer Science Scholar",
    "Enterprise Automation & Systems Builder"
  ],
  bio: "Computer Science scholar at Government College University (GCU), Lahore (3.42 CGPA) and former Software & Network Engineering Intern at ParkView City Head Office. Specialized in architecting responsive React applications, corporate LAN internal systems, automated bots, and relational databases with senior engineering standards.",
  location: "Lahore, Pakistan",
  email: "arfaravian@gmail.com",
  phone: "+92 324 4891313",
  displayPhone: "0324-4891313",
  linkedin: "https://www.linkedin.com/in/muhammad-arfa-2a6b6b355",
  github: "https://github.com/arfa642",
  resumeUrl: "/MUHAMMAD ARFA Resume.pdf",
  googleDocResume: "https://docs.google.com/document/d/1S67T6UDoahVdZrA222I9OrUhVb4zeSdJ/edit?usp=sharing",
  avatar: "/pics/arfa_profile.jpg",
  avatarAlt: "/pics/arfa_profile.jpg",
  logo: "/pics/arfa_profile.jpg",
  stats: [
    { label: "Curated Systems Shipped", value: "6+", icon: "FolderGit2" },
    { label: "CGPA (BS Computer Science)", value: "3.42", icon: "GraduationCap" },
    { label: "Engineering & Industry Roles", value: "3", icon: "Briefcase" },
    { label: "Years of Active Coding", value: "3+", icon: "Code2" },
  ],
  quickBadges: [
    "React.js & Systems Architecture",
    "Corporate LAN Deployment",
    "Human-Crafted Senior Code",
    "Verified GCU Credentials"
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    description: "Building fast, dynamic, and responsive user experiences with component-driven architecture.",
    skills: [
      { name: "React.js", icon: "/pics/react.ico", level: 92, tag: "Primary" },
      { name: "JavaScript (ES6+)", icon: "/pics/js.ico", level: 94, tag: "Core" },
      { name: "Tailwind CSS", icon: "/pics/tailwind.png", level: 95, tag: "Styling" },
      { name: "HTML5 & Semantic Web", icon: "/pics/html.png", level: 95, tag: "Markup" },
      { name: "Modern CSS / Flex & Grid", icon: "/pics/css.png", level: 92, tag: "Styling" },
      { name: "Bootstrap 5", icon: "/pics/bootstrap.png", level: 86, tag: "UI Framework" },
    ]
  },
  {
    category: "Languages & Computer Science",
    description: "Strong algorithmic foundations, object-oriented design, and database systems.",
    skills: [
      { name: "C++", icon: "/pics/cpp.png", level: 88, tag: "OOP & Systems" },
      { name: "Python", icon: "/pics/python.png", level: 82, tag: "Scripting & Data" },
      { name: "SQL", icon: "/pics/sql.png", level: 85, tag: "Relational DB" },
      { name: "C", icon: "/pics/c.png", level: 80, tag: "Fundamentals" },
      { name: "Data Structures & Algorithms", icon: null, level: 88, tag: "Algorithms" },
      { name: "Object-Oriented Programming", icon: null, level: 92, tag: "Architecture" },
    ]
  },
  {
    category: "Tools, Backend & Deployment",
    description: "Version control, RESTful API integrations, cloud databases, and development tooling.",
    skills: [
      { name: "Node.js & Express", icon: null, level: 85, tag: "Runtime & API" },
      { name: "Git & GitHub", icon: "/pics/github.png", level: 92, tag: "Version Control" },
      { name: "Firebase (Auth & DB)", icon: "/pics/fireBase.png", level: 84, tag: "Backend Service" },
      { name: "REST APIs & JSON Server", icon: "/pics/json.jpg", level: 90, tag: "Integration" },
      { name: "MS SQL Server", icon: "/pics/Microsoft SQL Server.png", level: 82, tag: "Database" },
      { name: "Vercel & Netlify", icon: "/pics/vercel.png", level: 88, tag: "CI/CD & Hosting" },
      { name: "VS Code", icon: "/pics/vsCode.png", level: 95, tag: "Primary IDE" },
      { name: "EmailJS", icon: "/pics/EmailJs.jpg", level: 90, tag: "Email Integration" }
    ]
  },
  {
    category: "Creative & UI Design",
    description: "Visual identity, vector graphics, marketing assets, and product wireframing.",
    skills: [
      { name: "CorelDraw", icon: "/pics/corel0.png", level: 90, tag: "Vector & Print" },
      { name: "Brand Identity Design", icon: "/pics/logoMaker.png", level: 86, tag: "Branding" },
      { name: "Canva Pro", icon: "/pics/canva.png", level: 92, tag: "Visuals" },
      { name: "UI/UX Prototyping", icon: null, level: 88, tag: "User Flows" }
    ]
  }
];

export const experienceData = [
  {
    id: "parkview",
    role: "Software & Network Engineering Intern",
    company: "ParkView City Lahore (Head Office)",
    period: "Jun 2026 – Aug 2026",
    location: "Lahore, Pakistan",
    type: "Enterprise Internship",
    badge: "Enterprise Infrastructure",
    description: "Spearheaded technical systems and internal network asset management for corporate head-office operations.",
    keyPoints: [
      "Architected and deployed an Enterprise Asset Tracking System on the corporate local server (LAN), enabling end-to-end hardware lifecycle tracking, assignments, department transfers, and automated audit trails.",
      "Analyzed corporate network topology and designed standardized digital server diagrams to improve infrastructure documentation and operational planning.",
      "Collaborated directly with senior engineers and operations directors to streamline digital workflow accountability across head-office departments."
    ],
    skills: ["React.js", "Corporate LAN Deployment", "Network Topology", "Asset Management", "System Architecture", "Audit Logging"]
  },
  {
    id: "mcollection",
    role: "Sales Supervisor",
    company: "M Collection, Lahore",
    logo: "/pics/mCollection.jpg",
    period: "Jan 2020 – June 2024",
    location: "Lahore, Pakistan",
    type: "Operations & Management",
    badge: "Business Operations",
    description: "Supervised sales operations, workflow distribution, and daily retail cash-flow auditing with zero discrepancy records.",
    keyPoints: [
      "Supervised commercial retail sales operations, coordinate daily activities, and supported customer handling and product management.",
      "Coordinated team workflow and maintained smooth business operations, including sales records and cash-related responsibilities.",
      "Managed cross-functional team coordination, training junior associates in operational compliance and product inventory management."
    ],
    skills: ["Operations Management", "Inventory Control", "Financial Auditing", "Team Leadership", "Customer Relations"]
  },
  {
    id: "al-awan",
    role: "Design Intern",
    company: "Al Awan Graphics",
    logo: "/pics/AG.jpg",
    period: "July 2024 – Sep 2024",
    location: "Lahore, Pakistan",
    type: "Design Internship",
    badge: "Brand & Vector Design",
    description: "Assisted with graphic design and visual-content tasks while adhering to strict corporate design and brand presentation standards.",
    keyPoints: [
      "Designed marketing collateral, packaging templates, corporate business cards, and vector logos using CorelDraw and graphic design suites.",
      "Maintained consistent brand identity, typographic balance, and color harmony across varied client deliverables.",
      "Gained hands-on experience in production prepress preparation, vector asset export, and commercial printing standards."
    ],
    skills: ["CorelDraw", "Brand Identity", "Packaging Design", "Marketing Collateral", "Typography"]
  }
];

export const leadershipData = [
  {
    role: "Joint Secretary",
    organization: "Computer Science Society, GCU Lahore",
    period: "2026 – Present",
    badge: "Executive Leadership",
    logo: "/pics/css_gcu_logo.png",
    highlights: [
      "Assist the President with planning, coordination, follow-ups, and execution of society activities and decisions.",
      "Coordinate communication between the President and executive body to support timely completion of responsibilities.",
      "Manage membership, sports-trial, Departmental Trip, and event registration forms and assist with sports approvals and event coordination.",
      "Collaborate with executive members on technical, professional, sports, and departmental activities."
    ]
  },
  {
    role: "Finance Manager",
    organization: "Computer Science Society, GCU Lahore",
    period: "2025 – 2026",
    badge: "Financial Administration",
    logo: "/pics/css_gcu_logo.png",
    highlights: [
      "Managed budgeting, expenses, financial records, documentation, procurement, and event logistics.",
      "Supported recruitment interviews and major activities including the Glowingsoft Technologies hackathon, PureLogics industry visit, cricket tournament, and sports activities.",
      "Prepared expense reports and coordinated purchases, developing practical experience in accountability and event execution."
    ]
  }
];

export const educationData = [
  {
    school: "Government College University, Lahore",
    degree: "Bachelor of Computer Science (BSCS)",
    period: "Aug 2024 – Present",
    grade: "CGPA: 3.42 / 4.00 (Latest SGPA: 3.57)",
    logo: "/pics/gcu2.png",
    description: "Premier historic academic institution. Coursework includes Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Architecture, and Software Engineering methodologies.",
    highlights: [
      "Active Joint Secretary & ex-Finance Manager of GCU Computer Science Society",
      "Regular participant and organizer in technical hackathons and departmental workshops",
      "Dean's list academic standing with consistent 3.4+ CGPA"
    ]
  },
  {
    school: "Punjab College, Lahore",
    degree: "Intermediate in Computer Science (ICS)",
    period: "2022 – 2024",
    grade: "Score: 937 / 1200",
    logo: "/pics/pgc2.png",
    description: "BISE Board curriculum focusing on Mathematics, Statistics, and foundational Computer Science principles.",
    highlights: [
      "Developed early algorithmic problem-solving skills in C and fundamental discrete mathematics",
      "Participated in inter-college competitive activities"
    ]
  },
  {
    school: "Beaconhouse School System",
    degree: "Matriculation in Computer Science",
    period: "2020 – 2022",
    grade: "Score: 911 / 1100",
    logo: "/pics/bss2.png",
    description: "Studied Mathematics, Computer Science, Physics, and Chemistry. Developed foundational interest in computational logic.",
    highlights: [
      "WWF Pakistan CEATS High Achiever Award (2nd position in school)",
      "Certificate of Honour & Multiple Student of the Month and Responsibility Awards",
      "Active debating, bait-bazi competition winner, and high-school sports leader"
    ]
  }
];

export const projectsData = [
  {
    id: "pastpaperbot",
    title: "GCU PastPaperBot (WhatsApp Exam Assistant)",
    category: "Full-Stack & Systems",
    featured: true,
    image: "/pics/pastpaperbot.jpg",
    summary: "Automated WhatsApp exam paper retrieval engine built with Node.js, Baileys WebSocket protocol, and typo-tolerant search.",
    fullDescription: "An automated academic tool engineered for thousands of GCU Lahore students to instantly search and fetch past exam papers, course outlines, and solution sets directly via WhatsApp chat. Uses the Baileys WebSocket protocol to maintain resilient multi-device session states, coupled with an Express backend, Socket.io administrative dashboard, and typo-tolerant Levenshtein string matching to resolve queries with high precision.",
    tags: ["Node.js", "Express.js", "Baileys WhatsApp WS", "Socket.io", "Fuzzy Search", "Automation"],
    github: null,
    demo: null,
    deploymentNote: "Active GCU Student Community Bot",
    metrics: [
      { label: "Protocol", value: "Baileys Multi-Device WS" },
      { label: "Search Engine", value: "Levenshtein Fuzzy Match" },
      { label: "Admin Panel", value: "Socket.io Real-Time UI" }
    ]
  },
  {
    id: "enterprise-asset-tracker",
    title: "Enterprise Asset Tracking System (ATS)",
    category: "Full-Stack & Systems",
    featured: true,
    image: "/pics/ats_dashboard_live.png",
    secondaryImage: "/pics/asset_tracking_linkedin.png",
    summary: "Internal corporate asset management system deployed on ParkView City head office LAN for hardware lifecycle and audit trails.",
    fullDescription: "Built and deployed directly on the local area network (LAN) at ParkView City Lahore Head Office. Supports complete asset lifecycle management: onboarding workstations, assigning peripheral equipment to employees, processing inter-department transfers, and generating immutable audit logs. Built with React and structured backend endpoints for zero-cloud secure local operational continuity.",
    tags: ["React.js", "Corporate LAN", "Enterprise Systems", "Audit Logging", "Asset Lifecycle"],
    github: null,
    demo: null,
    deploymentNote: "Deployed on Head Office Local LAN",
    metrics: [
      { label: "Deployment", value: "Head Office Local LAN" },
      { label: "Security", value: "Air-Gapped Corporate LAN" },
      { label: "Feature", value: "Department Transfer Trails" }
    ]
  },
  {
    id: "zombie-game",
    title: "Zombie Survival Game",
    category: "Games & C++",
    featured: true,
    image: "/pics/zombie_gameplay_live.png",
    secondaryImage: "/pics/zombie_game_linkedin.png",
    summary: "Top-down survival arcade game engineered in C++ using the SFML library and object-oriented architecture.",
    fullDescription: "Developed as a technical exercise in C++ and Object-Oriented design. Features custom entity collision detection, weapon firing physics, wave-based enemy spawn algorithms, player health progression, and real-time sprite rendering using the SFML multimedia library.",
    tags: ["C++", "SFML Library", "Object-Oriented Programming", "Game Physics", "Game Loop"],
    github: null,
    demo: null,
    deploymentNote: "Desktop C++ Application",
    metrics: [
      { label: "Engine", value: "Custom SFML C++ Loop" },
      { label: "Architecture", value: "Entity-Component OOP" },
      { label: "Language", value: "Modern C++ (17/20)" }
    ]
  },
  {
    id: "netstream",
    title: "NetStream (Netflix Clone)",
    category: "React & Web Apps",
    featured: true,
    image: "/pics/NetStream.jpg",
    summary: "Production-style streaming platform clone featuring live TMDB API catalog, YouTube trailer playback, and Firebase authentication.",
    fullDescription: "NetStream is an entertainment platform engineered with React (Vite) and Tailwind CSS. It leverages the TMDB API to pull real-time movies, TV series, trending reels, and genre feeds. User authentication and watch preferences are wired through Firebase, and trailers play seamlessly using embedded YouTube API players. Fully responsive across phone, tablet, and widescreen monitors.",
    tags: ["React.js", "Vite", "Firebase Auth", "Tailwind CSS", "TMDB API", "React Router"],
    github: "https://github.com/arfa642/NetStream-Netflix-Clone-",
    demo: null,
    metrics: [
      { label: "Data Source", value: "Live TMDB API" },
      { label: "Authentication", value: "Firebase Auth" },
      { label: "Responsive", value: "Mobile, Tablet & Desktop" }
    ]
  },
  {
    id: "iron-trading-db",
    title: "Iron Trading Database & Management System",
    category: "Full-Stack & Systems",
    featured: false,
    image: "/pics/Microsoft SQL Server.png",
    summary: "Custom business database engineered to streamline inventory stockpiling, sales ledger tracking, and supplier invoices for an iron enterprise.",
    fullDescription: "Designed relational database schemas, stored procedures, and management views tailored for the high-volume commodities trading workflow of an iron business. Handled incoming tonnages, price fluctuations, customer accounts, and historical transactional audits with strict ACID compliance.",
    tags: ["MS SQL Server", "Relational Schemas", "Inventory Ledgers", "Stored Procedures", "ACID Compliant"],
    github: null,
    demo: null,
    deploymentNote: "Production Business Database",
    metrics: [
      { label: "Domain", value: "Commodity Trading" },
      { label: "Data Integrity", value: "ACID Compliant" },
      { label: "Impact", value: "Eliminated Paper Ledgers" }
    ]
  },
  {
    id: "m-collection-store",
    title: "M Collection Fashion E-Commerce Store",
    category: "Front-End & UI",
    featured: false,
    image: "/pics/mc.jpg",
    summary: "Responsive retail apparel showcase website with dynamic product grids, smooth CSS micro-interactions, and EmailJS checkout inquiries.",
    fullDescription: "Engineered a high-converting fashion product catalogue utilizing HTML5, modern CSS, and vanilla JavaScript. Features animated image galleries, modal previews, and integration with EmailJS to transmit customer order specifications directly to the store manager without demanding a complex backend server.",
    tags: ["JavaScript", "HTML5 & CSS3", "EmailJS API", "Responsive UI", "E-Commerce"],
    github: "https://github.com/arfa642/M-Collection-E-Commerce-store-HTML-CSS-JavaScript-Project",
    demo: null,
    metrics: [
      { label: "Architecture", value: "Vanilla JS + EmailJS" },
      { label: "Performance", value: "Zero Framework Overhead" },
      { label: "Responsiveness", value: "100% Mobile & Desktop" }
    ]
  }
];

export const certificationsData = [
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    issueDate: "Issued Jun 2025",
    credentialUrl: "https://coursera.org",
    badge: "Specialized Coursework",
    topics: ["Modern CSS", "AJAX", "Responsive Design", "JavaScript DOM", "Frontend Architecture"]
  },
  {
    title: "Cracking the Hiring Code",
    issuer: "Microsoft Student Ambassadors",
    issueDate: "Issued Oct 2025",
    badge: "Technical Interview & Career Readiness",
    topics: ["Technical Interviews", "Software Engineering Standards", "Professional Networking"]
  },
  {
    title: "National Financial Literacy Program",
    issuer: "State Bank of Pakistan NFLP",
    issueDate: "Certified Completion",
    badge: "Financial Administration",
    topics: ["Budgeting", "Cash Flow Auditing", "Organizational Compliance"]
  }
];

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || (typeof atob !== 'undefined' ? atob("c2VydmljZV90YmwxcHJk") : ""),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || (typeof atob !== 'undefined' ? atob("dGVtcGxhdGVfa3p0NWkzMQ==") : ""),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || (typeof atob !== 'undefined' ? atob("akoxcnpDcU9sQm1QUU1oRS0=") : "")
};
