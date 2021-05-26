import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <Hero />
            <About />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;
