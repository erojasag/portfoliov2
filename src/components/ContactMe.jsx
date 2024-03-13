import { useRef } from 'react';
import emailjs from 'emailjs-com';
function ContactMe() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-white dark:bg-white/10">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-primary">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
          Want to work with me? Or just want to say hi? Feel free to send me a
          message.
        </p>
        <form
          ref={form}
          action="#"
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-primary dark:text-primary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="shadow-sm bg-black border border-black text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-secondary dark:border-primary dark:placeholder-black dark:text-black dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
              placeholder="John Doe"
              required
            />
            <label
              htmlFor="email"
              className="block mb-2 mt-4 text-sm font-medium text-primary dark:text-primary"
            >
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              className="shadow-sm bg-black border border-black text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-secondary dark:border-primary dark:placeholder-black dark:text-black dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-primary dark:text-primary"
            >
              Subject
            </label>
            <input
              name="from_subject"
              type="text"
              id="subject"
              className="shadow-sm bg-black border border-black text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-secondary dark:border-primary dark:placeholder-black dark:text-black dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-primary dark:text-primary"
            >
              Your message
            </label>
            <textarea
              name="from_message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-secondary rounded-lg shadow-sm border border-primary focus:ring-primary focus:border-primary dark:bg-secondary dark:border-primary dark:placeholder-black dark:text-black dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
