import { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { PERSONAL_INFO } from '../data/personal';

function ProjectCard({ project, delayClass }) {
    const tagBg = "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40";

    return (
        <article className={`group bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full reveal-on-scroll ${delayClass}`}>
            <div className="relative overflow-hidden h-64 md:h-72 w-full bg-slate-100 dark:bg-slate-800">
                <img
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300">
                    {project.year}
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-[Playfair_Display] text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <a
                        className="text-slate-400 hover:text-primary transition-colors text-xl group-hover:rotate-45 transition-transform duration-300 flex-shrink-0 ml-2"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                    >
                        <i className="fas fa-external-link-alt" />
                    </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                        <span key={tech} className={`px-3 py-1 text-xs font-medium rounded-md ${tagBg} transition-colors`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl">
                            A selection of my recent work in mobile apps, web tools, and backend systems.
                        </p>
                    </div>
                    <a
                        className="hidden md:inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors group"
                        href={PERSONAL_INFO.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub <i className="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-12 reveal-on-scroll anim-delay-100">
                    {PROJECT_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat
                                    ? "bg-primary text-white shadow-lg shadow-blue-500/30"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            delayClass={i % 2 === 0 ? "anim-delay-100" : "anim-delay-200"}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-16 text-slate-400">
                        <i className="fas fa-folder-open text-4xl mb-4 block" />
                        <p>No projects in this category yet.</p>
                    </div>
                )}

                <div className="mt-8 text-center md:hidden">
                    <a
                        className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors"
                        href={PERSONAL_INFO.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub <i className="fas fa-arrow-right ml-2 text-sm" />
                    </a>
                </div>
            </div>
        </section>
    );
}
