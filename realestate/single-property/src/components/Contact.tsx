import React from 'react';

const Contact: React.FC = () => (
  <div className="contact-section wow fadeInUp">
    <h3>Contact Agent</h3>
    <form className="row g-3">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Your Name" required />
      </div>
      <div className="col-md-6">
        <input type="email" className="form-control" placeholder="Your Email" required />
      </div>
      <div className="col-12">
        <textarea className="form-control" rows={4} placeholder="Message" required></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </div>
    </form>
  </div>
);

export default Contact;
