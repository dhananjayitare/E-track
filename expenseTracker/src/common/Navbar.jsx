

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div>
          <span className="text-2xl font-bold text-blue-600">
            Etrack
          </span>
        </div>


        {/* Navigation Links */}
        {/* <div className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-700 transition"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition"
          >
            Transactions
            
          </a>

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition"
          >
            Add Transaction
          </a>

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition"
          >
            Profile
          </a>

        </div> */}


        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;