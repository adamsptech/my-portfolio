import { PERSONAL_INFO } from '../data/personal';

export default function Hero() {
    return (
        <header className="pt-28 pb-12 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal animate-pulse-slow" />
                <div className="absolute top-40 right-10 w-56 md:w-80 h-56 md:h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal animate-pulse-slow anim-delay-100" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Profile picture */}
                <div className="relative inline-block mb-6 md:mb-8 group animate-float">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-indigo-500 rounded-full opacity-75 blur-md group-hover:blur-lg transition-all duration-500" />
                    <img
                        alt="Adam Syahputra"
                        className="relative w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-800 object-cover object-top shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                        src={PERSONAL_INFO.profilePic}
                    />
                </div>

                <div className="animate-fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-3 md:mb-4 tracking-tight">
                        {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 mb-5 md:mb-6 font-light px-2">
                        {PERSONAL_INFO.title}
                    </p>

                    {/* Contact pills */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 md:mb-10 px-2">
                        <span className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                            <i className="far fa-envelope text-primary" /> {PERSONAL_INFO.email}
                        </span>
                        <span className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                            <i className="fas fa-phone-alt text-primary" /> {PERSONAL_INFO.phone}
                        </span>
                        <span className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                            <i className="fas fa-map-marker-alt text-primary" /> {PERSONAL_INFO.location}
                        </span>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                        <a className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2" href={`mailto:${PERSONAL_INFO.email}`}>
                            <i className="far fa-paper-plane" /> Contact Me
                        </a>
                        <a className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#0077b5] hover:bg-[#006097] text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-800/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2" href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" /> LinkedIn
                        </a>
                        <a className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#333] hover:bg-black text-white text-sm sm:text-base font-medium shadow-lg shadow-gray-800/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2" href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" /> GitHub
                        </a>
                        <a className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2" href={PERSONAL_INFO.links.instagram} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" /> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
