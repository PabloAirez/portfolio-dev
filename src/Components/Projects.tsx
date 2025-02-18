import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

const projects: Project[] = [
    {
        title: "Site institucional do Hospital Regional de São Jerônimo",
        description: "Projeto para o site institucional do Hospital Regional de São Jerônimo, com conteúdo gerenciado dinamicamente em interface administrativa. O projeto permitiu desenvolver meus conhecimentos em SI e desafiou minhas habilidades em desenvolvimento React e PHP, devido à sua dinamicidade.",
        image: "/hospital.webp",
        technologies: ["React", "NodeJS", "Tailwind", "PHP"],
        link: "http://hsjeronimohomolog.web249.uni5.net/"
    },
    {
        title: "Site Show de bola",
        description: "Site da society Show de Bola, apresentando a quadra e deixando o link para o Whatsapp. Com este projeto, pude ajudar um comércio local de minha cidade enquanto estudava mais sobre o React JS.",
        image: "/quadra.jpg",
        technologies: ["React", "Typescript", "Tailwind"],
        link: "https://showdebola.vercel.app/"
    },
    {
        title: "Sistema de treinamentos institucionais",
        description: "Moodle de treinamentos internos do Hospital Regional de São Jerônimo. Esse projeto me possibilitou trabalhar com a implementação de um serviço externo, neste caso, o Moodle, onde precisei estudar o código e aprender o seu funcionamento.",
        image: "/moodle.png",
        technologies: ["PHP","Mysql","Moodle"],
        link: "http://moodle.hsjeronimo.com.br"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projetos" className="py-12 bg-black/80 mt-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-8">Projetos</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="!flex !items-stretch"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="bg-black/60 rounded-lg overflow-hidden shadow-lg opacity-50 hover:opacity-100 transition-opacity duration-300 h-full">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                    <h3 className="text-xl font-semibold text-purple-500 mb-2">{project.title}</h3>
                                    <p className="text-gray-200 mb-4">{project.description}</p>
                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                                        >
                                            Ver Projeto
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;