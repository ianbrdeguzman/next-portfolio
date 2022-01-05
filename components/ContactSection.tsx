import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from './context/formContext';
import { CgSpinner } from 'react-icons/cg';
import { IContactProps } from '../lib/types';

const ContactSection = ({ contact: { text } }: { contact: IContactProps }) => {
  const { formSubmit, isLoading, success, error } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleOnSubmit = (data: any) => {
    if (formSubmit) formSubmit(data);
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-md mt-4 md:mt-0"
    >
      <div className="w-4/5 max-w-[900px] font-thin">
        <header className="flex relative w-full justify-end items-align">
          <div
            data-aos="fade-right"
            className="p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 left-0 w-2/5 md:w-7/12 lg:w-8/12"
          ></div>
          <h1
            data-aos="fade-left"
            className="xs:text-2xl sm:text-3xl md:text-5xl my-4"
          >
            Contact me
          </h1>
        </header>
        {isLoading ? (
          <div data-aos="fade" className="flex justify-center mt-40">
            <CgSpinner size={32} className="animate-spin" />
          </div>
        ) : success ? (
          <div>
            <h3 data-aos="fade-up" className="md:text-xl">
              {success}
            </h3>
          </div>
        ) : (
          <form
            className="my-4 w-full max-w-[540px] mx-auto"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <p data-aos="fade" className="md:text-xl text-center mb-8">
              {text}
            </p>
            <div className="flex mb-4">
              <div
                data-aos="fade-right"
                className="flex-1 mr-4 pb-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 relative"
              >
                <label
                  htmlFor="name"
                  className="md:text-xl block bg-white dark:bg-gray-900"
                >
                  Name
                  <input
                    data-aos="fade-left"
                    type="text"
                    {...register('name', {
                      required: 'You must enter a name.',
                      maxLength: {
                        value: 20,
                        message: 'Your name is too long.'
                      }
                    })}
                    id="name"
                    className="w-full font-thin bg-transparent outline-none focus:outline-none"
                  />
                </label>
                {errors.name && (
                  <p className="italic text-xs text-red-500 absolute">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 pb-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400"
              >
                <label
                  htmlFor="email"
                  className="md:text-xl block bg-white dark:bg-gray-900"
                >
                  Email
                  <input
                    data-aos="fade-left"
                    type="text"
                    {...register('email', {
                      required: 'You must enter an email.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'You must enter a valid email.'
                      },
                      maxLength: {
                        value: 30,
                        message: 'Your email is too long.'
                      }
                    })}
                    id="email"
                    className="outline-none w-full bg-transparent focus:outline-none font-thin"
                  />
                </label>
                {errors.email && (
                  <p className="italic text-xs text-red-500 absolute">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 pb-0.5"
            >
              <label
                htmlFor="message"
                className="md:text-xl block h-full bg-white dark:bg-gray-900"
              >
                Message
                <textarea
                  {...register('message', {
                    required: 'You must enter a message.',
                    maxLength: 500
                  })}
                  id="message"
                  rows={5}
                  className="outline-none w-full bg-transparent focus:outline-none font-thin"
                ></textarea>
              </label>
              {errors.message && (
                <p className="italic text-xs text-red-500 absolute">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="text-right">
              {error && (
                <div className="text-red-500">
                  <h3>{error}</h3>
                </div>
              )}
              <div
                data-aos="fade-up"
                className="my-4 p-0 inline-block text-xl rounded bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400"
              >
                <button
                  type="submit"
                  className="text-xl font-thin m-0.5 rounded py-1 px-2 bg-white dark:bg-gray-900"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
