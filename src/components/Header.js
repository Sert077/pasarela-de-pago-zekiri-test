import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">Zekiri Software©</a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/pricing" className="hover:underline">Planes</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
