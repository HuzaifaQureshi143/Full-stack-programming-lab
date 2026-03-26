import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <h3>Contact Us</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
      />

      <br /><br />
      <button>Send</button>
    </div>
  );
}

export default Contact;