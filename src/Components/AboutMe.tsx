import React, { useState, useEffect } from 'react';


const AboutMe: React.FC = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="sobre" className={`py-12 transition-all duration-1000 ${show ? 'animate-slide-in' : 'animate-slide-out'}`}>
            <div className="flex lg:flex-row flex-col gap-3 justify-center container mx-auto px-5 py-5 bg-white rounded-lg border-2 border-purple-500 ">
                <img src="/perfil.jpg" alt="Minha foto" className="w-96 h-96 rounded-full border-2 border-purple-500"></img>
                <div className="flex flex-col gap-4 justify-center">
                    <p className="text-2xl font-bold text-purple-500 text-center">Sobre mim</p>
                    <p className="text-justify text-lg">
                        Sou desenvolvedor fullstack react e Laravel há mais de 2.5 anos. Tenho experiência nas linguagens Javascript e PHP, desenvolvendo soluções completas, seguras e escaláveis. Busco oportunidades para desenvolvimento Fullstack no nível júnior/pleno.
                    </p>
                </div>
            </div>
        </section>
    );
};  

export default AboutMe;