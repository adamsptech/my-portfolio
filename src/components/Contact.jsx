import { useState } from 'react';
import { PERSONAL_INFO } from '../data/personal';

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "76a9bb70-3bd4-44ee-9cf8-feae6c8f5411", // Replace with your Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    from_name: "Portfolio Contact Form",
                    subject: `New message from ${formData.name}`,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800" id="contact">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-heading-light dark:text-heading-dark mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                        Have a project idea or just want to say hi? Drop me a message and I'll get back to you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 reveal-on-scroll anim-delay-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-heading-light dark:text-heading-dark mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-heading-light dark:text-heading-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-heading-light dark:text-heading-dark mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-heading-light dark:text-heading-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-heading-light dark:text-heading-dark mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-heading-light dark:text-heading-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                            placeholder="Tell me about your project or idea..."
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            {status === "sending" ? (
                                <>
                                    <i className="fas fa-spinner fa-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="far fa-paper-plane" /> Send Message
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <span className="text-green-500 font-medium flex items-center gap-2 animate-fade-in-up">
                                <i className="fas fa-check-circle" /> Message sent successfully!
                            </span>
                        )}
                        {status === "error" && (
                            <span className="text-red-500 font-medium flex items-center gap-2 animate-fade-in-up">
                                <i className="fas fa-exclamation-circle" /> Failed to send. Try again.
                            </span>
                        )}
                    </div>

                    <p className="text-xs text-slate-400 text-center mt-4">
                        Or reach me directly at{" "}
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline">
                            {PERSONAL_INFO.email}
                        </a>
                    </p>
                </form>
            </div>
        </section>
    );
}
