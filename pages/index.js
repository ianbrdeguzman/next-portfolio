import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import axios from 'axios';

// export const getStaticProps = async () => {
//     const { data } = await axios.get('http://localhost:3000/api/data');

//     return {
//         props: {
//             data,
//         },
//     };
// };

// {
//     data: {
//         hero, about, experience, contact;
//     }
// }

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white relative'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <Hero />
            <About />
            <Experience />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;
