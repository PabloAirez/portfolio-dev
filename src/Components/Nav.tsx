import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="w-full bg-black/60 text-white p-4 fixed">
      <div className="container mx-auto">
        <ul className="flex justify-end items-center space-x-6">
          <li>
            <a href="#sobre" className="hover:text-purple-500 transition-colors">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-purple-500 transition-colors">
              Projetos
            </a>
          </li>
          <li>
            <a href="#experiencias" className="hover:text-purple-500 transition-colors">
              Experiências
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-purple-500 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;