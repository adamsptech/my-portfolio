import sajiindongCover from '../assets/sajiindong_cover_1771303113991.png';
import satsetWaCover from '../assets/satset_wa_cover_1771302805014.png';
import logscopeCover from '../assets/logscope_cover_1771303051178.png';
import simpanbaseCover from '../assets/simpanbase_cover_1771303163144.png';
import basicrestapiCover from '../assets/basicrestapi_cover_1771303086667.png';

export const PROJECT_CATEGORIES = ["All", "Mobile", "Web", "Backend"];

export const PROJECTS = [
    {
        title: "SajiinDong App",
        description: "AI-powered culinary app offering personalized food recommendations for diet & bulking goals. Bangkit Academy 2024 Capstone Project featuring RESTful APIs and Clean Architecture.",
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit"],
        year: "2024",
        link: "https://github.com/adamsptech/SajiinDong-App",
        image: sajiindongCover,
        tagColor: "blue",
        category: "Mobile",
    },
    {
        title: "Satset WA",
        description: "Flutter productivity app for WhatsApp — send messages without saving contacts. Features OCR Scanner, Message Templates, Mini-CRM, Bulk Mode, and Scheduled Reminders.",
        technologies: ["Flutter", "Dart", "OCR", "SQLite"],
        year: "2026",
        link: "https://github.com/adamsptech/Satset-WA-Showcase",
        image: satsetWaCover,
        tagColor: "blue",
        category: "Mobile",
    },
    {
        title: "LogScope",
        description: "Modern log file analyzer with beautiful charts. Drag & drop your logs and get instant visual insights. Built with Next.js & TypeScript for fast, interactive analysis.",
        technologies: ["Next.js", "TypeScript", "Chart.js"],
        year: "2026",
        link: "https://github.com/adamsptech/logscope",
        image: logscopeCover,
        tagColor: "blue",
        category: "Web",
    },
    {
        title: "SimpanBase",
        description: "Modern Asset & Maintenance Management System built with Laravel 12 and FilamentPHP v4. Features automated scheduling, asset tracking, and an improved admin UX.",
        technologies: ["Laravel", "PHP", "FilamentPHP", "MySQL"],
        year: "2026",
        link: "https://github.com/adamsptech/laravel-simpanbase",
        image: simpanbaseCover,
        tagColor: "blue",
        category: "Backend",
    },
    {
        title: "Basic REST API",
        description: "A clean CRUD REST API built with Laravel demonstrating best practices in API design, resource controllers, and database interaction patterns.",
        technologies: ["Laravel", "PHP", "REST API", "Blade"],
        year: "2025",
        link: "https://github.com/adamsptech/BasicRestApi",
        image: basicrestapiCover,
        tagColor: "blue",
        category: "Backend",
    },
];
