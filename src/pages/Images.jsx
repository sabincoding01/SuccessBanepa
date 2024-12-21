import React, { useState } from 'react';

const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg',
  '/images/image7.png',
  '/images/image8.jpeg',
  '/images/image9.jpeg',
  '/images/image10.jpeg',
  '/images/image11.jpeg',
  '/images/image12.jpeg',
  '/images/image13.jpeg',

  // Add paths for all 30 images
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pop-Up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 p-2 rounded-full focus:outline-none"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Large Image */}
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
