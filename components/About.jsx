const About = ({
    data: {
        text: { one, two },
        education,
        skills: { frontend, backend, styling, others },
    },
}) => {
    return (
        <section
            className='flex justify-center items-center min-h-screen'
            id='about'
        >
            <article className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex justify-between relative'>
                    <h2
                        data-aos='fade-right'
                        className='xs:text-2xl sm:text-3xl md:text-5xl my-4'
                    >
                        About me
                    </h2>
                    <div
                        data-aos='fade-left'
                        className='border-t border-blue-700 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12'
                    ></div>
                </header>
                <main className='text-base md:text-xl'>
                    <div data-aos='fade-up' className='mb-4'>
                        <p className='mb-4'>{one}</p>
                        <p>{two}</p>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='100'>
                        <p className='text-blue-700 mb-4'>
                            Education & Certifications:
                        </p>
                        <ul>
                            {education.map((item, i) => {
                                return <li key={i}>{item}</li>;
                            })}
                        </ul>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='200'>
                        <p className='my-4 text-blue-700'>
                            Some technologies I'm familiar with:
                        </p>
                        <div className='flex justify-between flex-wrap'>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {frontend.map((skill, i) => {
                                    return <li key={i}>{skill}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {backend.map((skill, i) => {
                                    return <li key={i}>{skill}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {styling.map((skill, i) => {
                                    return <li key={i}>{skill}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {others.map((skill, i) => {
                                    return <li key={i}>{skill}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </main>
            </article>
        </section>
    );
};

export default About;
