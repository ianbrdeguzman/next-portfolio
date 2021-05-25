import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <Head>
                <title>Ian De Guzman</title>
            </Head>
            <div className='w-4/5 mx-auto min-h-sm xs:text-2xl sm:text-3xl md:text-5xl font-thin'>
                <h1 className='py-12 lg:py-24'>Hello! 👋</h1>
                <p className='leading-normal max-w-[800px]'>
                    I'm{' '}
                    <span className='font-normal text-blue-700'>
                        Ian De Guzman
                    </span>
                    , Industrial Engineer who went rogue. Front-end developer
                    looking for internship, contract role or junior position.
                </p>
                <button className='xs:my-4 lg:my-12 sm:my-8 py-1 px-2 my-8 text-xl dark:text-white font-thin border-2 border-blue-700 rounded dark:border-blue-700 focus:outline-none focus:ring-2 focus-ring-blue-700 hover:text-white hover:bg-blue-700 transition'>
                    Get in touch
                </button>
            </div>
        </div>
    );
};

export default Home;
