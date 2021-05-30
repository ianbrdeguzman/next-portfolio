import { useRouter } from 'next/router';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';

const Project = ({ data: projects }) => {
    const router = useRouter();

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
                    {projects.map(
                        ({
                            id,
                            name,
                            description,
                            technologies,
                            repo,
                            demo,
                        }) => {
                            return (
                                <div
                                    key={id}
                                    className='border border-blue-700 dark:border-none dark:bg-blue-700 dark:bg-opacity-10 rounded p-4 min-h-[300px] flex flex-col'
                                >
                                    <header className='flex justify-end'>
                                        <a
                                            href={repo}
                                            target='_blank'
                                            className='text-black hover:text-blue-700 dark:text-blue-700 dark:hover:text-white transition'
                                        >
                                            <FiGithub size={24} />
                                        </a>
                                    </header>
                                    <main
                                        onClick={() =>
                                            router.push(`/project/${id}`)
                                        }
                                        className='flex-1 my-4 flex flex-col cursor-pointer'
                                    >
                                        <h3 className='text-xl md:text-2xl font-normal'>
                                            {name}
                                        </h3>
                                        <p className='my-4 flex-1'>
                                            {description}
                                        </p>
                                        <div className='flex flex-wrap'>
                                            {technologies.map((item, i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        className='mr-4 px-2 mb-1 rounded bg-blue-700 bg-opacity-10 text-sm'
                                                    >
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </main>
                                    <footer className='flex justify-end'>
                                        <a
                                            href={demo}
                                            target='_blank'
                                            className='text-black hover:text-blue-700 dark:text-blue-700 dark:hover:text-white transition'
                                        >
                                            <MdOpenInNew size={24} />
                                        </a>
                                    </footer>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Project;
