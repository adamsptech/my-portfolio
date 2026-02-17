import { EXPERIENCE } from '../data/experience';

export default function Experience() {
    return (
        <section className="py-20 bg-bg-light dark:bg-bg-dark" id="experience">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-4">
                        Experience
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        My professional journey through tech, education, and engineering.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:-translate-x-px" />

                    {EXPERIENCE.map((exp, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={`${exp.role}-${i}`}
                                className={`relative flex items-start mb-12 last:mb-0 reveal-on-scroll ${i === 0 ? "anim-delay-100" : i === 1 ? "anim-delay-200" : "anim-delay-300"
                                    }`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6 z-10">
                                    <div className={`w-4 h-4 rounded-full border-4 ${exp.isCurrent
                                            ? "border-primary bg-primary shadow-lg shadow-blue-500/50 animate-pulse-slow"
                                            : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                                        }`} />
                                </div>

                                {/* Card — desktop alternating, mobile always right */}
                                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                                    }`}>
                                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${exp.isCurrent
                                                    ? "bg-blue-100 dark:bg-blue-900/30 text-primary"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                                } group-hover:scale-110 transition-transform duration-300`}>
                                                <i className={exp.icon} />
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${exp.isCurrent
                                                    ? "bg-primary/10 text-primary"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                                }`}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm text-primary/80 font-medium mb-2">{exp.company}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
