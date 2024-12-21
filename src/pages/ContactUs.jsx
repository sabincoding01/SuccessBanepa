import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const mapStyles = {
    height: "300px",
    width: "100%",
  };

  const center = {
    lat: 27.63022423910164, // Latitude for Success Abroad Study, Banepa
    lng: 85.52524553765289, // Longitude for Success Abroad Study, Banepa
  };

  const handleDirection = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=Success+Abroad+Study+Banepa`;
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Kathmandu Office</h2>
          <p>Email: info@sasc.edu.np</p>
          <p>Phone: 01-5344021, 9767489580</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Banepa Office</h2>
          <p>Email: info@sasc.edu.np</p>
          <p>Phone: 01-665020, 9841415629</p>
          <button
            onClick={handleDirection}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start Directions to Banepa Office
          </button>
        </div>

        {/* Google Map */}
        <div>
          <LoadScript googleMapsApiKey="">
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={center}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
