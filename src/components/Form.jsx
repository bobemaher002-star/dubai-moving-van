import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🚚 NEW MOVING REQUEST

👤 Name: ${form.name}
📞 Phone: ${form.phone}

📍 Pickup Location:
${form.pickup}

📍 Drop-Off Location:
${form.dropoff}

📦 Item Details:
${form.details}
`;

    const whatsappLink =
      `https://api.whatsapp.com/send?phone=971501234567&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="booking-section" id="booking">

      <div className="container">

        <div className="section-heading">
          <h2>Book Your Moving Van</h2>
          <p>
            Fill the form and instantly send
            your booking request on WhatsApp.
          </p>
        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="dropoff"
            placeholder="Drop-Off Location"
            required
            onChange={handleChange}
          />

          <textarea
            name="details"
            rows="5"
            placeholder="Item Details (Sofa, Bed, Fridge etc)"
            required
            onChange={handleChange}
          />

          <button type="submit">
            Send Booking via WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Form;