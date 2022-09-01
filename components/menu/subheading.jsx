import React from 'react';

import image from "../../constants/image";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__dynapuff">{title}</p>
    <img src={image.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;