"use client";

export default function ScrollBadge() {
    return (
        <section>
            <div className="relative h-screen bg-gray-100 p-8">
                {/* <!-- Your Scroll Trigger Target --> */}
                <div id="triggerElement" className="h-screen flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-gray-800">Scroll Down to See the Badge!</h1>
                </div>

                {/* <!-- The Badge --> */}
                <div id="scrollBadge" className="fixed bottom-8 right-8 z-50">
                    <span
                        className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-xl transition-all hover:bg-indigo-700 cursor-pointer">
                        <svg className="-ml-1 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2.59L7.364 9.364a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                clipRule="evenodd" />
                        </svg>
                        New Feature!
                    </span>
                </div>
            </div>
        </section>
    );
}

