const Project = () => {
    return (
        <section
            id='project'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex justify-between relative'>
                    <h2 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Projects
                    </h2>
                    <div className='border-t border-blue-700 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12'></div>
                </header>
            </div>
        </section>
    );
};

export default Project;
