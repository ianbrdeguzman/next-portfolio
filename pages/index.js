import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import axios from 'axios';
import { Link } from 'react-scroll';

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

const Home = ({ data: { about, experience, contact } }) => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-200 relative'>
            <Link
                to='header'
                smooth={true}
                duration={1000}
                className='fixed bottom-8 right-8 xs:invisible md:visible'
            >
                <button className='transform scale-150 focus:outline-none'>
                    ☝️
                </button>
            </Link>
            <Hero />
            <About data={about} />
            <Experience data={experience} />
            <Project />
            <Contact data={contact} />
        </div>
    );
};

export default Home;
