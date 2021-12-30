import { useContext } from 'react';
import { ThemeContext } from '../../components/context/themeContext';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import { HiOutlineBackspace } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IProjectProps } from '../../lib/types';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const fs = require('fs').promises;
    const path = require('path');

    const rawData = await fs.readFile(
      path.resolve(process.cwd(), 'lib/data.json')
    );
    const data = JSON.parse(rawData);
    const { projects } = data;

    const paths = projects.map((project: IProjectProps) => {
      return {
        params: { id: project.id.toString() }
      };
    });

    return {
      paths: paths,
      fallback: false
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  try {
    const fs = require('fs').promises;
    const path = require('path');

    const rawData = await fs.readFile(
      path.resolve(process.cwd(), 'lib/data.json')
    );
    const data = JSON.parse(rawData);
    const { projects } = data;

    const project: IProjectProps = projects.find(
      (item: IProjectProps) => item.id.toString() === id
    );

    return {
      props: project
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};

const ProjectDetails = (project: IProjectProps) => {
  const state = useContext(ThemeContext);
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
    todos
  } = project;

  return (
    <section className={state?.theme === 'dark' ? 'dark' : ''}>
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900 dark:text-white font-thin">
        <div className="w-4/5 max-w-[900px]">
          <div
            data-aos="fade-down"
            onClick={() => router.push(`/#project`)}
            className="fixed top-4 left-4 cursor-pointer text-2xl"
          >
            <HiOutlineBackspace />
          </div>
          <header className="my-4">
            <div className="flex justify-between items-center">
              <h1
                data-aos="fade-right"
                className="text-3xl md:text-5xl mb-4 mt-8"
              >
                <a href={demo}>{name}</a>
              </h1>
              <div data-aos="fade-left" className="flex mt-4">
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 text-white transform hover:scale-125 transition text-2xl"
                >
                  <FiGithub />
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transform hover:scale-125 transition text-2xl"
                >
                  <MdOpenInNew />
                </a>
              </div>
            </div>
            <p data-aos="fade-up" className="md:text-xl mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                Description:{' '}
              </span>
              {description}
            </p>
            <ul className="flex md:text-xl justify-end flex-wrap">
              {technologies.map((tech, i) => {
                const delay = String((i + 1) * 100);
                return (
                  <li
                    data-aos="fade-left"
                    data-aos-delay={delay}
                    key={i}
                    className="mr-1 mb-1 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 rounded text-base"
                  >
                    <span className="m-0.5 px-2 rounded bg-white dark:bg-gray-900 text-sm block">
                      {tech}
                    </span>
                  </li>
                );
              })}
            </ul>
          </header>
          <div data-aos="fade" className="relative mb-4">
            <Image src={desktop} alt={name} width={900} height={520} priority />
            <div className="absolute bottom-0 right-0 xs:max-w-[70px] sm:max-w-[80px] md:max-w-[150px] lg:max-w-[200px]">
              <Image
                src={mobile}
                alt={name}
                width={200}
                height={400}
                priority
              />
            </div>
          </div>
          <div className="md:text-xl mb-8">
            <p data-aos="fade">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                Challenges:{' '}
              </span>
              {challenge}
            </p>
            <p data-aos="fade" className="my-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                Solution:{' '}
              </span>
              {solution}
            </p>
            <div data-aos="fade">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                Todos:
              </span>
              <ul className="list-square list-inside">
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
