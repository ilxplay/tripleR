import React from 'react';

interface HeaderProps {
  title: string;
  links: { name: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-purple-orange p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-gray-200 transition duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
