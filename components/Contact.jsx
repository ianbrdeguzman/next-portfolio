import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from './context/formContext';

const Contact = () => {
    const { formSubmit } = useContext(FormContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };

    return (
        <section
            id='contact'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-4/5 max-w-[900px] font-thin'>
                <header className='flex relative w-full justify-end items-align'>
                    <div className='border-t border-blue-700 absolute top-1/2 left-0 w-2/5 md:w-7/12 lg:w-8/12'></div>
                    <h1 className='xs:text-2xl sm:text-3xl md:text-5xl my-4'>
                        Contact me
                    </h1>
                </header>
                <div>
                    <p className='md:text-xl text-center'>
                        My inbox is always open, whether you want to reach out,
                        ask a question or provide feedback on how to improve my
                        work. Feel free to send me a message and I'll try to get
                        back to you as soon as I can.
                    </p>
                </div>
                <form
                    className='my-4 w-full max-w-[540px] mx-auto'
                    onSubmit={handleSubmit(handleOnSubmit)}
                >
                    <label
                        htmlFor='name'
                        className='py-4 md:text-xl text-blue-700 block'
                    >
                        Name
                    </label>
                    <input
                        type='text'
                        {...register('name', {
                            required: 'You must enter a name.',
                            maxLength: {
                                value: 20,
                                message: 'Your name is too long.',
                            },
                        })}
                        id='name'
                        className='outline-none w-full bg-transparent focus:outline-none border-b border-blue-700 font-thin'
                    />
                    {errors.name && (
                        <p className='italic text-xs text-red-500'>
                            {errors.name.message}
                        </p>
                    )}
                    <label
                        htmlFor='email'
                        className='py-4 md:text-xl text-blue-700 block'
                    >
                        Email
                    </label>
                    <input
                        type='text'
                        {...register('email', {
                            required: 'You must enter an email.',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'You must enter a valid email.',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Your email is too long.',
                            },
                        })}
                        id='email'
                        className='outline-none w-full bg-transparent focus:outline-none border-b border-blue-700 font-thin'
                    />
                    {errors.email && (
                        <p className='italic text-xs text-red-500'>
                            {errors.email.message}
                        </p>
                    )}
                    <label
                        htmlFor='message'
                        className='py-4 md:text-xl text-blue-700 block'
                    >
                        Message
                    </label>
                    <textarea
                        {...register('message', {
                            required: 'You must enter a message.',
                            maxLength: 500,
                        })}
                        id='message'
                        rows='5'
                        className='outline-none w-full bg-transparent focus:outline-none border-b border-blue-700 font-thin'
                    ></textarea>
                    {errors.message && (
                        <p className='italic text-xs text-red-500'>
                            {errors.message.message}
                        </p>
                    )}
                    <div className='text-right'>
                        <button
                            type='submit'
                            className='my-4 py-1 px-2 md:text-xl dark:text-white font-thin border-2 border-blue-700 rounded dark:border-blue-700 focus:outline-none focus:ring-2 focus-ring-blue-700 hover:text-white hover:bg-blue-700 transition'
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
