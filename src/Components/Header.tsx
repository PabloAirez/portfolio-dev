
import Nav from './Nav';

const Header: React.FC = () => {
    return (
        <header className='w-full h-screen bg-center bg-cover bg-black/60'>  
            <Nav/> 
            <div className='flex flex-col items-center gap-6 justify-center h-full'>
                <h1 className='text-5xl font-bold text-center text-white hover:text-purple-500 duration-300 animate-fade-in'>Pablo Santos</h1>  
                <h2 className='text-2xl font-bold text-center text-white hover:text-purple-500 duration-300 animate-fade-in'>Desenvolvedor Fullstack PHP e Javascript</h2>
                <div className='flex gap-4'>
                    <button className='bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 duration-300 animate-fade-in'><a href="/cv.pdf" download>Download CV</a></button>
                    <button className='bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 duration-300 animate-fade-in'><a href="https://www.linkedin.com/messaging/compose/?recipient=pablo-santos-712311223" target="_blank">Contato</a></button>
                </div>
            </div>


        </header>
    );
};

export default Header;