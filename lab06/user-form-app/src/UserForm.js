import { useState } from "react";

function UserForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setSubmitted(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="card">
      <h2>User Form</h2>

      <input
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <div className="result">
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;