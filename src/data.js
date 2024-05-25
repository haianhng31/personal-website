const projects = [
    {
        techStacks: ["React","JavaScript","Node.js", "MongoDB", "Express.js"],
        projectName: "PeacePod",
        projectDescription: "A safe place for people to connect and share about mental health, and hold their unique personalized meditation session",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1716543148/Personal-Website/Mockups/PeacePod_f4oz0p.png",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
    {
        techStacks: ["Flutter","Dart","Google Maps", "Firebase"],
        projectName: "Character Management",
        projectDescription: "A management app for writers/creators to manage their characters and their locations/timeline in real life.",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1716543148/Personal-Website/Mockups/Flutter_Character_ukujw1.png",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
    {
        techStacks: ["Swift", "SwiftUI", "XCode"],
        projectName: "Task Management",
        projectDescription: "An app to help you manage your tasks and see them in calendar view.",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1716543148/Personal-Website/Mockups/Task-App_xegqqw.png",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
    {
        techStacks: ["React", "JavaScript", "ChakraUI"],
        projectName: "My personal website",
        projectDescription: "Where you are right now.",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1716543149/Personal-Website/Mockups/Personal-website_myt3li.png",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
    {
        techStacks: ["React", "JavaScript", "ChakraUI"],
        projectName: "Some app here",
        projectDescription: "sjdhfdjksfhdkjsfdjk",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1715283695/PeacePod/Background13_gf1qz5.avif",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
    {
        techStacks: ["React", "JavaScript", "ChakraUI"],
        projectName: "Some app here",
        projectDescription: "sjdhfdjksfhdkjsfdjk",
        projectImg: "https://res.cloudinary.com/di6doert4/image/upload/v1715283692/PeacePod/Background7_ncv4vz.avif",
        fullDescription: "This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community. This is a project about mental health and development for the Internet community",
        githubLink: 'https://github.com/'
    },
];

const greetings = [
    "Hello",    // English
    "Xin chao",
    "Hola",     // Spanish
    "Bonjour",  // French
    "Ciao",     // Italian
    "Hallo",    // German
    "Olá",      // Portuguese
    "Привет",   // Russian
    // "こんにちは", // Japanese (Konnichiwa)
    "안녕하세요", // Korean (Annyeonghaseyo)
    "你好",      // Chinese (Nǐ hǎo)
    "Salam",    // Arabic
    "Hallo",    // Dutch
    "Namaste",  // Hindi
    "Sawadee",  // Thai
];

const experiences = [
    { 
        title: 'Software Engineer Intern',
        company: 'CodLuck Tecnology',
        description: 'May 24 - Present',
        details: [
            "ABC",
            "XYZ",
            "123"
        ]
    },
    { 
        title: 'Computer Science Teaching Assistant', 
        company: 'Girls Who Code',
        description: 'May 24 - Present',
        details: [
            "ABC",
            "XYZ",
            "123"
        ]
    },
    {   
        title: 'Computer Science Teaching Assistant', 
        company: 'Environmental Leaders of Color',
        description: 'Jan 24 – May 24',
        details: [
            "Collaborated with educators and subject matter experts to develop comprehensive curriculum materials and designed 12 advanced computer science lessons for 20 high school students, utilizing the R programming language.",
            "Successfully managed the logistics of program delivery, optimizing scheduling and resource allocation. Monitored student progress, resulting in a 100% completion rate.",
        ]
    },
    {   
        title: 'Research Assistant', 
        company: 'Computational Neuroscience Lab @Fordham University',
        description: 'Sep 23 - Jan 24',
        details: [
            "Developed Python code to cluster 1000 images of different animals using pre-trained VGG16 neural networks.",
            "Compared similarity ratios between 200 in-group objects and 200 out-group objects across different layers with 3 different pooling methods (max, median, and mean)."
        ]
    },
    {   
        title: 'Project Management Intern', 
        company: 'Campton Birch',
        description: 'Jan 23 – May 23',
        details: [
            "Conducted comprehensive market research to analyze industry trends, gaining insights on competitors' branding strategies; identified market gaps & formulated targeted marketing campaigns.",
            "Crafted a distinctive brand name that effectively conveyed the company's core values and unique selling proposition.",        ]
    },
    {   
        title: 'Business Development Intern', 
        company: 'Subset Lab Inc',
        description: 'Oct 22 – Dec 22',
        details: [
            "Executed an effective E-marketing strategy, reaching hundreds of target customers through email, LinkedIn, Facebook, Reddit.",
            "Enhanced user experience and customer satisfaction by investigating app faults and bugs.",
            "Conducted user case studies, informing product development, & authored a captivating Product Hunt post, boosting visibility."
        ]
    },
]


module.exports = { projects, greetings, experiences }