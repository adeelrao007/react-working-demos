import React from 'react';

const Features: React.FC = () => (
  <div className="row g-4 wow fadeInUp">
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/calendar.svg" className="w-60px mb-2" alt="Year of Build" />
          <div>Year of Build</div>
          <h3>2019</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/size.svg" className="w-60px mb-2" alt="Square Feet" />
          <div>Square Feet</div>
          <h3>1665 sqft</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/bed.svg" className="w-60px mb-2" alt="Bedrooms" />
          <div>Bedrooms</div>
          <h3>4</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/bath.svg" className="w-60px mb-2" alt="Bathrooms" />
          <div>Bathrooms</div>
          <h3>5</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/car.svg" className="w-60px mb-2" alt="Car Parking" />
          <div>Car Parking</div>
          <h3>3</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-2 col-md-4 col-6">
      <div className="relative bg-color-op-2 rounded-1 py-4">
        <div className="text-center">
          <img src="/assets/images/svg/price-tag.svg" className="w-60px mb-2" alt="Price" />
          <div>Price</div>
          <h3>$250,000</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
