import { useState } from 'react';
import Link from 'next/link';

const Experience = () => {
    const [selected, setSelected] = useState('e');
    return (
        <section
            id='exprience'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex relative w-full justify-end'>
                    <div className='border-t border-blue-700 absolute top-1/2 left-0 w-6/12 md:w-7/12 lg:w-8/12'></div>
                    <h1 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Experience
                    </h1>
                </header>
                <main className='my-4 md:flex'>
                    <div className='flex justify-around text-gray-500 md:flex-col md:mr-4 min-w-[120px] self-start'>
                        <button
                            value='e'
                            className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                selected === 'e'
                                    ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10 md:border-l md:border-b-0'
                                    : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                            }`}
                            onClick={(e) => setSelected(e.target.value)}
                        >
                            Enbridge
                        </button>
                        <button
                            value='s'
                            className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                selected === 's'
                                    ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10 md:border-l md:border-b-0'
                                    : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                            }`}
                            onClick={(e) => setSelected(e.target.value)}
                        >
                            Samsung
                        </button>
                        <button
                            value='a'
                            className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
                                selected === 'a'
                                    ? 'border-b text-blue-700 border-blue-700 bg-blue-700 bg-opacity-10 md:border-l md:border-b-0'
                                    : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
                            }`}
                            onClick={(e) => setSelected(e.target.value)}
                        >
                            Accenture
                        </button>
                    </div>
                    <div className='xs:mt-4 md:mt-0 flex-1'>
                        {selected === 'e' ? (
                            <article>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    Service Desk @{' '}
                                    <Link href='https://www.enbridge.com/'>
                                        <a className='text-blue-700'>
                                            Enbridge
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>Toronto, Canada</p>
                                <p className='mb-4 md:text-xl'>
                                    December 2020 - Present
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Provide Service Desk technical
                                            support to users either via phone or
                                            email as required.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Provide advanced troubleshooting for
                                            all types of technical inquiries,
                                            service requests, and issues
                                            involving computers, network,
                                            smartphones/tablets, enterprise
                                            applications/systems.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Develop, implement, and/or
                                            participate in the preparation
                                            knowledge base articles and/or
                                            documentation for Service Desk use;
                                            make recommendations for
                                            improvements.
                                        </span>
                                    </li>
                                </ul>
                            </article>
                        ) : selected === 's' ? (
                            <article>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    Process Improvement Systems Analyst @{' '}
                                    <Link href='https://www.samsung.com/au/'>
                                        <a className='text-blue-700'>
                                            Samsung Electronics
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>Sydney, Australia</p>
                                <p className='mb-4 md:text-xl'>
                                    October 2019 - July 2020
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Successfully lead the Direct Payment
                                            project (Online Booking Service
                                            System) for Australian Consumers.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            In charge of User Acceptance Testing
                                            on behalf of Australian subsidiary
                                            for all ongoing system changes and
                                            enhancements.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Analyses business requirements and
                                            enhance systems that would benefit
                                            all parties.
                                        </span>
                                    </li>
                                </ul>
                            </article>
                        ) : (
                            <article>
                                <h3 className='text-xl md:text-2xl font-normal'>
                                    Senior Application Support Analyst @{' '}
                                    <Link href='https://www.accenture.com/ph-en/about/company/philippines'>
                                        <a className='text-blue-700'>
                                            Accenture
                                        </a>
                                    </Link>
                                </h3>
                                <p className='md:text-xl'>
                                    Manila, Philippines
                                </p>
                                <p className='mb-4 md:text-xl'>
                                    August 2013 - February 2017
                                </p>
                                <ul className='md:text-xl list-square list-inside list-blue-700'>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Experience in providing application
                                            support for SAP applications such as
                                            BusinessObjects, BASIS & Security
                                            and SAP GRC.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Ticket creation, troubleshooting and
                                            resolving incidents within agreed
                                            service level.
                                        </span>
                                    </li>
                                    <li className='text-blue-700 mb-4'>
                                        <span className='text-black dark:text-white'>
                                            Create documents and procedures for
                                            IT knowledge base.
                                        </span>
                                    </li>
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
