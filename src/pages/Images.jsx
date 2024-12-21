import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg',
  '/images/image7.jpeg',
  '/images/image8.jpeg',
  '/images/image9.jpeg',
  '/images/image10.jpeg',
  '/images/image11.jpeg',
  '/images/image12.jpeg',
  '/images/image13.jpeg',

  
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(10);

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 10);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <LazyLoadImage
                src={image}
                alt={`Gallery Image ${index + 1}`}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        {visibleImages < images.length && (
          <button
            onClick={loadMoreImages}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Load More
          </button>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-[500px] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
