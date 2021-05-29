import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import axios from 'axios';

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
        <div className='dark:bg-gray-900 dark:text-white relative'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <Hero />
            <About data={about} />
            <Experience data={experience} />
            <Project />
            <Contact data={contact} />
        </div>
    );
};

export default Home;
