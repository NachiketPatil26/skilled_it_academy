import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="relative">
        <img
          src={assets.footerbg}
          className="w-full h-full object-cover"
          alt="Footer with branding and team"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="absolute font-montserrat mt-96 top-24 inset-0 flex flex-col items-center justify-center space-y-6 text-center p-6">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-screen-lg">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-base font-bold uppercase text-lightpurple">
              Company
            </h2>
            <ul className="text-gray font-semibold">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-6 text-base font-bold uppercase text-lightpurple">
              Help Center
            </h2>
            <ul className="text-gray font-semibold">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase text-lightpurple">
              Legal
            </h2>
            <ul className="text-gray">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h2 className="mb-6 text-base font-semibold uppercase text-lightpurple">
              Download
            </h2>
            <ul className="text-gray font-semibold">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS App
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android App
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-8">
          <a
            href="#"
            aria-label="Facebook"
            className="bg-darkpurple p-6 rounded-full hover:bg-lightpurple transition duration-300"
          >
            <i className="fab fa-facebook-f">
            <svg class="w-6 text-gray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>

            </i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="bg-darkpurple p-6 rounded-full hover:bg-lightpurple transition duration-300"
          >
            <i className="fab fa-twitter">
            <svg class="w-6 text-gray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
            </svg>

            </i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="bg-darkpurple p-6 rounded-full hover:bg-lightpurple transition duration-300"
          >
            <i className="fab fa-instagram">
            <svg class="w-6 text-gray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                 <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg>

            </i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="bg-darkpurple p-6 rounded-full hover:bg-lightpurple transition duration-300"
          >
            <i className="fab fa-linkedin-in">
            <svg class="w-6 text-gray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg>
            </i>
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative bg-[#090016] py-4 text-center font-montserrat">
        <p className="text-base text-gray">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center test-sm space-x-4 mt-2">
          <a href="#" className="text-gray hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray">|</span>
          <a href="#" className="text-gray hover:underline">
            Terms of Service
          </a>
          <span className="text-gray">|</span>
          <a href="#" className="text-gray hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
