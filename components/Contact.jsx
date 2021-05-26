const Contact = () => {
    return (
        <section
            id='contact'
            className='flex justify-center items-center min-h-contact'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex relative w-full justify-end'>
                    <div className='border-t border-blue-700 absolute top-1/2 left-0 w-6/12 md:w-7/12 lg:w-8/12'></div>
                    <h1 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Contact me
                    </h1>
                </header>
                <form className='text-base md:text-xl px-4'>
                    <label
                        htmlFor='name'
                        className='block my-4 text-sm font-bold'
                    >
                        Name
                    </label>
                    <input
                        className='block w-full'
                        type='text'
                        name='name'
                        id='name'
                        required
                    />
                    <label
                        htmlFor='email'
                        className='block mt-4 text-sm font-bold'
                    >
                        E-mail
                    </label>
                    <input
                        className='border w-full'
                        type='text'
                        name='email'
                        id='email'
                        required
                    />
                    <label
                        htmlFor='message'
                        className='block text-sm font-bold mt-4'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='w-full'
                    ></textarea>
                    <button
                        type='submit'
                        className='xs:my-4 lg:my-12 sm:my-8 py-1 px-2 my-8 text-base md:text-xl dark:text-white font-thin border-2 border-blue-700 rounded dark:border-blue-700 focus:outline-none focus:ring-2 focus-ring-blue-700 hover:text-white hover:bg-blue-700 transition'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
