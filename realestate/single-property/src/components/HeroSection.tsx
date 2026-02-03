import React from 'react';

const HeroSection: React.FC = () => (
  <section className="p-0 relative overflow-hidden mt-80 mt-sm-50">
    {/* ...template hero section content will go here... */}
    <div className="container">
      <div className="row g-4 gx-5 align-items-center">
        <div className="col-lg-6">
          <div className="subtitle s2 mb-3">House For Sale</div>
          <h1>Your Next Perfect and Beautiful Home for Living Today</h1>
          <p className="col-lg-10">
            This stunning property offers exceptional comfort, premium finishes, and a perfect blend of style and functionality. Whether you're starting a new chapter or looking for a spacious upgrade, this home provides everything you need for elevated living in a prime neighborhood.
          </p>
          <a className="btn-main fx-slide mb-3" href="#section-contact"><span>Schedule Visit</span></a>
          <div className="border-bottom my-3"></div>
          <div>
            <strong><i className="icofont-location-pin id-color me-2 fs-20"></i> 742 Evergreen Terrace Brooklyn, NY 11201</strong>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="/assets/images/misc/s1.webp" className="w-100 rounded-1" alt="Property" />
        </div>
      </div>
      {/* ...features/stats row... */}
    </div>
  </section>
);

export default HeroSection;
