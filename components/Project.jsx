import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';

const Project = () => {
    return (
        <section
            id='project'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex justify-between relative mb-4'>
                    <h2 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Projects
                    </h2>
                    <div className='border-t border-blue-700 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12'></div>
                </header>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {[...new Array(6)].map((item, i) => {
                        return (
                            <div
                                key={i}
                                className='border border-blue-700 dark:border-none dark:bg-blue-700 dark:bg-opacity-10 rounded p-4 min-h-[300px] flex flex-col'
                            >
                                <header className='flex justify-end'>
                                    <a
                                        href='http://google.com'
                                        target='_blank'
                                        className='text-blue-700'
                                    >
                                        <FiGithub size={24} />
                                    </a>
                                </header>
                                <main className='flex-1 my-4 flex flex-col cursor-pointer'>
                                    <h3 className='text-xl md:text-2xl font-normal'>
                                        Amazon Clone
                                    </h3>
                                    <p className='my-4 flex-1'>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Omnis, cumque.
                                    </p>
                                    <div className='flex flex-wrap'>
                                        {[
                                            ...new Array(
                                                Math.floor(
                                                    Math.random() * 4 + 1
                                                )
                                            ),
                                        ].map((item, i) => {
                                            return (
                                                <span
                                                    key={i}
                                                    className='mr-4 px-2 mb-1 rounded bg-blue-700 bg-opacity-10 text-sm'
                                                >
                                                    Hello
                                                </span>
                                            );
                                        })}
                                    </div>
                                </main>
                                <footer className='flex justify-end'>
                                    <a
                                        href='http://google.com'
                                        target='_blank'
                                        className='text-blue-700'
                                    >
                                        <MdOpenInNew size={24} />
                                    </a>
                                </footer>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
