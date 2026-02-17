import { useState, useEffect, useCallback } from 'react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/personal';

export default function Navbar({ isDark, toggleDark }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sectionIds = NAV_ITEMS.map((item) => item.id);
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <span className="font-[Playfair_Display] font-bold text-2xl text-heading-light dark:text-heading-dark tracking-tight hover:text-primary transition-colors cursor-pointer">
                        Adam S.
                    </span>

                    <div className="hidden md:flex space-x-8 items-center">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors relative group ${activeSection === item.id ? "text-primary" : "hover:text-primary"
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </button>
                        ))}
                        <button
                            aria-label="Toggle Dark Mode"
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            onClick={toggleDark}
                        >
                            {isDark ? (
                                <i className="fas fa-sun text-yellow-400" />
                            ) : (
                                <i className="fas fa-moon text-slate-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 text-heading-light dark:text-heading-dark"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-bg-light dark:bg-bg-dark border-t border-slate-200 dark:border-slate-800">
                    <div className="px-4 py-3 space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === item.id
                                        ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                                        : "hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={toggleDark}
                            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
