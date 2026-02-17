import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section className="py-20 bg-bg-light dark:bg-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-4">
                        What People Say
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Feedback from mentors, colleagues, and collaborators.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={`${t.name}-${i}`}
                            className={`bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal-on-scroll ${i === 0 ? "anim-delay-100" : i === 1 ? "anim-delay-200" : "anim-delay-300"
                                } group relative`}
                        >
                            <i className="fas fa-quote-left text-3xl text-primary/15 absolute top-6 left-6" />
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 relative z-10 italic">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <i className={t.icon} />
                                </div>
                                <div>
                                    <p className="font-bold text-heading-light dark:text-heading-dark text-sm">{t.name}</p>
                                    <p className="text-xs text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
