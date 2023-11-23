import Navbar from '@/scenes/navbar';
import { useEffect, useState } from 'react';
import Home from '@/scenes/home';
import Footer from '@/scenes/footer';
import ContactUs from '@/scenes/contactUs';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';
import { SelectedPage } from '@/shared/types';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }

            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app bg-gray-20">
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer />
        </div>
    );
}

export default App;
