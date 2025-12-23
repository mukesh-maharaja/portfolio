import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  /* ---------- GENERAL CHANGE HANDLER ---------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ---------- PHONE: ONLY NUMBERS + MAX 10 ---------- */
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
    if (value.length <= 10) {
      setForm({ ...form, phone: value });
    }
  };

  /* ---------- EMAIL VALIDATION ----------
     Rules:
     - exactly 1 @
     - exactly 2 dots
     - valid structure
  --------------------------------------- */
  const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

  /* ---------- FORM VALIDATION ---------- */
  const validate = () => {
    if (!form.firstname.trim()) {
      alert("First name is required");
      return false;
    }

    if (!form.lastname.trim()) {
      alert("Last name is required");
      return false;
    }

    if (!form.email.trim()) {
      alert("Email is required");
      return false;
    }

    if (!isValidEmail(form.email)) {
      alert("Enter a valid email (must contain 1 @ and 2 dots)");
      return false;
    }

    if (!form.phone) {
      alert("Mobile number is required");
      return false;
    }

    if (form.phone.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return false;
    }

    if (!form.service) {
      alert("Please select a service");
      return false;
    }

    if (!form.message.trim()) {
      alert("Message cannot be empty");
      return false;
    }

    return true;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const res = await fetch("https://portfolio-backend-3sym.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("Message sent successfully ✅");
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch {
      alert("Server error ❌");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-card">
          <h2>Let's work together</h2>

          <div className="contact-grid">
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
            />
          </div>

          <select
            className="contact-select"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Full Stack Development</option>
          </select>

          <textarea
            className="contact-message"
            placeholder="Type your message here."
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button className="send-btn" onClick={handleSubmit}>
            Send message
          </button>
        </div>

        {/* RIGHT INFO – unchanged */}
        <div className="contact-info">
          <div className="info-row">
            <FaPhoneAlt />
            <div>
              <span className="info-title">Phone</span>
              <span className="info-text">(+91) 87541 03140</span>
            </div>
          </div>

          <div className="info-row">
            <FaEnvelope />
            <div>
              <span className="info-title">Email</span>
              <span className="info-text">mukeshcse94@gmail.com</span>
            </div>
          </div>

          <div className="info-row">
            <FaMapMarkerAlt />
            <div>
              <span className="info-title">Address</span>
              <span className="info-text">Erode, Tamil Nadu</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
