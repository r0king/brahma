import React, { useRef } from "react";

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
      className="flex p-3 pb-5 md:p-6 bg-accent justify-center items-center relative z-10 my-[2vw]"
    >
      <div
        className="
         w-[90vw] flex sm:rounded-tr-[4vw]   rounded-tr-[10vw]  
         bg-clip-padding "
      >
        <div className="flex">
          {/* :CONTACT INFOS CONTAINER */}
          <div
            className="col-span-full sm:col-span-3 md:col-span-2 pt-4
 text-primary flex  w-[40vw] h-full mx-auto "
          >
            {/* <img src={"Logo"} alt="Asiet Logo" className="   pl-0 md:pl-0    md:pt-0 pb-5" srcSet="" /> */}
            {/* ::Title Contact */}
            <h2
              className="text-7xl leading-[0.75]  font-morganite tracking-wide rotate-180 p-2"
              style={{
                textOrientation: "mixed",
                writingMode: "vertical-rl",
              }}
            >
              Contact Us
            </h2>

            {/* ::Address */}
            <div className="mt-5 sm:mt-5 space-y-3">
              <h3 className="text-lg font-poppins">Address</h3>
              <p className="text-base font-poppins text-opacity-60">
                5CHJ+758,
                <br /> Vidya Bharathi Nagar, <br /> Mattoor, Kalady,
                <br /> Ernakulam, Kerala 683574
              </p>
            </div>

            {/* ::Contact */}
            <div className="mt-5 sm:mt-5 space-y-3">
              <div className="space-y-1 text-base text-opacity-60">
                <p className="font-poppins">
                  qwer : +91 1234567
                  <br />
                  asdf : +91 12345
                  <br />
                </p>
                <a
                  href="mailto:Brahma.in"
                  aria-label="mail"
                  className="inline-block font-poppins hover"
                >
                  Brahma.in
                </a>
              </div>
            </div>
          </div>

          {/* :MAP CONTAINER */}
          <div className="rounded-tr-[3vw] w-full">
            {/* Embed Google map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.8211700506645!2d76.428809361558!3d10.17761954352797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1672305829425!5m2!1sen!2sin"
              title="map"
              scrolling="no"
              frameBorder="0"
              className="w-screen h-64 sm:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
