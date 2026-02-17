import { CERTIFICATES } from '../data/certificates';

function CertificateCard({ cert, delayClass }) {
    const hasLink = cert.link && cert.link.length > 0 && cert.link !== "#";
    const Wrapper = hasLink ? "a" : "div";
    const isAward = cert.iconType === "award";

    return (
        <Wrapper
            href={hasLink ? cert.link : undefined}
            target={hasLink ? "_blank" : undefined}
            rel={hasLink ? "noopener noreferrer" : undefined}
            className={`bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300 reveal-on-scroll ${delayClass} group`}
        >
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 ${isAward
                ? "bg-gray-50 dark:bg-slate-800 text-gray-500 border-slate-200 dark:border-slate-700"
                : "bg-blue-50 dark:bg-blue-900/20 text-primary border-blue-100 dark:border-blue-900/30"
                }`}>
                <i className={`${isAward ? "fas fa-award" : "fas fa-external-link-alt"} text-lg`} />
            </div>
            <div>
                <h4 className="font-bold text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors">
                    {cert.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1">{cert.issuer} • {cert.date}</p>
            </div>
        </Wrapper>
    );
}

export default function Certificates() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50" id="certificates">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-12 text-center reveal-on-scroll">
                    Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CERTIFICATES.map((cert, i) => (
                        <CertificateCard
                            key={`${cert.title}-${i}`}
                            cert={cert}
                            delayClass={
                                i < 2 ? "anim-delay-100" : i < 4 ? "anim-delay-200" : "anim-delay-300"
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
