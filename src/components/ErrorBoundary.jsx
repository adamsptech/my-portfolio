import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-bg-light dark:bg-bg-dark p-8">
                    <div className="text-center max-w-md">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                            <i className="fas fa-exclamation-triangle text-red-500 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark mb-3 font-[Playfair_Display]">
                            Something went wrong
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">
                            An unexpected error occurred. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                        >
                            <i className="fas fa-redo mr-2" />
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
