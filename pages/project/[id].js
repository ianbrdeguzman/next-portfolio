import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../components/context/themeContext';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import { HiOutlineBackspace } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Router from 'next/router';

export const getStaticPaths = async () => {
    try {
        const {
            data: { projects },
        } = await axios.get(
            'https://next-portfolio-indol-one.vercel.app/api/data'
        );

        const paths = projects.map((project) => {
            return {
                params: { id: project.id.toString() },
            };
        });

        return {
            paths: paths,
            fallback: false,
        };
    } catch (error) {
        console.log(error);
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;

    try {
        const {
            data: { projects },
        } = await axios.get(
            'https://next-portfolio-indol-one.vercel.app/api/data'
        );

        const project = projects.filter((item) => item.id.toString() === id);

        return {
            props: { project: project },
        };
    } catch (error) {
        console.log(error);
    }
};

const ProjectDetails = ({ project }) => {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();

    const {
        name,
        description,
        challenge,
        solution,
        image: { desktop, mobile },
        technologies,
        repo,
        demo,
        todos,
    } = project[0];

    return (
        <section className={theme === 'dark' ? 'dark' : ''}>
            <div className='flex justify-center items-center min-h-screen dark:bg-gray-900 dark:text-gray-200 font-thin'>
                <div className='w-4/5 max-w-[900px]'>
                    <div
                        onClick={() => router.push(`/#project`)}
                        className='fixed top-4 left-4 cursor-pointer hover:text-blue-700 transition text-2xl'
                    >
                        <HiOutlineBackspace />
                    </div>
                    <header className='my-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl md:text-5xl mb-4 mt-8 hover:text-blue-700 transition'>
                                <a href={demo}>{name}</a>
                            </h1>
                            <div className='flex mt-4'>
                                <a
                                    href={repo}
                                    target='_blank'
                                    className='mr-4 text-blue-700 hover:text-gray-200 transition text-2xl'
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href={demo}
                                    target='_blank'
                                    className='text-blue-700 hover:text-gray-200 transition text-2xl'
                                >
                                    <MdOpenInNew />
                                </a>
                            </div>
                        </div>
                        <p className='md:text-xl mb-4'>
                            <span className='text-blue-700'>Description: </span>
                            {description}
                        </p>
                        <ul className='flex md:text-xl justify-end flex-wrap'>
                            {technologies.map((tech, i) => {
                                return (
                                    <li
                                        key={i}
                                        className='mr-2 mb-2 px-2 rounded bg-blue-700 bg-opacity-10 text-base'
                                    >
                                        {tech}
                                    </li>
                                );
                            })}
                        </ul>
                    </header>
                    <div className='relative mb-4'>
                        <Image
                            src={desktop}
                            alt={name}
                            width={900}
                            height={520}
                            priority
                        />
                        <div className='absolute bottom-0 right-0 xs:max-w-[70px] sm:max-w-[80px] md:max-w-[150px] lg:max-w-[200px]'>
                            <Image
                                src={mobile}
                                alt={name}
                                width={200}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <div className='md:text-xl mb-8'>
                        <p>
                            <span className='text-blue-700'>Challenges: </span>
                            {challenge}
                        </p>
                        <p className='my-4'>
                            <span className='text-blue-700'>Solution: </span>
                            {solution}
                        </p>
                        <div>
                            <p className='text-blue-700'>Todos:</p>
                            <ul className='list-square list-inside'>
                                {todos.map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
