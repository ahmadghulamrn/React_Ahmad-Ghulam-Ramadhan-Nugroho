// src/AboutUs.jsx

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 p-10">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">About Us</h2>

      {/* New section for small images */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex justify-center">
          <img src="/img1.jpg" alt="Image 1" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img2.jpg" alt="Image 2" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img3.jpg" alt="Image 3" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img4.jpg" alt="Image 4" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img5.jpg" alt="Image 5" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img6.jpg" alt="Image 6" className="rounded-lg shadow-md" />
        </div>
      </div>

      <p className="text-lg text-gray-300 text-center">
        Distro Clothing is Your Destination for Trendy Streetwear. Our collection features high-quality apparel that blends style, comfort, and individuality. From casual tees and hoodies to stylish jeans and accessories, we offer a wide range of clothing that suits your unique taste. A great outfit can boost your confidence, and our mission is to make you feel comfortable and stylish every day. Whether you're looking for a bold statement piece or a simple, laid-back look, we have something for everyone. Explore our collection and find the perfect outfit to express yourself.
      </p>

      <p className="text-lg text-gray-300 text-center mt-4">
        This is a website landing page design featuring a minimalist illustration of an urban skyline. The design includes a simple header with navigation links, a bold welcome message, and a call to action button. The use of modern colors and patterns creates a stylish and edgy atmosphere, which may be suitable for a website focusing on streetwear, urban fashion, or youth culture.
      </p>
    </section>
  );
};

export default AboutUs;
