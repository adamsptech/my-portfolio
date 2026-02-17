import { useState, useEffect, useRef } from 'react';

const STATS = [
    { label: "Projects", target: 5, icon: "fas fa-code-branch", suffix: "+" },
    { label: "Certifications", target: 5, icon: "fas fa-certificate", suffix: "" },
    { label: "Years Experience", target: 1, icon: "fas fa-briefcase", suffix: "+" },
    { label: "Tech Stack", target: 10, icon: "fas fa-layer-group", suffix: "+" },
];

function CountUp({ target, suffix, triggered }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!triggered) return;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(current);
            }
        }, 40);
        return () => clearInterval(interval);
    }, [triggered, target]);

    return (
        <span className="text-3xl md:text-5xl font-extrabold text-heading-light dark:text-heading-dark font-[Playfair_Display]">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTriggered(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                                <i className={stat.icon} />
                            </div>
                            <CountUp target={stat.target} suffix={stat.suffix} triggered={triggered} />
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
