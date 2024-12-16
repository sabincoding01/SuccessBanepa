import React from "react";

const servicesData = [
  {
    title: "Career Counselling",
    description:
      "We provide career counseling for those students who want to study in abroad. We have the best counselor.",
    icon: "💬", // Replace with icons if you use a library like FontAwesome
  },
  {
    title: "Test Preparation",
    description:
      "To get admission to a university abroad, students should take preparation classes. We offer NAT, JLPT, and IELTS classes.",
    icon: "📝",
  },
  {
    title: "Documentation",
    description:
      "We guide you in the entire visa process including form fill-up application, recommendation letter, transcripts, statement of purpose.",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-950">OUR SERVICES</h2>
        <p className="text-black font-semibold pt-2">We Provide Quality Services to Our Students</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl text-blue-600 mb-4 text-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
