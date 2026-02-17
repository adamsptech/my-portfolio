export default function About() {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-4 lg:col-span-3 reveal-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark leading-tight sticky top-24">
                            About<br /><span className="text-primary">The Dev</span>
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-light reveal-on-scroll anim-delay-100">
                        <p className="first-letter-style">
                            I am an Informatics graduate from <strong className="text-heading-light dark:text-heading-dark font-semibold">Sanata Dharma University</strong>, currently crafting digital solutions as an <strong className="text-heading-light dark:text-heading-dark font-semibold">IT Systems Technician</strong> at PT. Giesecke &amp; Devrient Indonesia. My professional journey combines a strong foundation in software engineering with practical expertise in technical operations and system troubleshooting.
                        </p>
                        <p>
                            Beyond IT Support, I am deeply passionate about <strong className="text-heading-light dark:text-heading-dark font-semibold">Android Development</strong>. As a graduate of the Bangkit Academy Mobile cohort, I have mastered modern app development using <strong className="text-heading-light dark:text-heading-dark font-semibold">Kotlin, Jetpack Compose</strong>, and Clean Architecture principles (MVVM).
                        </p>
                        <div className="pl-6 border-l-4 border-primary/30 italic hover:border-primary transition-colors duration-300">
                            My background includes experience as a Machine Learning Teaching Assistant and Conference Technical Operator. These roles honed my analytical thinking, adaptability, and ability to solve complex technical challenges in fast-paced environments.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
