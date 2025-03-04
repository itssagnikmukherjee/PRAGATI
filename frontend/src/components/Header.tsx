const Header = () => {
    return (
        <header className="flex w-screen items-center justify-between px-24 py-10">
            {/* Logo */}
            <div className="text-4xl font-bold text-gray-700">PRAGATI</div>

            {/* Navigation */}
            <nav>
                <ul className="flex uppercase gap-8 text-lg text-gray-600">
                    <li>
                        <a href="/about" className="hover:text-gray-800">About</a>
                    </li>
                    <li>
                        <a href="/privacy" className="hover:text-gray-800">Privacy</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <i className="fa-solid fa-language text-gray-600"></i>
                        <a href="/language" className="hover:text-gray-800">English</a>
                    </li>
                </ul>
            </nav>

            {/* Buttons */}
            <div className="flex gap-4">
                <div className="bg-white text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white cursor-pointer w-40 justify-center duration-100">
                    <i className="fa-solid fa-hand-paper"></i> Complaint
                </div>
                
                <div className="bg-orange-500 text- border-2 border-orange-500 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-orange-500 cursor-pointer w-40 justify-center duration-100">
                    <i className="fa-solid fa-user"></i> 
                    Login
                </div>

            </div>
        </header>
    );
};

export default Header;