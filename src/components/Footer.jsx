import React from "react";
import { FaTiktok, FaFacebook, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">
                <span className="font-medium">Address:</span> Chardobato, Banepa, Khasibajar, Kavre
              </li>
              <li className="mb-2">
  <span className="font-medium">Phone:</span>{" "}
  <a href="tel:+9779841415629" className="text-blue-400 hover:underline">
    +977 9841415629
  </a>,{" "}
  <a href="tel:+9779851033828" className="text-blue-400 hover:underline">
    011 665020
  </a>
</li>

              <li className="mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:successbcecbanepa@gmail.com" className="text-blue-400 hover:underline">
                  successbcecbanepa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.tiktok.com/@successbcecbanepa?_t=8sLpkVtXaC7&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 text-xl"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bcec.edu?mibextid=wwXIfr&rdid=8w12mUL91PBxyEAT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1X8Vp8D5RX%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 text-xl"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://sasc.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 text-xl"
                >
                  <FaGlobe />
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Our Office</h2>
            <p className="mb-4">
              Our office is located at the heart of Kavre, dedicated to serving the local community with professional
              services and reliable solutions.
            </p>
            <a href="#contact" className="text-blue-400 hover:underline">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 Success BCEC Abroad Study. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
