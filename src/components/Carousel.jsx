import { useState, useEffect } from "react";

const Carousel = () => {
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for the carousel
  const images = [
    "static/images/sandyq.jpeg",
    "static/images/auyl.jpg",
    "static/images/uzbek_rest.jpeg",
    "static/images/selfie.webp",
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          className="w-full max-h-screen object-fill transition-all duration-500  "
        />
      </div>

      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
        >
          &#10095;
        </button>
      </div>

      {/* Indicators (Optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
