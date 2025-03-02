import React from "react";
import { PenSquare, Users, LineChart, Palette } from "lucide-react"; // Import Lucide icons

const ServicesPage = () => {
  // List of services
  const services = [
    {
      id: 1,
      title: "Content Creation",
      description: "Create and publish high-quality blog posts with ease. Our platform supports rich text editing, media embedding, and more.",
      icon: <PenSquare className="w-12 h-12 mx-auto mb-4 text-blue-600" />, // Lucide icon
    },
    {
      id: 2,
      title: "Community Engagement",
      description: "Engage with your readers through comments, likes, and shares. Build a loyal community around your blog.",
      icon: <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />, // Lucide icon
    },
    {
      id: 3,
      title: "Analytics & Insights",
      description: "Track your blog's performance with detailed analytics. Understand your audience and optimize your content strategy.",
      icon: <LineChart className="w-12 h-12 mx-auto mb-4 text-purple-600" />, // Lucide icon
    },
    {
      id: 4,
      title: "Customizable Themes",
      description: "Choose from a variety of themes or create your own. Make your blog truly unique and reflective of your brand.",
      icon: <Palette className="w-12 h-12 mx-auto mb-4 text-orange-600" />, // Lucide icon
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Service Icon */}
            {service.icon}

            {/* Service Title */}
            <h2 className="text-xl font-semibold text-center mb-2">{service.title}</h2>

            {/* Service Description */}
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;