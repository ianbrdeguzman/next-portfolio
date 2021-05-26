const About = ({ data: { tech } }) => {
    return (
        <section
            className='flex justify-center items-center min-h-screen'
            id='about'
        >
            <article className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex justify-between relative'>
                    <h2 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        About me
                    </h2>
                    <div className='border-t border-blue-700 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12'></div>
                </header>
                <main className='text-base md:text-xl'>
                    <div>
                        <p className='mb-4'>
                            Hi! my name is Ian De Guzman, an Industrial
                            Engineering graduate who turned Front-End developer
                            with the focus on building fast, clean and
                            maintanable code.
                        </p>
                        <p>
                            Currently, based in Toronto, Canada. I am a
                            self-taught, passionate, and hardworking developer
                            looking forward to collaborate and learn from
                            engineers who are much smarter than me while
                            building applications that solve problems and are
                            used by thousands.
                        </p>
                    </div>
                    <div>
                        <p className='my-4 text-blue-700'>
                            Some technologies I'm familiar with:
                        </p>
                        <div className='flex justify-between flex-wrap'>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {tech[0].map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {tech[1].map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {tech[2].map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                            <ul className='xs:flex-1 min-w-[128px]'>
                                {tech[3].map((item, i) => {
                                    return <li key={i}>{item}</li>;
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
