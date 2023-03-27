import React, { useRef } from "react";
import FollowUs from "./FollowUs";

const ContactUs = () => {
  const myRef = useRef(null);

  // useEffect(() => {
  //   if (myRef.current) {
  //     myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }, []);

  return (
    <div
      id="contact"
      ref={myRef}
      className="flex p-3 pb-3 mt-28 md:mt-10 md:p-6 bg-primary w-full items-center relative z-10"
    >
      <div
        className="
        flex sm:rounded-tr-[4vw] rounded-tr-[10vw] justify-center flex-wrap w-full md:flex-nowrap
         bg-clip-padding "
      >
        {/* :CONTACT INFOS CONTAINER */}
        <div
          className="w-[90vw] col-span-full sm:col-span-3 md:col-span-2 py-4 grow
      text-primary flex flex-col  h-full md:border-r-2 md:mr-5 border-accent"
        >
          {/* <img src={"Logo"} alt="Asiet Logo" className="   pl-0 md:pl-0    md:pt-0 pb-5" srcSet="" /> */}
          {/* ::Title Contact */}
          <h2
            className="text-3xl leading-[0.75]  font-poppins font-semibold tracking-wide p-5 pb-4 text-accent"
            // style={{
            //   textOrientation: "mixed",
            //   writingMode: "vertical-rl",
            // }}
          >
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col h-full">
              {/* ::Address */}
              <div className="mt-5 px-5 sm:mt-5 space-y-3 text-accent">
                <h5 className="text-lg font-poppins font-semibold">Address</h5>
                <div className="text-base font-poppins text-opacity-60 ">
                  5CHJ+758,
                  <br /> Vidya Bharathi Nagar, <br /> Mattoor, Kalady,
                  <br /> Ernakulam, Kerala 683574
                  <br />
                  <a
                    href="mailto:brahma@adishankara.ac.in"
                    aria-label="mail"
                    className="inline-block font-poppins hover italic pt-3"
                  >
                    brahma@adishankara.ac.in
                  </a>
                </div>
              </div>
            </div>
            {/* ::Contact */}
            <div className="flex flex-col h-full">
              <div className="mt-5 sm:mt-5 space-y-3 text-accent px-5 ">
                <div className="space-y-1 text-base text-opacity-60">
                  <h5 className="text-lg font-poppins font-semibold mb-4">
                    Coordinators
                  </h5>
                  <div className="font-poppins">
                    <h5 className="text-base font-poppins text-opacity-60">
                      Adith Menon : +91 95266 35524
                      <br /> Jithu Krishna : +91 9567373010
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-0 px-5 sm:mt-0 space-y-3 text-accent">
                <h5 className="text-base font-poppins text-opacity-60 ">
                  Treesa Jomol k : +91 73564 74358
                  <br />
                  Anjanamol jose : +91 75929 80883
                  <br />
                  Sangeetha Prasad : +91 91884 32644
                  <br />
                  Ashwin S Nair : +91 75929 80883
                </h5>
              </div>
            </div>
          </div>
          <FollowUs />
        </div>

        {/* :MAP CONTAINER */}
        <div className="rounded-tr-[3vw] w-full min-h-[30vh] pt-5 md:pt-0 transition-all duration-100 bottom-0 left-0">
          {/* Embed Google map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.8211700506645!2d76.428809361558!3d10.17761954352797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1672305829425!5m2!1sen!2sin"
            title="map"
            scrolling="no"
            frameBorder="0"
            className="w-full h-full rounded-md rounded-tr-[6vw]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
