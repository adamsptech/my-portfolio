import { SKILL_CATEGORIES } from '../data/skills';

function SkillPill({ item, hoverColor }) {
    return (
        <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-sm font-medium ${hoverColor} transition-all cursor-default group/pill`}
        >
            <i className={`${item.icon} ${item.iconColor} text-lg group-hover/pill:scale-110 transition-transform`} />
            {item.name}
        </span>
    );
}

function SkillCard({ category, delayClass }) {
    return (
        <div
            className={`bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl ${category.borderHover} hover:-translate-y-2 transition-all duration-300 reveal-on-scroll ${delayClass} group`}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center ${category.iconColor} text-xl group-hover:scale-110 transition-transform duration-300`}>
                    <i className={category.icon} />
                </div>
                <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                    <SkillPill key={item.name} item={item} hoverColor={category.hoverColor} />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="py-20 bg-bg-light dark:bg-bg-dark" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-4">
                        Expertise &amp; Stack
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and methodologies I leverage to build robust software.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SKILL_CATEGORIES.map((category, i) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            delayClass={i === 0 ? "anim-delay-100" : i === 1 ? "anim-delay-200" : "anim-delay-300"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
