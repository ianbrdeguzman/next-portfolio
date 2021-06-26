import { useState } from 'react';
import Link from 'next/link';

const Experience = ({ data: { enbridge, samsung, accenture } }) => {
    const [selected, setSelected] = useState('e');
    return (
        <section
            id='exprience'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex relative w-full justify-end'>
                    <div
                        data-aos='fade-right'
                        className='p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 left-0 w-6/12 md:w-7/12 lg:w-8/12'
                    ></div>
                    <h1
                        data-aos='fade-left'
                        className='xs:text-2xl sm:text-3xl md:text-5xl my-4'
                    >
                        Experience
                    </h1>
                </header>
                <main className='my-4 md:flex'>
                    <div
                        data-aos='fade-up'
                        data-aos-delay='200'
                        className='flex justify-around text-gray-500 md:flex-col md:mr-4 min-w-[120px] self-start'
                    >
                        <div
                            className={`flex justify-center flex-1 ${
                                selected === 'e'
                                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                                    : 'bg-gray-100 bg-opacity-10'
                            }`}
                        >
                            <div className='flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center'>
                                <button
                                    value='e'
                                    className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                        selected === 'e'
                                            ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                                            : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                                    }`}
                                    onClick={(e) => setSelected(e.target.value)}
                                >
                                    Enbridge
                                </button>
                            </div>
                        </div>
                        <div
                            className={`flex justify-center flex-1 ${
                                selected === 's'
                                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                                    : 'bg-gray-100 bg-opacity-10'
                            }`}
                        >
                            <div className='flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center'>
                                <button
                                    value='s'
                                    className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                        selected === 's'
                                            ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                                            : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                                    }`}
                                    onClick={(e) => setSelected(e.target.value)}
                                >
                                    Samsung
                                </button>
                            </div>
                        </div>
                        <div
                            className={`flex justify-center flex-1 ${
                                selected === 'a'
                                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                                    : 'bg-gray-100 bg-opacity-10'
                            }`}
                        >
                            <div className='flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center'>
                                <button
                                    value='a'
                                    className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                        selected === 'a'
                                            ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                                            : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                                    }`}
                                    onClick={(e) => setSelected(e.target.value)}
                                >
                                    Accenture
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='xs:mt-4 md:mt-0 flex-1'>
                        {selected === 'e' ? (
                            <article data-aos='fade-left' data-aos-delay='400'>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    {enbridge.role} @{' '}
                                    <Link href='https://www.enbridge.com/'>
                                        <a className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold'>
                                            {enbridge.name}
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>
                                    {enbridge.city}, {enbridge.country}
                                </p>
                                <p className='mb-4 md:text-xl'>
                                    {enbridge.fromDate} - {enbridge.toDate}
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    {enbridge.task.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className='text-blue-700 mb-4'
                                            >
                                                <span className='text-black dark:text-white'>
                                                    {item}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        ) : selected === 's' ? (
                            <article>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    {samsung.role} @{' '}
                                    <Link href='https://www.enbridge.com/'>
                                        <a className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold'>
                                            {samsung.name}
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>
                                    {samsung.city}, {samsung.country}
                                </p>
                                <p className='mb-4 md:text-xl'>
                                    {samsung.fromDate} - {samsung.toDate}
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    {samsung.task.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className='text-blue-700 mb-4'
                                            >
                                                <span className='text-black dark:text-white'>
                                                    {item}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        ) : (
                            <article>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    {accenture.role} @{' '}
                                    <Link href='https://www.enbridge.com/'>
                                        <a className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold'>
                                            {accenture.name}
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>
                                    {accenture.city}, {accenture.country}
                                </p>
                                <p className='mb-4 md:text-xl'>
                                    {accenture.fromDate} - {accenture.toDate}
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    {accenture.task.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className='text-blue-700 mb-4'
                                            >
                                                <span className='text-black dark:text-white'>
                                                    {item}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Experience;
