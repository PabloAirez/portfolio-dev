import React from 'react';

const Nav: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full bg-black/80 py-4 z-50">
            <div className="container mx-auto px-4">
                <ul className="flex justify-end gap-8">
                    <li>
                        <a 
                            href="#sobre" 
                            onClick={(e) => handleClick(e, 'sobre')}
                            className="text-white hover:text-purple-500 duration-300"
                        >
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projetos" 
                            onClick={(e) => handleClick(e, 'projetos')}
                            className="text-white hover:text-purple-500 duration-300"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#experiencias" 
                            onClick={(e) => handleClick(e, 'experiencias')}
                            className="text-white hover:text-purple-500 duration-300"
                        >
                            Experiência
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contato" 
                            onClick={(e) => handleClick(e, 'contato')}
                            className="text-white hover:text-purple-500 duration-300"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;