import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://via.placeholder.com/200"
            alt="CEO of Success BCEC Abroad Study"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Success BCEC Abroad Study
            </h1>
            <p className="text-gray-600 mt-2">
              "We strive to make your dreams of studying abroad a reality!"
            </p>
          </div>
        </div>

        {/* Office Description */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
          Success BCEC Abroad Study, founded in 2018 in Banepa, with its head office located in Baghbazar, Kathmandu, has emerged as a leading name in the field of abroad studies. The institution is committed to providing comprehensive guidance to students aspiring to study overseas, ensuring that each one receives personalized attention and support throughout the process.

From application to visa approval, Success BCEC Abroad Study has built a reputation for its expertise in navigating the complex procedures involved in studying abroad. With a remarkably high visa success rate, the institution has helped numerous students achieve their academic dreams in countries like the USA, UK, Australia, Canada, and more. Their team of dedicated professionals offers career counseling, university selection, application processing, and visa guidance, making the entire journey smooth and hassle-free for students.

The positive feedback from students is a testament to the institution's commitment to excellence. Success BCEC Abroad Study has earned the trust and loyalty of its clients through its transparent practices, reliable services, and consistent results. Today, it is recognized as a go-to agency for students who wish to pursue higher education abroad, cementing its place as a trusted name in the industry.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Countries We Serve
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Japan</h3>
              <p className="text-gray-600">
                We guide students in pursuing higher education in Japan,
                focusing on language schools and top universities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">USA</h3>
              <p className="text-gray-600">
                The USA offers world-class universities, and we help students
                with applications, scholarships, and visa processing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Australia</h3>
              <p className="text-gray-600">
                Explore your academic potential in Australia with our expert
                guidance for top institutions and smooth visa processing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Canada</h3>
              <p className="text-gray-600">
                Canada is known for its quality education and safe environment.
                We assist students in securing admissions and student visas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">UK</h3>
              <p className="text-gray-600">
                The UK offers prestigious universities with diverse programs. We ensure a smooth application process for aspiring students.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                South Korea
              </h3>
              <p className="text-gray-600">
                Study in South Korea and experience its cutting-edge education
                system and vibrant culture with our expert support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
