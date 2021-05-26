import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data,
        },
    };
};

const Home = ({ users }) => {
    console.log(users);
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
