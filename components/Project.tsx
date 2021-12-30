import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import { IProjectProps } from '../lib/types';

const Project = ({ projects }: { projects: IProjectProps[] }) => {
  return (
    <section
      id="project"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-4/5 max-w-[900px] font-thin">
        <header className="flex justify-between relative mb-4">
          <h2
            data-aos="fade-right"
            className="xs:text-2xl sm:text-3xl md:text-5xl my-4"
          >
            Projects
          </h2>
          <div
            data-aos="fade-left"
            className="p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12"
          ></div>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: IProjectProps, i: number) => {
            const { id, name, description, technologies, repo, demo } = project;
            const delay = String((i + 1) * 100);
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                key={id}
                className="rounded min-h-[300px] flex flex-col border p-4"
              >
                <header className="flex justify-end">
                  <Link href={repo}>
                    <a
                      target="_blank"
                      className="text-black text-xl dark:text-white transform hover:scale-125 transition"
                    >
                      <FiGithub />
                    </a>
                  </Link>
                </header>
                <Link href={`/project/${id}`} passHref>
                  <main className="flex-1 my-4 flex flex-col cursor-pointer">
                    <h3 className="text-xl md:text-2xl font-normal">{name}</h3>
                    <p className="my-4 flex-1 line-clamp-4">{description}</p>
                    <div className="flex flex-wrap">
                      {technologies.map((item, i) => {
                        return (
                          <span
                            key={i}
                            className="mr-1 mb-1 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 rounded"
                          >
                            <span className="m-0.5 px-2 rounded bg-white dark:bg-gray-900 text-sm block">
                              {item}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </main>
                </Link>
                <footer className="flex justify-end">
                  <Link href={demo}>
                    <a
                      target="_blank"
                      className="text-black text-xl dark:text-white transform hover:scale-125 transition"
                    >
                      <MdOpenInNew />
                    </a>
                  </Link>
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
