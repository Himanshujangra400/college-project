function Navbar(activePage = "") {

    const MENUDATA = [
        { name: "Home", link: "index.html" },
        { name: "Products Marketplace", link: "products.html" },
        { name: "Students", link: "top-students.html"},
        { name: "Colleges", link: "college.html" },
    ];

    const MENU = MENUDATA.map((item) => {

        const activeClass =
            activePage === item.link
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-700";

        return `
            <a href="${item.link}" class="${activeClass}">
                ${item.name}
            </a>
        `;
    }).join("");

    return `
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-6">
            
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                </div>
                <span class="text-2xl font-extrabold tracking-tight text-slate-800">
                    EDUVAULT
                </span>
            </div>

            <div class="hidden md:flex gap-10 font-medium">
                ${MENU}
                <a href="login.html" class="text-slate-600 hover:text-blue-700 ml-4">
                    Login
                </a>
            </div>

            <a href="Sign-up.html">
                <button class="hidden md:block bg-blue-600 text-white px-7 py-2.5 rounded-xl font-bold hover:bg-blue-700 shadow-md transition">
                    Sign Up
                </button>
            </a>

            <button id="menu-toggle" class="md:hidden text-slate-700">
                ☰
            </button>

        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-4 flex flex-col gap-4 font-medium">
            ${MENU}
            <a href="login.html" class="text-slate-600 hover:text-blue-700">
                Login
            </a>
            <a href="Sign-up.html">
            <button class="mt-4 bg-blue-600 text-white py-2.5 rounded-xl font-bold hover:bg-blue-700 transition">
                Sign Up
            </button> </a>
        </div>
    </nav>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("Navbar");

    if (navbarContainer) {
        navbarContainer.innerHTML =
            Navbar(window.location.pathname.split("/").pop());
    }

    document.addEventListener("click", function (e) {
        if (e.target.id === "menu-toggle") {
            document.getElementById("mobile-menu").classList.toggle("hidden");
        }
    });
});