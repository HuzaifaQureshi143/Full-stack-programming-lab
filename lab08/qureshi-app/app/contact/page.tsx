"use client";

export default function ContactPage() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>
        Have a question or feedback? Fill out the form below and we will get back
        to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={5} placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
