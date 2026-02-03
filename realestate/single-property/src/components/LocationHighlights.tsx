import React from 'react';

const LocationHighlights: React.FC = () => (
  <div className="location-section wow fadeInUp">
    <h3>Location Highlights</h3>
    <ul className="list-unstyled">
      <li><i className="fa fa-map-marker-alt"></i> 5 min to City Center</li>
      <li><i className="fa fa-school"></i> 2 min to School</li>
      <li><i className="fa fa-hospital"></i> 3 min to Hospital</li>
      <li><i className="fa fa-shopping-cart"></i> 4 min to Shopping Mall</li>
    </ul>
    <div className="mt-3">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611817361234!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default LocationHighlights;
