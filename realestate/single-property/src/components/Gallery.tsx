import React from 'react';

const Gallery: React.FC = () => (
  <div className="gallery-section wow fadeInUp">
    <h3>Gallery</h3>
    <div className="row g-4">
      <div className="col-lg-3 col-md-4 col-6">
        <img src="/assets/images/gallery/1.jpg" alt="Gallery 1" className="img-fluid rounded-1" />
      </div>
      <div className="col-lg-3 col-md-4 col-6">
        <img src="/assets/images/gallery/2.jpg" alt="Gallery 2" className="img-fluid rounded-1" />
      </div>
      <div className="col-lg-3 col-md-4 col-6">
        <img src="/assets/images/gallery/3.jpg" alt="Gallery 3" className="img-fluid rounded-1" />
      </div>
      <div className="col-lg-3 col-md-4 col-6">
        <img src="/assets/images/gallery/4.jpg" alt="Gallery 4" className="img-fluid rounded-1" />
      </div>
    </div>
  </div>
);

export default Gallery;
