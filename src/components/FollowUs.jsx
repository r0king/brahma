import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import CardButton from './CardButton';

export default function FollowUs() {
  return (
    <div className="flex flex-col md:flex-row text-[4vw] md:text-[1.5vw] md:mt-10 justify-center px-5">
      <div className="flex-auto ">
        <div className="flex flex-wrap pb-5 justify-start">
          <a
            className="hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=brahma@adishankara.ac.in&su=Brahma%20Cultural%20Fest%20of%20ASIET&body=Hello%20Team,%0D%0A%0D%0AWe%20are%20reaching%20out%20to%20you..."
              );
            }}
            href="mailto:youremail@gmail.com?subject=Brahma%20Cultural%20Fest%20of%20ASIET&body=Hello%20Team,%0D%0A%0D%0AWe%20are%20reaching%20out%20to%20you..."
          >
            <SiGmail fill="var(--color-accent)" />
          </a>
          <div className="hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]">
            <a
              href="https://www.instagram.com/brahma_asiet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram fill="var(--color-accent)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
