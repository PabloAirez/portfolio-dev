import React from 'react';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Estagiário de Informática",
        company: "Hospital Regional de São Jerônimo",
        period: "06/2022 - 06/2023",
        description: "Desenvolvimento e manutenção de sistemas web utilizando React, Laravel e PHP. Implementação de soluções para gestão hospitalar e treinamentos institucionais."
    },
    {
        title: "Auxiliar de Informática",
        company: "Hospital Regional de São Jerônimo",
        period: "06/2023 - Atualmente",
        description: "Coordenação de equipe de estagiários em desenvolvimento e criação de soluções tecnológicas para o Hospital."
    }
];

const Experiences: React.FC = () => {
    return (
        <section id="experiencias" className="py-16 bg-black/80">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-12">Experiências Profissionais</h2>
                <div className="relative">
                    {/* Linha vertical central */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300"></div>
                    
                    {experiences.map((experience, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${
                            index % 2 === 0 ? 'flex-row-reverse' : ''
                        }`}>
                            {/* Conteúdo */}
                            <div className="w-5/12">
                                <div className="p-6 bg-black/60 rounded-lg shadow-lg border-2 border-purple-200 hover:border-purple-500 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-purple-500 mb-2">{experience.title}</h3>
                                    <h4 className="text-lg font-semibold text-gray-200 mb-2">{experience.company}</h4>
                                    <p className="text-sm text-purple-400 mb-3">{experience.period}</p>
                                    <p className="text-gray-200">{experience.description}</p>
                                </div>
                            </div>

                            {/* Ponto central */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-purple-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;