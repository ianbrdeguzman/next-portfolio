import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';

export const getStaticProps = async () => {
    const res = await fetch(
        'https://next-portfolio-seven-pi.vercel.app/api/data'
    );
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const Home = ({ data: { hero, about, experience } }) => {
    return (
        <div className='dark:bg-gray-900 dark:text-white relative'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <Hero />
            <About data={about} />
            <Experience data={experience} />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;
