export default function Hero() {
    return (
        <section className="relative bg-blue-600 text-white py-24 px-4 text-center overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="inline-block bg-amber-500 text-blue-900 text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                    Brisbane&#39;s #1 Social Badminton Community
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                    BADMINTON FAMILY FOREVER
                </h1>
                <p className="text-xl md:text-2xl font-light text-blue-100 mb-8">
                    More than just a club – we&#39;re family.
                </p>
                <a
                    href="#join"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                    Join Us Today
                </a>
            </div>
        </section>
    )
}