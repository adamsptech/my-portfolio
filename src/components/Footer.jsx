import { PERSONAL_INFO } from '../data/personal';

export default function Footer() {
    return (
        <footer className="bg-surface-dark dark:bg-[#0B1120] text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden group">
                        <img alt="Small Avatar" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={PERSONAL_INFO.profilePic} />
                    </div>
                    <div>
                        <h3 className="font-[Playfair_Display] font-bold text-white text-lg">{PERSONAL_INFO.name}</h3>
                        <p className="text-xs text-slate-500">{PERSONAL_INFO.title}</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <a className="hover:text-primary transition-all hover:scale-110" href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email"><i className="far fa-envelope text-lg" /></a>
                    <a className="hover:text-primary transition-all hover:scale-110" href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin text-lg" /></a>
                    <a className="hover:text-primary transition-all hover:scale-110" href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github text-lg" /></a>
                    <a className="hover:text-primary transition-all hover:scale-110" href={PERSONAL_INFO.links.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok text-lg" /></a>
                    <a className="hover:text-primary transition-all hover:scale-110" href={PERSONAL_INFO.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram text-lg" /></a>
                </div>
                <div className="text-sm text-slate-600">
                    © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
