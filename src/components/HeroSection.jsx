import React from "react";
import { motion } from "framer-motion";
import Button from "../utils/Button";

// Import images from the assets folder
import image1 from "../assets/images/test1.jpg";
import image2 from "../assets/images/test1.jpg";
import image3 from "../assets/images/test1.jpg";
import image4 from "../assets/images/test1.jpg";
import image5 from "../assets/images/test1.jpg";
import image6 from "../assets/images/test1.jpg";
import image7 from "../assets/images/test1.jpg";
import image8 from "../assets/images/test1.jpg";

const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const animationVariants = {
    animate: {
      x: [0, -250 * images.length], // Scroll full width of the images
      transition: {
        x: {
          repeat: Infinity, // Loop animation
          repeatType: "loop",
          duration: 20, // Duration for one loop
          ease: "linear", // Smooth transition
        },
      },
    },
  };

  const reverseAnimationVariants = {
    animate: {
      x: [-250 * images.length, 0], // Reverse direction
      transition: {
        x: {
          repeat: Infinity, // Loop animation
          repeatType: "loop",
          duration: 20, // Duration for one loop
          ease: "linear", // Smooth transition
        },
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-gray-900">
          Leading the Way in Carbon Capture Technology
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At EarthSaathi, we are committed to revolutionizing carbon capture and
          biogas upgrading technology. Our innovative solutions are not only
          environmentally sustainable but also highly efficient, setting a new
          standard in the industry.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary">Learn More</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="bg-gray-100 py-16">
        <div className="space-y-8">
          {/* First Row: Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              variants={animationVariants}
              animate="animate"
            >
              {images.concat(images).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-64 h-48 m-2 rounded-md flex-shrink-0 object-cover"
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row: Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              variants={reverseAnimationVariants}
              animate="animate"
            >
              {images.concat(images).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-64 h-48 m-2 rounded-md flex-shrink-0 object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
