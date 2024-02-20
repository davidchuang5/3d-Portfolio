import React from 'react';

const Contact = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input type="text" name="name" className="input" placeholder="Name" value={form.name} />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="validEmail@domain"
              value={form.email}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your message here..."
              value={form.message}
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
