import React from 'react';
import {} from './styled';
export default function GalleryItem() {
  return (
    <div className="gallery-item">
      <img src="charles-v.jpg" alt="Charles V" />
      <p>
        Charles V, bust length... <br />
        <span>Giovanni Britto</span>
      </p>
      <span className="public">Public</span>
    </div>
  );
}
