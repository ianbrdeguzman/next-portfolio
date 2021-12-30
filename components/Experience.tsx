import { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { useTransition, animated } from 'react-spring';
import { IExperienceProps } from '../lib/types';

const Experience = ({ enbridge, samsung, accenture }: IExperienceProps) => {
  const [selected, setSelected] = useState('Enbridge');

  const transition = useTransition(selected, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 100 }
  });

  const handleOnClick = (e: MouseEvent) => {
    const current = e.currentTarget.textContent;
    if (current) setSelected(current);
  };

  return (
    <section
      id="exprience"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-4/5 max-w-[900px] font-thin">
        <header className="flex relative w-full justify-end">
          <div
            data-aos="fade-right"
            className="p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 left-0 w-6/12 md:w-7/12 lg:w-8/12"
          ></div>
          <h1
            data-aos="fade-left"
            className="xs:text-2xl sm:text-3xl md:text-5xl my-4"
          >
            Experience
          </h1>
        </header>
        <main className="my-4 md:flex">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex justify-around text-gray-500 md:flex-col md:mr-4 min-w-[120px] self-start"
          >
            <div
              className={`flex justify-center flex-1 ${
                selected === 'Enbridge'
                  ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                  : 'bg-gray-100 bg-opacity-10'
              }`}
            >
              <div className="flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center">
                <button
                  className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                    selected === 'Enbridge'
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                      : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                  }`}
                  onClick={handleOnClick}
                >
                  Enbridge
                </button>
              </div>
            </div>
            <div
              className={`flex justify-center flex-1 ${
                selected === 'Samsung'
                  ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                  : 'bg-gray-100 bg-opacity-10'
              }`}
            >
              <div className="flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center">
                <button
                  className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                    selected === 'Samsung'
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                      : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                  }`}
                  onClick={handleOnClick}
                >
                  Samsung
                </button>
              </div>
            </div>
            <div
              className={`flex justify-center flex-1 ${
                selected === 'Accenture'
                  ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
                  : 'bg-gray-100 bg-opacity-10'
              }`}
            >
              <div className="flex-1 mb-0.5 md:mb-0 md:ml-0.5 bg-white dark:bg-gray-900 flex justify-center">
                <button
                  className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                    selected === 'Accenture'
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
                      : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                  }`}
                  onClick={handleOnClick}
                >
                  Accenture
                </button>
              </div>
            </div>
          </div>
          <div
            className="xs:mt-4 md:mt-0 flex-1 relative h-[440px]"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {selected === 'Enbridge'
              ? transition(
                  (style, item) =>
                    item && (
                      <animated.article
                        className="absolute top-0 left-0"
                        style={style}
                      >
                        <h3 className="text-xl md:text-2xl font-normal">
                          {enbridge.role} @{' '}
                          <Link href="https://www.enbridge.com/">
                            <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                              {enbridge.name}
                            </a>
                          </Link>
                        </h3>
                        <p className="md:text-xl">
                          {enbridge.city}, {enbridge.country}
                        </p>
                        <p className="mb-4 md:text-xl">
                          {enbridge.fromDate} - {enbridge.toDate}
                        </p>
                        <ul className="md:text-xl list-square list-inside list-blue-700">
                          {enbridge.task.map((item, i) => {
                            return (
                              <li key={i} className="text-blue-700 mb-4">
                                <span className="text-black dark:text-white">
                                  {item}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </animated.article>
                    )
                )
              : selected === 'Samsung'
              ? transition(
                  (style, item) =>
                    item && (
                      <animated.article
                        className="absolute top-0 left-0"
                        style={style}
                      >
                        <h3 className="text-xl md:text-2xl font-normal">
                          {samsung.role} @{' '}
                          <Link href="https://www.enbridge.com/">
                            <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                              {samsung.name}
                            </a>
                          </Link>
                        </h3>
                        <p className="md:text-xl">
                          {samsung.city}, {samsung.country}
                        </p>
                        <p className="mb-4 md:text-xl">
                          {samsung.fromDate} - {samsung.toDate}
                        </p>
                        <ul className="md:text-xl list-square list-inside list-blue-700">
                          {samsung.task.map((item, i) => {
                            return (
                              <li key={i} className="text-blue-700 mb-4">
                                <span className="text-black dark:text-white">
                                  {item}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </animated.article>
                    )
                )
              : transition(
                  (style, item) =>
                    item && (
                      <animated.article
                        className="absolute top-0 left-0"
                        style={style}
                      >
                        <h3 className="text-xl md:text-2xl font-normal">
                          {accenture.role} @{' '}
                          <Link href="https://www.enbridge.com/">
                            <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                              {accenture.name}
                            </a>
                          </Link>
                        </h3>
                        <p className="md:text-xl">
                          {accenture.city}, {accenture.country}
                        </p>
                        <p className="mb-4 md:text-xl">
                          {accenture.fromDate} - {accenture.toDate}
                        </p>
                        <ul className="md:text-xl list-square list-inside list-blue-700">
                          {accenture.task.map((item, i) => {
                            return (
                              <li key={i} className="text-blue-700 mb-4">
                                <span className="text-black dark:text-white">
                                  {item}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </animated.article>
                    )
                )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Experience;
