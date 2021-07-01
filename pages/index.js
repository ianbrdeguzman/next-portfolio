import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import axios from 'axios';
import { Link as Scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

export const getStaticProps = async () => {
    const { data } = await axios.get(
        'https://next-portfolio-indol-one.vercel.app/api/data'
    );

    return {
        props: {
            data,
        },
    };
};

const Home = ({ data: { about, experience, projects, contact } }) => {
    const [show, setShow] = useState(false);

    const showScrollToTop = () => {
        if (window.scrollY > window.screen.height) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', showScrollToTop);
        return () => {
            window.removeEventListener('scroll', showScrollToTop);
        };
    }, []);

    useEffect(() => {
        ReactGA.initialize('UA-194832336-1');
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div className='dark:bg-gray-900 dark:text-gray-200 relative'>
            {show && (
                <Scroll
                    to='header'
                    smooth={true}
                    duration={1000}
                    className='fixed bottom-8 right-8 xs:invisible md:visible transition-all'
                >
                    <button className='text-2xl focus:outline-none hover:animate-bounce p-2'>
                        ☝️
                    </button>
                </Scroll>
            )}
            <Hero />
            <About data={about} />
            <Experience data={experience} />
            <Project data={projects} />
            <Contact data={contact} />
        </div>
    );
};

export default Home;
