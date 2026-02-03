import React from 'react';

const Facilities: React.FC = () => (
  <div className="row g-4 wow fadeInUp">
    <div className="col-lg-3 col-md-6">
      <div className="feature-box f-boxed style-3 bg-color-op-2 rounded-1">
        <i className="fa fa-wifi"></i>
        <div className="text">Free Wi-Fi</div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="feature-box f-boxed style-3 bg-color-op-2 rounded-1">
        <i className="fa fa-swimmer"></i>
        <div className="text">Swimming Pool</div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="feature-box f-boxed style-3 bg-color-op-2 rounded-1">
        <i className="fa fa-dumbbell"></i>
        <div className="text">Gym Center</div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="feature-box f-boxed style-3 bg-color-op-2 rounded-1">
        <i className="fa fa-car"></i>
        <div className="text">Parking Space</div>
      </div>
    </div>
  </div>
);

export default Facilities;
