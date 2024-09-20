import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img 
              src="https://www.its.ac.id/diesnatalis/wp-content/themes/ITS/assets/img/logo.png" 
              alt="Event Logo" 
              className="h-14" // Sesuaikan tinggi gambar sesuai kebutuhan
            />
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-300 hover:text-white transition"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className="text-gray-300 hover:text-white transition"
            >
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
