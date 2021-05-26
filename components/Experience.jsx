import { useState } from 'react';

const Experience = () => {
    const [selected, setSelected] = useState('e');
    return (
        <section
            id='exprience'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex relative w-full justify-end'>
                    <div className='border-t border-blue-700 absolute top-1/2 left-0 w-6/12 md:w-8/12'></div>
                    <h1 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Experience
                    </h1>
                </header>
                <div className='flex justify-around text-gray-500'>
                    <button
                        value='e'
                        className={`focus:outline-none py-4 flex-1 transition duration-300 ${
                            selected === 'e'
                                ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10'
                                : 'border-b border-gray-100 border-opacity-10'
                        }`}
                        onClick={(e) => setSelected(e.target.value)}
                    >
                        Enbridge
                    </button>
                    <button
                        value='s'
                        className={`focus:outline-none py-4 flex-1 transition duration-300 ${
                            selected === 's'
                                ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10'
                                : 'border-b border-gray-100 border-opacity-10'
                        }`}
                        onClick={(e) => setSelected(e.target.value)}
                    >
                        Samsung
                    </button>
                    <button
                        value='a'
                        className={`focus:outline-none py-4 flex-1 transition duration-300 ${
                            selected === 'a'
                                ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10'
                                : 'border-b border-gray-100 border-opacity-10'
                        }`}
                        onClick={(e) => setSelected(e.target.value)}
                    >
                        Accenture
                    </button>
                </div>
                <main className='my-4'>
                    {selected === 'e' ? (
                        <article>
                            <p>Enbridge</p>
                        </article>
                    ) : selected === 's' ? (
                        <article>
                            <p>Samsung</p>
                        </article>
                    ) : (
                        <article>
                            <p>Accenture</p>
                        </article>
                    )}
                </main>
            </div>
        </section>
    );
};

export default Experience;
