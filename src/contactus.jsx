import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    try {
      // Send form data to the server
      // Replace the following with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        // Reset the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setFormStatus('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <hr />
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4"><em>Contact Us</em></h2>
          <div>
            <p><em>Contact Information:</em></p>
            <p><em>Email: example@example.com</em></p>
            <p><em>Phone: +1 (123) 456-7890</em></p>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><em>Name</em></label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"><em>Email</em></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"><em>Message</em></label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {formStatus && <div className={`alert ${formStatus.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert"><em>{formStatus}</em></div>}
            <button type="submit" className="btn btn-primary mt-2 mb-2">
              <em>Submit</em>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
