import React from 'react';

const Contacts: React.FC = () => {
    const whatsappLink = "https://wa.me/5551995146642";
    const emailLink = "mailto:pabloads17@gmail.com";

    return (
        <section id="contato" className="py-16 bg-black/80">
            <div className="container mx-auto px-4">
                <div className="bg-black/60 rounded-lg p-8 border-2 border-purple-500 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Vamos Conversar?</h2>
                    <p className="text-gray-200 text-center text-lg mb-8">
                        Estou em busca de novas oportunidades e adoraria conversar sobre como posso contribuir com minha experiência em desenvolvimento Fullstack.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors text-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                            </svg>
                            WhatsApp (51) 99514-6642
                        </a>
                        <a 
                            href={emailLink}
                            className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors text-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            pabloads17@gmail.com
                        </a>
                    </div>

                    <p className="text-gray-300 text-center">
                        Disponível para oportunidades de trabalho remoto ou híbrido.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contacts;