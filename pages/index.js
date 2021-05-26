import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export const getStaticProps = async () => {
    const res = await fetch(
        'https://next-portfolio-ityt6wwzs-ianbrdeguzman.vercel.app/api/data'
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
        <div className='dark:bg-gray-900 dark:text-white'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <Hero />
            <About data={about} />
            <Experience data={experience} />
            <Contact />
        </div>
    );
};

export default Home;
