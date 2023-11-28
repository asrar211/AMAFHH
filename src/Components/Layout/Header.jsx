import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='px-4 py-3 bg-slate-200 shadow-lg'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-slate-900'><b>AMAFHH-</b>eStore</h1>

        {/* Mobile Menu (Hamburger icon) */}
        <div className='md:hidden cursor-pointer mr-5' onClick={toggleMenu}>
          <div className={`ham ${showMenu ? 'open' : ''}`}>
            <div className="bg-slate-900 w-[20px] h-[3px] mb-1"></div>
            <div className="bg-slate-900 w-[20px] h-[3px] mb-1"></div>
            <div className="bg-slate-900 w-[20px] h-[3px]"></div>
          </div>
        </div>

        {/* Regular navigation bar */}
        <div className='hidden md:flex md:gap-6'>
          {/* Navigation Links */}
          <ul className='flex gap-6'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/cart"><li>Cart(0)</li></Link>
          </ul>

          <ul className='flex gap-6'>
            <Link to="/register"><li>Register</li></Link>
            <Link to="/login"><li>Login</li></Link>
          </ul>
        </div>
      </div>

      {/* Mobile menu within the existing navigation bar */}
      <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
        {showMenu && (
          <div className='md:hidden bg-gray-200 w-full py-2'>
            <ul className='flex flex-col gap-4'>
              <Link to="/"><li>Home</li></Link>
              <Link to="/products"><li>Products</li></Link>
              <Link to="/cart"><li>Cart(0)</li></Link>
              <Link to="/register"><li>Register</li></Link>
              <Link to="/login"><li>Login</li></Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;
